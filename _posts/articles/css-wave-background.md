---
date: 2020-12-12T03:34:55.499Z
updated: 2020-12-27T11:23:47.013Z
title: 网站背景添加海浪背景
slug: css-wave-background
categories: 编程
type: Post
permalink: posts/css-wave-background
---


> https://cmsboy.cn/archives/243.html 是抄袭了本站的文章的，请大家认识一下这位博主
> 具体可以看这里：https://iucky.cn/notes/3

用CSS和HTML实现

CSS怎么放就不需要说了吧？

```css
/* 海浪背景CSS部分 */
#wavesDIV{position: fixed;bottom: 0;width: 100%;display:block;height:20vh;background-color:rgb(125,165,191);animation: move-out 2s cubic-bezier(0,.98,.97,1) forwards;}
.waves { position:relative; width: 100%; height:15vh; margin-top:-15vh; min-height:100px; max-height:150px; }
.parallax > use { animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite; } 
.parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; } 
.parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; } 
.parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; } 
.parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; } 
@keyframes move-forever { 0% { transform: translate3d(-90px, 0, 0); } 100% { transform: translate3d(85px, 0, 0); } }
@keyframes move-out { 0% { transform: translateY(400%); } 100% { transform: translateY(0%); } }
```

HTML加入到网站随意一个地方，我是加到body里的，因为有些时候放在下面会被其他元素覆盖掉


```html
<div id="wavesDIV" style="display: block;">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="-2" fill="rgba(125,165,191,0.3)"></use>
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(125,165,191,0.5)"></use>
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(125,165,191,0.7)"></use>
                <use xlink:href="#gentle-wave" x="48" y="12" fill="rgba(125,165,191,1)"></use>
            </g>
        </svg>
    </div>
```