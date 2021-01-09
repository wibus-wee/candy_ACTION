---
date: 2020-12-12T00:03:02.949Z
updated: 2020-12-12T00:07:11.312Z
title: 我模板index的写作方式
slug: 我模板index的写作方式
id: 2
permalink: notes/2
type: Note
---

据大家所知：Typecho一般模板都是将大部分代码放入index.php中的，但我，就不哈哈哈

用疯狂用need来嵌入代码，个人认为这样子更新维护的效率更好（对于我来说）就像这个样子

```php
<!--头部必要元素-->
<?php $this->need('header.php'); ?>


<main>

<!--顶部分类配件-->
<?php $this->need('headnav.php'); ?>

<!--顶部最大头像以及附属svg-->
<?php $this->need('component/area-head.php'); ?>

<section class="paul-news" style="min-height:34rem">
<div class="demo-content">

<!--文章输出配件-->
<?php $this->need('component/article.php'); ?>

<!--日记输出配件-->
<?php $this->need('component/dairy.php'); ?>

<!--更多输出配件-->
<?php $this->need('component/more.php'); ?>

</div>
</section>
</main>

<!--必要底部元素-->
<?php $this->need('footer.php'); ?>
```

瞬间index.php就清爽了好多哈哈哈哈