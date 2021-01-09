---
date: 2020-12-06T12:24:14.427Z
updated: 2021-01-02T13:40:08.839Z
title: 使用文档
slug: mix-space-use
subtitle: Mix-Space使用文档
type: Page
permalink: mix-space-use
---


部署文档：https://iucky.cn/mix-space-start

## Admin 修改信息

我们先进入admin，初始密码是master

进入之后，我们点击`设定 - 主人设定`

修改昵称、别名，直接点击对应文字即可编辑，之后旁边的都一定要填写完好

> 记得保存！

我们再点击`重置`选项，输入新的密码即可修改admin进入的密码啦～

## 必要的修改配置

点击`设定 - 系统设定`

修改网站设置为你所对应的地址（要是外网能访问到的，除非你是本地localhost运行啦）

WebSocket 地址不需要修改，默认就好

点击保存！

后面还有些SEO设置，啥的。自行去摸索吧

## 新增页面

首页有两个页面的入口，一个是`留言`，一个是`关于`

我们进入Admin-其他-页面-新建页面

标题和副标题随你选择，反正下面的路径名字要写对

关于的路径是：`about`

留言的路径是：`message`

## 修改Kami的某处后应用修改

进入kami目录运行下面的命令即可～

```bash
yarn build
pm2 start ecosystem.config.js
```

## 重新启动后启动服务


```bash
cd 
cd mx
cd server
pm2 start ecosystem.config.js
cd ..
cd kami
pm2 start ecosystem.config.js
```

## 使用中发现的小特性

1. 在文章开头使用引用符号，将会有另外一种显示
   > 一般的引用是这样子的
   >

   而在开头，是不一样的，可以自己试试～
2. 在新建*目录*的时候,新建*分类*，新建*友链*的时候
   如果一次性要新建多个的话，在新建了一个之后**一定要刷新**！不然你的结果将会是一直修改你新增的那**一个**
   
   
|| 嘻嘻(♡˙︶˙♡) 这里是黑色遮挡||

---

## 添加Live2D看板娘

教程地址：https://iucky.cn/play/mix-space-live2d

## 前端登录

地址为：域名/login

## 日记页编辑器

> 前提应该是要登录了的

进入一篇日记，双击里面的文字，就会出现一个编辑器啦

就像这个亚子

![](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/QQ20210102-213945@2x.png)