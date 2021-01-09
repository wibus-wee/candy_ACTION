---
date: 2020-12-12T15:18:28.003Z
updated: 2020-12-12T15:18:27.987Z
title: Typecho自定义字段
slug: typecho-custom-fields
categories: 编程
type: Post
permalink: posts/typecho-custom-fields
---

这不今天做主题嘛，就遇到了一些需要使用自定义字段的功能，找了下网上，之后自己整理了下

## 对自定义字段进行判断操作

*PostChoice* 是自定义字段的名字，我使用在：*post.php / page.php* 中

先使用`<?php $PostChoice = $this->fields->PostChoice;?>`赋个值再做操作

之后使用`<?php if ($PostChoice == 0): ?>`，`<?php else: ?>`，`<?php endif; ?>`，做出判断

在中间写入我想要的HTML代码

> 一般我都会用`<?php ?>`这样子来做PHP判断再输出其他代码

```php
<?php $PostChoice = $this->fields->PostChoice;?>

<?php if ($PostChoice == 0): ?>

<main class="is-article">
<?php $this->need('component/headnav.php'); ?>
<?php $this->need('component/article_post.php'); ?>
</main>

<?php elseif ($PostChoice == 1): ?>

<main class="is-article is-note post-content paul-note">
<?php $this->need('component/headnav.php'); ?>
<?php $this->need('component/dairy_post.php'); ?>
</main>

<?php else: ?>

<main class="is-article">
<?php $this->need('component/headnav.php'); ?>
<?php $this->need('component/article_post.php'); ?>
</main>

<?php endif; ?>
```

## 编写文章时设置

这样子就能在编写文章的时候自定义字段中显示设置，可以进行选择而不需要去点击**新增->写字段名字->写字段值**

```php
/*
 * 编写文章设置
 * themeFields(Typecho_Widget_Helper_Layout $layout){}控制
 */
function themeFields(Typecho_Widget_Helper_Layout $layout){

    $PostChoice = new Typecho_Widget_Helper_Form_Element_Select('PostChoice', array(
        '0'=>'文章样式',
        '1'=> '日记样式'
    ),'0', _t('当前文章页面样式类型'), '<strong style="color:red;">该设置仅对该篇文章有效</strong></br>默认选项是「文章」样式</br> 选择「日记」当前文章页面样式将会改为日记样式</br>不建议文章使用日记样式，日记使用文章样式');
    $layout->addItem($PostChoice);

}
```