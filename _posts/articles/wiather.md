---
date: 2020-12-27T11:32:39.373Z
updated: 2020-12-27T11:32:39.365Z
title: Wiather - 一款高德天气插件
slug: wiather
categories: 作品
type: Post
permalink: posts/wiather
---


## 插件信息

插件名称：`Wiather`

作者：<a class="Pshake">Wibus</a>

参照项目：AliceStyle

插件最新版本：`V3.1.0`

## 食用方法

首先，先去GitHub将代码下载下来，解压后修改文件夹名字为`Wiather`，启动插件即可
**但是启动插件后请先进入插件设置界面点击保存设置一次**

https://github.com/wibus-wee/Typecho-Plugin-Wiather GitHub 下载

## 插件特点

![自带检测更新机制](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/plugin-setting-1.jpg)
![多种自定义设置](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/plugin-setting-2.jpg)

## 插件弹窗样式

![原生alert弹窗](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/2020-12-5-alert.jpg)
![handsome自带弹窗](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/2020-12-5-handsome-alert.jpg)
![Sweetalert2](https://gitee.com/wibus/blog-assets-goo/raw/master/asset-pic/2020-12-5-sweet-alert.jpg)

图标样式自行探究吧

### 备用的API
由**茶栀**提供

```TXT
aaaf9a955be7212018298757655229eb
```

### 当启动插件发现TTFB变长的问题时

请考虑使用Wiather特别版本（此版本最新只到1.2.0）

此版本不放在GitHub中，放在本博客的第二网盘中

> 已经不再提供使用

新版本插件目录下的文件：

```tree
.
├── Plugin.php
└── static
    └── libs
        └── jquery-3.5.1.min.js
```

## 开发日志

2020-12-5 

新增了一种弹窗样式

正在准备一个自定义功能（作为彩蛋放入插件中，可以在插件设置界面找找彩蛋 ::QQe:qq+1:: 

2020-11-24 

新增检测更新机制

新增了一种handsome弹窗图标样式

修复在handsome主题中不启动主题自带弹窗而导致的错误

适配了低版本Typecho版本