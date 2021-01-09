---
date: 2020-12-09T14:36:45.966Z
updated: 2020-12-12T22:50:35.196Z
title: Typecho自定义评论列表区域
slug: typecho-own-comment
categories: 编程
type: Post
permalink: posts/typecho-own-comment
---

## 自定义单条评论的HTML代码

在自定义评论前，先设计好单条评论的 HTML 代码结构，如：

```html
<li class="comment-body comment-parent comment-odd">
    <div>
        <div class="comment-author">
            <img class="avatar" src="avatar.png" alt="" width="40" height="40">
            <cite class="fn"><a href="评论者主页">评论者名字</a></cite>
        </div>
        <div class="comment-meta">
            <a href="评论地址">评论时间</a>
            <span class="comment-reply">回复按钮</span>
        </div>
        <p>评论内容</p>
    </div><!-- 单条信息内容 -->
    <div class="comment-children">
        <!-- 评论相关 -->
    </div>
</li>
```

## 使用自定义评论函数

打开 comments.php 文件，需要在它的顶部，插入以下函数代码：

```php
<?php function threadedComments($comments, $options) {
    $commentClass = '';
    if ($comments->authorId) {
        if ($comments->authorId == $comments->ownerId) {
            $commentClass .= ' comment-by-author';  //如果是文章作者的评论添加 .comment-by-author 样式
        } else {
            $commentClass .= ' comment-by-user';  //如果是评论作者的添加 .comment-by-user 样式
        }
    } 
    $commentLevelClass = $comments->_levels > 0 ? ' comment-child' : ' comment-parent';  //评论层数大于0为子级，否则是父级
?>
/* 自定义评论的代码结构 */
<?php } ?>
```

其次，将刚才自定义好的单条评论的 HTML 代码，放在上面代码里注释的地方，如下：

```php
<?php function threadedComments($comments, $options) {
    $commentClass = '';
    if ($comments->authorId) {
        if ($comments->authorId == $comments->ownerId) {
            $commentClass .= ' comment-by-author';  //如果是文章作者的评论添加 .comment-by-author 样式
        } else {
            $commentClass .= ' comment-by-user';  //如果是评论作者的添加 .comment-by-user 样式
        }
    } 
    $commentLevelClass = $comments->_levels > 0 ? ' comment-child' : ' comment-parent';  //评论层数大于0为子级，否则是父级
?>
 
/* 自定义评论的代码结构 */
<li class="comment-body comment-parent comment-odd">
    <div>
        <div class="comment-author">
            <img class="avatar" src="avatar.png" alt="" width="40" height="40">
            <cite class="fn"><a href="评论者主页">评论者名字</a></cite>
        </div>
        <div class="comment-meta">
            <a href="评论地址">评论时间</a>
            <span class="comment-reply">回复按钮</span>
        </div>
        <p>评论内容</p>
    </div><!-- 单条信息内容 -->
    <div class="comment-children">
        <!-- 评论相关 -->
    </div>
</li>
<?php } ?>
```

## 变量替换HTML中相关属性

把 HTML 里相关的属性，替换成 typecho 系统中的评论变量，变量的列表可以参考下面。下面的例子，是替换评论的 id：

```html
<!-- 替换前 -->
<li class="comment-body comment-parent comment-odd">
```

```php
/* 替换后 */
<li id="li-<?php $comments->theId(); ?>" class="comment-body<?php 
if ($comments->_levels > 0) {
    echo ' comment-child';
    $comments->levelsAlt(' comment-level-odd', ' comment-level-even');
} else {
    echo ' comment-parent';
}
$comments->alt(' comment-odd', ' comment-even');
echo $commentClass; 
?>">
```

替换ID需要判断判断当前评论是父级评论还是子级评论，且判断评论 ID 的奇偶数

## 子评论

替换前：

```html
<div class="comment-children">
    <!--评论相关 -->
</div>
```

替换后后如下：

```html
<?php if ($comments->children) { ?> //是否子评论
<div class="comment-children">
    <?php $comments->threadedComments($options); ?> //嵌套评论所有内容
</div>
<?php } ?> //判断结束
```

## 五、相关变量及说明

| 变量                                    | 说明                                     |
| --------------------------------------- | ---------------------------------------- |
| <?php $comments->gravatar('40', ''); ?> | 头像，有两个参数，大小、默认头像         |
| <?php $comments->author(); ?>           | 评论作者                                 |
| <?php $comments->permalink(); ?>        | 当前评论的连接地址                       |
| <?php $comments->date('Y-m-d H:i'); ?>  | 评论时间，可在括号里设置格式             |
| <?php $comments->reply(); ?>            | 回复按钮，可在括号里自定义评论按钮的文字 |
| <?php $comments->content(); ?>          | 评论内容                                 |



## 六、最终得到的代码

当把上面所有变量都替换完成之后，最终得到的代码如下：

```PHP
<?php function threadedComments($comments, $options) {
    $commentClass = '';
    if ($comments->authorId) {
        if ($comments->authorId == $comments->ownerId) {
            $commentClass .= ' comment-by-author';
        } else {
            $commentClass .= ' comment-by-user';
        }
    }
 
    $commentLevelClass = $comments->levels > 0 ? ' comment-child' : ' comment-parent';
?>
 
<li id="li-<?php $comments->theId(); ?>" class="comment-body<?php 
if ($comments->levels > 0) {
    echo ' comment-child';
    $comments->levelsAlt(' comment-level-odd', ' comment-level-even');
} else {
    echo ' comment-parent';
}
$comments->alt(' comment-odd', ' comment-even');
echo $commentClass;
?>">
    <div id="<?php $comments->theId(); ?>">
        <div class="comment-author">
            <?php $comments->gravatar('40', ''); ?>
            <cite class="fn"><?php $comments->author(); ?></cite>
        </div>
        <div class="comment-meta">
            <a href="<?php $comments->permalink(); ?>"><?php $comments->date('Y-m-d H:i'); ?></a>
            <span class="comment-reply"><?php $comments->reply(); ?></span>
        </div>
        <?php $comments->content(); ?>
    </div>
<?php if ($comments->children) { ?>
    <div class="comment-children">
        <?php $comments->threadedComments($options); ?>
    </div>
<?php } ?>
</li>
<?php } ?>
```

注意：上面的自定义评论代码输出的，就是本来评论页里的下面这段代码，所以你就不用对这段代码做任何更改了。

```php
<?php $comments->listComments(); ?>
```

首次评论审核提示，在自定义评论代码的适当地方添加以下语句，否则将看不到审核提示语句。

```php
<?php if ('waiting' == $comments->status) { ?><span class="text-muted">您的评论需管理员审核后才能显示！</span><?php } ?>
```