---
date: 2020-12-13T09:31:26.646Z
updated: 2020-12-27T10:30:33.898Z
title: 关于Mix主题的开发
slug: how-to-develop-mix-typecho
categories: 事件日志
type: Post
permalink: posts/how-to-develop-mix-typecho
---

> Mix 是一款Typecho主题，根据Mix-Space进行仿写，目前基本可以投入使用！

使用文档在此：https://iucky.cn/posts/play/typecho-theme-Mix

---

想要内测的大佬请加群哇，以及时报告错误🙅：

点击链接加入群聊【Theme-Mix】：https://jq.qq.com/?_wv=1027&k=nIdoRbMY

**也是万分感谢您能来内测本主题！暂时先不开源**

## TODO

> **{xxx}** 指实现功能使用的方法

* [x] 首页分部件编写 **{index.php}**
* [x] 自动识别h1, h2, h3...
* [x] 首页显示随机缩略图 **{libs.php}**
* [x] 模板备份设置功能 **{functions.php}**
* [x] 文章样式选择 **{文章 / 日记}**
* [X] 完善内页
* [X] Pjax 无刷新体验 (Require .js) **{footer.php}**
* [X] functions.php 更新检测（不想用JavaScript控制了）
* [X] 部件「了解更多」使用json进行设置
* [X] 短代码功能 **{libs.php}**
* [ ] 评论区功能
* [ ] 多种配件样式选择
* [ ] 日记可添加心情，天气等配件
* [ ] 详细的时间线
* [ ] 首页、内页的朋友们
* [ ] 动态载入效果 (Require .js)
* [ ] 基本的代码高亮 (Require .js)
* [ ] 部件「了解更多」优化json解析，取消固定显示限制
* [ ] 修改Typecho后台，变成Mix-Space后端样式（以插件形式）
* [ ] 项目、一言功能
* [ ] 夜晚模式
* [ ] Aplayer播放器功能

## 开发日志

- Version: `V1.0.0`

  Date: 2020-12-12

  Update Log: 

  1. 选择首页显示部件
  2. 自定义CSS，自定义 Javascript
  3. 自定义 头部、底部HTML输出
  4. 自定义底部左、右侧文字信息

- Version: `V1.1.0`

  Date: 2020-12-13

  Update Log:

  1. 新增文章样式选择「文章 / 日记」
  2. 外观设置加入备份设置功能
  3. 解决加载woff报错问题，修复原有评论区样式（评论区尚未上线）
  4. 添加自定义选项：首页显示部件，顶部图标跳转链接等
  5. 将博文、日记输出改为输出最新的4篇
  6. ~~部件「了解更多」使用json进行设置内容~~（出现问题）
  
- Version: `V1.2.0`

  Date: 2020-12-19
  
  Update Log:
  
  1. 部件「了解更多」使用json进行设置内容
  2. 增加了随机图片的链接数量
  3. 修补Issue中提到的问题
  4. 首页`最新博文`类的标题背景加入随机显示颜色功能
  5. 增加文章显示更多功能，日记获取最新文章
  6. 补充了页面，重写了libs.php
  7. 主题开始支持更新检测
  8. 加入全站Pjax！
  
    
- Version: `V1.2.1`

  Date: 2020-12-20
  
  1. 因Pjax引起的样式问题的修复
  
  
- Version: `V1.2.2`

  Date: 2020-12-27
  
  1. 新增了十几个代码框（ https://iucky.cn/posts/works/super-code-ui ）
  2. 修复头部图标点击无法返回的问题
  3. 添加了Pjax重载函数的设置
  4. 在准备Pro版的研发
  5. 修复了一个function的问题
  6. *`[scode]`短代码功能*
  
  > 此版本开始需要授权，请找管理要授权码之后填写在外观设置里～


## Known Issues


* [X] libs.php 在某些博客上出现重复声明函数的错误 **(解决方法：请认真看使用文档进行配置哦)**
* [X] 随机图片有机率重复显示 **(V1.2.0已修复，但还是有时候会出现问题)**
* [X] 文章底部版权提示字体颜色不受控制 **(V1.2.0已修复)**
* [X] 了解更多json配置后无效 **(V1.2.0已修复)**
* [X] Pjax导致的样式错误 **(V1.2.1已修复)**
* [X] 头部图标点击无法返回的问题 **(V1.2.2已修复)**


## 开发的过程中使用的文章

CSS 实现自适应： https://iucky.cn/posts/code/css-auto-device

Typecho自定义字段： https://iucky.cn/posts/code/typecho-custom-fields

PHP随机一句话：https://iucky.cn/posts/code/php-one-words

PHP解析JSON：https://iucky.cn/posts/code/php-parsing-json

Typecho调用某一分类下的文章：https://iucky.cn/posts/code/typecho-use-one-category

Super Code UI：https://iucky.cn/posts/works/super-code-ui

Typecho实现短代码功能：https://iucky.cn/posts/play/typecho-shortcode