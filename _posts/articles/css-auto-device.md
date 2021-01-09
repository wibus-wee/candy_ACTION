---
date: 2020-12-13T06:41:07.881Z
updated: 2020-12-13T06:43:08.166Z
title: CSS 实现自适应
slug: css-auto-device
categories: 编程
type: Post
permalink: posts/css-auto-device
---

## 前言

最近开始折腾另一个项目（暂时不透露哈哈哈哈）需要用到自适应布局，于是就探究了一下～

## 实现方法

首先得引入CSS3 @media 媒体查询器


media的使用和规则：

　　①被链接文档将显示在什么设备上。

　　②用于为不同的媒介类型规定不同的样式。



语法：

```css

 @media 设备名 only （选取条件） not （选取条件） and（设备选取条件），设备二{sRules}

```

## 实例：

```css

 /* 这是匹配横屏的状态，横屏时的css代码 */

@media all and (orientation :landscape){}　　　

/* 这是匹配竖屏的状态，竖屏时的css代码 */　　　　

@media all and (orientation :portrait){}

@media X and (min-width:200px){}

/*X为媒体类型--->比如print/screen/TV等等*/

/* 宽度大于600px小于960之间时，隐藏footer结构 */

@media all and (min-height:640px) and (max-height:960px){

  　　　footer{display:none;}

} 

```

> 在实际应用的时候，首先得在HTML的头文件 `<head>`里上加入以下代码：

```html

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

```
## 前言

最近开始折腾另一个项目（暂时不透露哈哈哈哈）需要用到自适应布局，于是就探究了一下～

## 实现方法

首先得引入CSS3 @media 媒体查询器
[scode type="blue"]
media的使用和规则：

　　①被链接文档将显示在什么设备上。

　　②用于为不同的媒介类型规定不同的样式。
[/scode]

语法：

```css
 @media 设备名 only （选取条件） not （选取条件） and（设备选取条件），设备二{sRules}
```

## 实例：

```css
 /* 这是匹配横屏的状态，横屏时的css代码 */
@media all and (orientation :landscape){}　　　
/* 这是匹配竖屏的状态，竖屏时的css代码 */　　　　
@media all and (orientation :portrait){}
@media X and (min-width:200px){}
/*X为媒体类型--->比如print/screen/TV等等*/
/* 宽度大于600px小于960之间时，隐藏footer结构 */
@media all and (min-height:640px) and (max-height:960px){
  　　　footer{display:none;}
} 
```

> 在实际应用的时候，首先得在HTML的头文件 `<head>`里上加入以下代码：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### 解释：　　

**width = device-width**：宽度等于当前设备的宽度

**initial-scale**：初始的缩放比例（默认设置为1.0）

**minimum-scale**：允许用户缩放到的最小比例（默认设置为1.0）

**maximum-scale**：允许用户缩放到的最大比例（默认设置为1.0）

**user-scalable**：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面）

---

**因为media的类型很多，这里就发菜鸟教程的对应链接了：http://www.runoob.com/cssref/css3-pr-mediaquery.html**

下面是media类型的screen（用于电脑屏幕，平板电脑，智能手机等）：**

## css自适应屏幕大小

```css
@media screen and (min-width: 320px) and (max-width: 1156px){

               .site-bg-dl {
               position: fixed;
               height: 100%;
               width: 100%;
               z-index: 0;
               background-image: url(bjxzfwzx/images/bj1.png);
               background-size: cover;
               background-repeat: no-repeat;
               background-attachment: fixed;
               background-size:100% 100%;
               -moz-background-size:100% 100%;
             }
 }
```

### 解释：

告诉浏览器当屏幕大于320px，并小于1156px下执行此代码

## 定制不同屏幕的显示样式：

```css
 /* 大屏幕 ：大于等于1200px*/
 @media (min-width: 1200px) { 
           /*Your Code*/
 }

 /*默认*/
 @media (min-width: 980px){
           /*Your Code*/
}

 /* 平板电脑和小屏电脑之间的分辨率 */
 @media (min-width: 768px) and (max-width: 979px) { 
           /*Your Code*/
 }

 /* 横向放置的手机和竖向放置的平板之间的分辨率 */
 @media (max-width: 767px) { 
           /*Your Code*/
}

 /* 横向放置的手机及分辨率更小的设备 */
 @media (max-width: 480px) {
           /*Your Code*/
}
```

### 解释：　　

**width = device-width**：宽度等于当前设备的宽度

**initial-scale**：初始的缩放比例（默认设置为1.0）

**minimum-scale**：允许用户缩放到的最小比例（默认设置为1.0）

**maximum-scale**：允许用户缩放到的最大比例（默认设置为1.0）

**user-scalable**：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面）

---

**因为media的类型很多，这里就发菜鸟教程的对应链接了：http://www.runoob.com/cssref/css3-pr-mediaquery.html**

下面是media类型的screen（用于电脑屏幕，平板电脑，智能手机等）：**

## css自适应屏幕大小

```css

@media screen and (min-width: 320px) and (max-width: 1156px){

               .site-bg-dl {

               position: fixed;

               height: 100%;

               width: 100%;

               z-index: 0;

               background-image: url(bjxzfwzx/images/bj1.png);

               background-size: cover;

               background-repeat: no-repeat;

               background-attachment: fixed;

               background-size:100% 100%;

               -moz-background-size:100% 100%;

             }

 }

```

### 解释：

告诉浏览器当屏幕大于320px，并小于1156px下执行此代码

## 定制不同屏幕的显示样式：

```css

 /* 大屏幕 ：大于等于1200px*/

 @media (min-width: 1200px) { 

           /*Your Code*/

 }

 /*默认*/

 @media (min-width: 980px){

           /*Your Code*/

}

 /* 平板电脑和小屏电脑之间的分辨率 */

 @media (min-width: 768px) and (max-width: 979px) { 

           /*Your Code*/

 }

 /* 横向放置的手机和竖向放置的平板之间的分辨率 */

 @media (max-width: 767px) { 

           /*Your Code*/

}

 /* 横向放置的手机及分辨率更小的设备 */

 @media (max-width: 480px) {

           /*Your Code*/

}

```