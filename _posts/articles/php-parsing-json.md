---
date: 2020-12-13T14:47:41.150Z
updated: 2020-12-18T15:36:27.803Z
title: PHP解析JSON
slug: php-parsing-json
categories: 编程
type: Post
permalink: posts/php-parsing-json
---


## 思路

先给一个变量放json的内容，之后再用另一个变量让json转存为数组,再用其他输出一下就就好了

> 在`Mix`主题中使用了

## 一般情况实现

```php
/*
 * 解析MoreJSON信息
 * Used In Theme: Mix
 * Author: Wibus
 * 相关变量：$MoreJsonName $MoreJsonLink $MoreJsonMore
 * Date：2020.12.13
 */

$morejson = '{"Name1": "关于", "Link1": "https://iucky.cn/about","More1": "关于我的一切","Name2": "留言", "Link2": "https://iucky.cn/message","More2": "留言刷刷走起来", "Name3": "Mix-space", "Link3": "https://iucky.cn/mix-space", "More3": "Mix-Space使用文档","Name4": "订阅", "Link4": "https://iucky.cn/feed","More4": "来份订阅很不错！"}'; //修改morejson里的内容即可
$MoreJson = json_decode($morejson); //json转存为数组
$MoreJsonName1 = $MoreJson->{'Name1'};
$MoreJsonLink1 = $MoreJson->{'Link1'};
$MoreJsonMore1 = $MoreJson->{'More1'};

$MoreJsonName2 = $MoreJson->{'Name2'};
$MoreJsonLink2 = $MoreJson->{'Link2'};
$MoreJsonMore2 = $MoreJson->{'More2'};

$MoreJsonName3 = $MoreJson->{'Name3'};
$MoreJsonLink3 = $MoreJson->{'Link3'};
$MoreJsonMore3 = $MoreJson->{'More3'};

$MoreJsonName4 = $MoreJson->{'Name4'};
$MoreJsonLink4 = $MoreJson->{'Link4'};
$MoreJsonMore4 = $MoreJson->{'More4'};

```

先用了`$morejson`储存json数据，之后使用`json_decode($morejson)`对这个json进行处理，再赋值给变量`$MoreJson`

之后我们使用`$MoreJsonName1`变量，赋值了变量`$MoreJson`中的成员`{'Name1'}`（也就是Name1中的 关于 这个词）

如果`echo $MoreJsonName1`的话，结果就是：关于

以此类推，就不多解释了



## 在typecho中？

先在functions.php中写一个选项

```php
    $MoreJSON = new Typecho_Widget_Helper_Form_Element_Textarea(
    'MoreJSON',
    NULL,
    _t(''),
    _t('了解更多模块设置'),
    _t('此处填写Json，请看使用文档再进行填写')
    );
    $form->addInput($MoreJSON);
```

之后，直接转存到一个变量中

```php
/*
 * 解析MoreJSON信息
 * Author: Wibus
 * Used In Theme: Mix
 * 相关变量：$MoreJsonName $MoreJsonLink $MoreJsonMore
 * Date：2020.12.13
 */
 
//$morejson = $this->options->MoreJSON; //获取设置选项
$MoreJson = json_decode($this->options->MoreJSON); //对json转存为数组
$MoreJsonName1 = $MoreJson->{'Name1'};
$MoreJsonLink1 = $MoreJson->{'Link1'};
$MoreJsonMore1 = $MoreJson->{'More1'};

$MoreJsonName2 = $MoreJson->{'Name2'};
$MoreJsonLink2 = $MoreJson->{'Link2'};
$MoreJsonMore2 = $MoreJson->{'More2'};

$MoreJsonName3 = $MoreJson->{'Name3'};
$MoreJsonLink3 = $MoreJson->{'Link3'};
$MoreJsonMore3 = $MoreJson->{'More3'};

$MoreJsonName4 = $MoreJson->{'Name4'};
$MoreJsonLink4 = $MoreJson->{'Link4'};
$MoreJsonMore4 = $MoreJson->{'More4'};

```