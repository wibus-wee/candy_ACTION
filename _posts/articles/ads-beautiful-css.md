---
date: 2020-12-11T22:22:03.103Z
updated: 2020-12-11T22:28:19.137Z
title: 用代码美化文字Ads
slug: ads-beautiful-css
categories: 折腾
type: Post
permalink: posts/ads-beautiful-css
---

没办法，有一些广告位实在是太丑了，于是就自己搞了一个不错的广告位的样式代码，个人觉得还不错的哈哈哈哈

## HTML

HTML我们只需要用一个class="ads"的标签包裹住里面所有的内容就好了，自行发挥


```html
<a class="ads" target="_blank">
  <h4 style="color: white;">这里是大字体
  </h4>
  <h5 style="color: white;">
    这里是小字</h5>
  <span class="ads-btn ads-btn-outline">
    这里是按键
  </span>
</a>
```

## CSS

```css
/* Ads美化 */
.ads {
	display: block;
	padding: 40px 15px;
	text-align: center;
	color: #fff!important;
	background: #ff5719;
	background-image: -webkit-linear-gradient(135deg,#bbafe7,#5368d9);
	background-image: linear-gradient(135deg,#bbafe7,#5368d9);
}

.ads h4 {
	margin: 0;
	font-size: 22px;
	font-weight: bold
}

.ads h5 {
	margin: 10px 0 0;
	font-size: 14px;
	font-weight: bold
}

.ads.ads-btn {
	margin-top: 20px;
	font-weight: bold
}

.ads.ads-btn:hover {
	color: #ff5719
}

.ads-btn {
	display: inline-block;
	font-weight: normal;
	margin-top: 10px;
	color: #666;
	text-align: center;
	vertical-align: top;
	user-select: none;
	border: 0;
	padding: 0 36px;
	line-height: 38px;
	font-size: 14px;
	border-radius: 10px;
	outline: 0;
	-webkit-transition: all .3s ease-in-out;
	-moz-transition: all .3s ease-in-out;
	transition: all .3s ease-in-out
}

.ads-btn:hover,.btn:focus,.btn.focus {
	outline: 0;
	text-decoration: none
}

.ads-btn:active,.btn.active {
	outline: 0;
	box-shadow: inset 0 3px 5px rgba(0,0,0,0.125)
}

.ads-btn-outline {
	line-height: 36px;
	color: #fff;
	background-color: transparent;
	border: 1px solid#fff
}

.ads-btn-outline:hover,.btn-outline:focus,.btn-outline.focus {
	color: #343a3c;
	background-color: #fff
}
```