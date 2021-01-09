---
date: 2020-12-19T03:12:42.384Z
updated: 2020-12-19T03:17:03.586Z
title: Typecho博客加入Pjax
slug: typecho-add-pjax
categories: 编程
type: Post
permalink: posts/typecho-add-pjax
---


## 介绍
官方介绍：pushState + ajax = pjax 带来最直观的效果是整个网站变成单页应用。这样的效果将会极大的提升用户体验，并且可以减少https的请求的次数和内容。使用github上面的一个开源项目defunkt/jquery-pjax 可以很轻松的帮助我们实现pjax。

> 需要具备基础的html & javascript 知识。如果你连div和script标签仍然不认识，请忽略该篇文章。

## 实现
js文件引入
1.引入jquery.min.js,query.pjax.js
```html
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery.pjax/2.0.1/jquery.pjax.min.js"></script>
```

（或者自己下载这个项目里的js https://github.com/defunkt/jquery-pjax 这个项目里面下载里面的jquery.pjax.js）

### 如何使用

在footer.php里面加上这段代码就初步成功。【继续往下看！尤其是container的介绍】
```html
<script>
$(document).pjax(selector, [container], options) 
</script>
```

`selector` 给哪些selector绑定pjax事件，一般的为："a", 如果要去掉一些外连的URL， 这里的selector可以为:`"a[href^='https://iucky.cn']"`

`[container] `内容变换容器，是指哪个容器里的内容发生的变换，如： '#pjax-content'。就是页面中只刷新的这个部分。

`options` 官方文档提供了更多的选项，以便更好地自定义选项。具体查考官方文档。以下列出我使用的一些选项。

`container` 替换的容器的css选择器。填你的替换容器ID即可。

`timeout` 超时就会被迫页面就会完全刷新，单位毫秒。

`fragment` 这个作为整个pjax框架，必须写上。

所以，代码可以这样写

<script>
$(document).pjax('a[href^="<?php Helper::options()->siteUrl()?>"]:not(a[target="_blank"], a[no-pjax])', {
    container: '#pjax-container',
    fragment: '#pjax-container',
    timeout: 8000
})
</script>
一定要放在jquery.min.js 和 jquery.pjax.min.js 的后面

解释一下上面代码：`<?php Helper::options()->siteUrl()?>`是typecho的自带函数，调用本站的首页地址！也就是只对本站的，并且没有`_blank`属性的，标签里不含**no-pjax**的链接实行pjax！局部刷新的区域是`#pjax-container`的部分！

其中#pjax-container是你的局部刷新部分，你可能没有这个div，你自己在添加一个`<div id="pjax-container"></div>`包裹住你想局部刷新的部分就行了！

## 加载动画

pjax项目还提供了一些pjax事件。以便在pjax执行前后加载一些东西。

加载动画只需要使用这两个事件pjax:send和pjax:complete

如我之前写的：

```html
<script>
$(document).on('pjax:send',
function() {
    $('#loader-wrapper').addClass("in");
})

$(document).on('pjax:complete',
function() {
    $('#loader-wrapper').removeClass("in");
}）
</script>
```

解释一下上面代码：就是在pjax执行开始的时候，给#loader-wrapper加上in的样式名称。在pjax结束的时候给给#loader-wrapper去掉in的样式名称，这样就有了加载出现动画，加载后动画消失的效果。

我目前正在开发的主题"Mix"使用的加载动画来自这儿：nprogress：http://ricostacruz.com/nprogress/

### 引入nprogress

和引入jquery一样，放在header或者footer，一般是放在jquery的下面的

```html
<script src="https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.js"></script>
<link href="https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.css" rel="stylesheet">
```

nprogress使用起来更简单。在pjax:send的事件里面添加：`NProgress.start();` .在pjax:complete的事件里面添加：`NProgress.done();`

更多使用方法点开链接，看一下github的说明就行！

## 一些问题的解决

pjax采用的是异步请求资源，也就是每次请求数据不是重新获取整个页面的数据而是只会获取#pjax-container容器里面的数据。所以如果一个函数在容器外面（如多说加载函数），在A页面没有，B又需要的话，那么从A页面进入B页面，这个函数就不会执行。必须回调这个函数。

注： 不同主题对于#pjax-container选取不一样以及结构可能不同解决方法会有不同（一般是差不多的）


### js失效问题

在`pjax:complete`事件 重载相关函数即可。

### 举例

```html
<script>
$(document).on('pjax:complete',
function() {
    GenerateContentList();
    setupContents();
    rebindEvents();
</script>
```
所以，最后我的pjax代码就是酱紫的！

```html
<script>
//pjax 刷新

$(document).pjax('a[href^="<?php Helper::options()->siteUrl()?>"]:not(a[target="_blank"], a[no-pjax])', {
    container: '#pjax-container',
    fragment: '#pjax-container',
    timeout: 8000
}).on('pjax:send',
function() {
    NProgress.start();//加载动画效果开始
    
}).on('pjax:complete',
function() {
NProgress.done();//加载动画效果结束
imageeffct();//灯箱函数重载
 setupContents();//某个函数重载
lue();//lue函数重载
reHighlightCodeBlock();//代码高亮函数重载
</script>
```

至此！享受你的pjax无刷新技术吧！