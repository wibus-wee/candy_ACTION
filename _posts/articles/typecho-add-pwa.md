---
date: 2020-12-18T16:05:59.009Z
updated: 2020-12-18T16:06:17.755Z
title: Typecho博客加入PWA
slug: typecho-add-pwa
categories: 折腾
type: Post
permalink: posts/typecho-add-pwa
---

## 前言

这次踩了好多坑，有很多篇教程都是一样的，但是又刚刚好似乎是不适配handsome主题，总是出错。之后花了一晚上的时间和我的好朋友 **[霂森西 _ 櫻玲桉](https://dlizi.com/)** 在研究，陪着我搞了很长的时间，感谢~

> 有一点请注意：使用PWA后请不要启动handsome插件自带的**本地离线缓存**功能

其实这个功能就是我们要弄的PWA（但今天我们不去用它）

> 本文参考了https://lzw.me/a/pwa-service-worker.html

## 你需要注意的Service Worker 特点

- 网站**必须使用 HTTPS**。除了使用本地开发环境调试时(如域名使用 `localhost`)
- 运行于浏览器后台，可以控制打开的作用域范围下所有的页面请求
- 单独的作用域范围，单独的运行环境和执行线程
- 不能操作页面 DOM。但可以通过事件机制来处理

## 如何改造？

参考如下步骤为你的博客快速地引入 PWA：1. 添加sw.js 2. 添加offline.html 3. manifest.jsopn 4. 引入 5. 注册sw.js

### 1. 添加sw.js

可以直接参考本站的sw.js https://blog.iucky.cn/sw.js

之后放入网站根目录

### 2. offline.html

设计简单的 `offline.html` 用于离线降级显示。简单的示例参考： `https://blog.iucky.cn/offline.html`

放入网站根目录

### 3. manifest.json

有个注意事项：

需要注意的是，你需要制作一个**256\*256及以上的ico**，不然将会出现报错，无法成功！

下载本站的json并修改适合你的博客，放到站点根目录（https://blog.iucky.cn/manifest.json）


```json
{
  "scope": "/",
  "name": "秉松博客",
  "short_name": "秉松博客",
  "start_url": "/",
  "display": "standalone",
  "description": "有秉性正直的松",
  "dir": "rtl",
  "lang": "cn",
  "orientation": "portrait",
  "theme_color": "#fff",
  "background_color": "#fff",
    "icons": [
        {
            "src": "https://blog.iucky.cn/favicon-1.ico",
            "sizes": "64x64",
            "type": "image/png"
        },
        {
            "src": "https://blog.iucky.cn/favicon-1.ico",
            "sizes": "120x120",
            "type": "image/png"
        },
        {
            "src": "https://blog.iucky.cn/favicon-1.ico",
            "sizes": "144x144",
            "type": "image/png"
        },
        {
            "src": "https://blog.iucky.cn/favicon-1.ico",
            "sizes": "152x152",
            "type": "image/png"
        },
        {
            "src": "https://blog.iucky.cn/favicon-1.ico",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "https://blog.iucky.cn/favicon-1.ico",
            "sizes": "384x384",
            "type": "image/png"
        },
        {
            "src": "https://blog.iucky.cn/favicon-1.ico",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}

```

### 引入文件以及载入支持

将下面代码放至`自定义输出head 头部的HTML代码`

```html
<!--PWA（manifest必须加载）-->
<link rel="manifest" href="/manifest.json">
<!--PWA（为iOS和Windows10载入支持）-->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="秉松博客">
<link rel="apple-touch-icon" href="https://blog.iucky.cn/favicon-1.ico">
<meta name="msapplication-TileImage" content="https://blog.iucky.cn/favicon-1.ico">
<meta name="msapplication-TileColor" content="#fff">
<!--PWA End-->
```

   

### 注册sw.js

将下面的代码放入`自定义输出body 尾部的HTML代码`

注意先知：

请注意，这串代码中，你需要**修改一处地方**，自己从代码里找下吧


```html
<script>
// 注册 ServiceWorker
function regSW() {
    if ('serviceWorker' in navigator) {
        // 注册
        navigator.serviceWorker
            .register('/sw.js', {scope: '/'})
            .then( function(registration) {
                console.log('ServiceWorker 注册成功！作用域为: ', registration.scope);
            })
            .catch(function(err) {
                console.log('ServiceWorker 注册失败: ', err);
            });
 
        // SW 消息处理
        navigator.serviceWorker.ready.then(function(reg) {
            if (!window.Notification || !window.MessageChannel) {
                return;
            }
 
            // 建立一个消息管道，用于当前页面与 SW 之间的消息传递，也便于 SW 知道该消息的来源
            var channel = new window.MessageChannel();
 
            channel.port1.onmessage = function(e) {
                console.log('get Message: ', e.data);
                if (!e.data) {
                    return;
                }
 
                // 要求申请通知权限
                if (e.data.type === 'applyNotify') {
                    window.Notification.requestPermission().then(function(grant) {
                        if (grant !== 'granted') {
                            console.log('申请通知权限被拒绝了！')
                            return;
                        }
 
                        reg.active.postMessage({type: 'notify', info: e.data.info}, [channel.port2]);
                    });
                }
            }
 
            reg.active.postMessage('hello', [channel.port2]);
        });
 
        // 掉线通知示例
        $(window).on('offline', function() {
            Notification.requestPermission().then(function (grant) {
                if (grant !== 'granted') {
                    return;
                }
 
                var notification = new Notification("Hi，网络不给力哟", {
                    body: '您的网络貌似离线了，不过在秉松博客里访问过的页面还可以继续打开~',
                    icon: 'https://kyun.ltyuanfang.cn/tc/2020/07/30/9b5b630e9860b.png'
                });
 
                notification.onclick = function() {
                    notification.close();
                };
            });
        })
    }
}
regSW();
</script>
```

最后，刷新下浏览器缓存，就可以看到效果啦！！

> 成功了的话可以在评论区和我说说呀

## 最后效果
![](https://kyun.ltyuanfang.cn/tc/2020/11/08/85eae916ec4c0.jpg)