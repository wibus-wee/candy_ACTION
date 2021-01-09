---
date: 2020-12-13T09:28:11.695Z
updated: 2020-12-27T07:28:00.030Z
title: Mix 使用文档
slug: typecho-theme-Mix
categories: 折腾
type: Post
permalink: posts/typecho-theme-Mix
---


> Mix —— 空间混合体

## 前期准备工作

**⚠️注意，这个不是Mix-Space！部署Mix-Space的请前往 https://iucky.cn/mix-space-start**


想要内测的大佬请加群哇，以及时报告错误🙅：

点击链接加入群聊【Theme-Mix】：https://jq.qq.com/?_wv=1027&k=nIdoRbMY

> 万分感谢您能来内测本主题！


下载主题文件并上传至站点themes目录，解压并修改文件夹名为`Mix`

站点后台启动主题即可食用～

## 主题必要设置

你只能拥有两个分类，一个是输出文章的，一个是输出日记的（当然不使用日记可以不新建）我们使用标签来作为分类显示😂

输出`文章`的分类名可以自己定义，但是分类缩略名请写`article`

输出`日记`的分类名可以自己定义，但是分类缩略名请写`dairy`

下面是一些说明图片

![edit](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/edit.png)
![cate](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/cate.png)

### 了解更多Json

Name是指名字，Link是指跳转链接，More是指描述

至于后面的数字就是第几个（必须要4个，目前策略不够完善，以后修正）

例子：

```json
{
  "Name1": "关于", 
  "Link1": "https://iucky.cn/about",
  "More1": "关于我的一切",
  
  "Name2": "留言", 
  "Link2": "https://iucky.cn/message",
  "More2": "留言刷刷走起来", 
  
  "Name3": "Mix-space", 
  "Link3": "https://iucky.cn/mix-space", 
  "More3": "Mix-Space使用文档",
  
  "Name4": "订阅", 
  "Link4": "https://iucky.cn/feed",
  "More4": "来份订阅很不错！"
}
```

### 更多文章页面

1. 请先去新增独立页面，自定义模板选择`首页显示更多`，路径和页面名字自己填写，之后设置为隐藏，建议填写好记一点的，之后记住他，保存

2. 去到外观设置中，找到 `显示更多文章链接` 选项，下面输入你刚刚新建的页面地址，保存设置即可！

### 短代码功能

Mix 短代码介绍：https://iucky.cn/posts/things/mix-shortcode

## 开发日志

https://iucky.cn/posts/things/how-to-develop-mix-typecho