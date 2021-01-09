---
date: 2020-12-12T00:47:28.170Z
updated: 2020-12-12T00:47:28.161Z
title: PHP随机一句话
slug: php-one-words
categories: 编程
type: Post
permalink: posts/php-one-words
---

效果有点类似 一言的效果吧。不过一言是API，我完全不懂==，而且还有分类什么的，这个只是简单点的。

记录并分析一下代码：
```php
function random_str () { 
$poems="从善如登，从恶如崩。 
已知花意，未见其花，已见其花，未闻花名 
如果能不长大就好了啊 可是时光在身后挡住退路。 
或许前路永夜，即便如此我也要前进，因为星光即使微弱也会为我照亮前路 
你驻足于春色中，于那独一无二的春色之中
喜欢的人喜欢别人不是很正常吗。
生活是不公平的；要去适应它。——比尔盖茨
人生就是一列开往坟墓的列车，路途上会有很多站，很难有人可以自始至终陪着走完。当陪你的人要下车时，即使不舍也该心存感激，然后挥手道别。"; 
$poems=explode("\n",$poems); 
return $poems[rand(0,count($poems)-1)]; 
} 
function says(){ 
$says=random_str(); 
echo $says; 
} 
```
*explode(separator,string,limit)*
作用：把字符串以“separator”格式打散成数组，存储在“string”里面。limit是可选参数。

*rand(0,count($poems)-1)*
在0，和数组的长度大小 里面随机取一个。和C语言有点类似。

最后在需要的地方，写上这个代码就行：
```php
<?php says(); ?>
```
记录以备用之。