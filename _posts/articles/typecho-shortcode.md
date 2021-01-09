---
date: 2020-12-27T00:55:56.054Z
updated: 2020-12-27T06:57:23.417Z
title: Typecho实现短代码功能
slug: typecho-shortcode
categories: 折腾
type: Post
permalink: posts/typecho-shortcode
---

这里用回复可见做🌰

## 替换文章输出

将post.php中的`<?php $this->content(); ?>`换成
```php
<?php
$db = Typecho_Db::get();
$sql = $db->select()->from('table.comments')
    ->where('cid = ?',$this->cid)
    ->where('mail = ?', $this->remember('mail',true))
    ->where('status = ?', 'approved')
//只有通过审核的评论才能看回复可见内容
    ->limit(1);
$result = $db->fetchAll($sql);

if($this->user->hasLogin() || $result) {
    $content = preg_replace("/\[hide\](.*?)\[\/hide\]/sm",'<div class="reply2view">$1</div>',$this->content);
}
else{
    $content = preg_replace("/\[hide\](.*?)\[\/hide\]/sm",'<div class="reply2view">此处内容需要评论回复后方可阅读。</div>',$this->content);
}
echo $content 

?>
```

当然你也可以像我那样，新建一个类，使用`<?php YourClass::Name(); ?>`

```php
class Content{

    /**
     * 替换文章输出实现短代码功能
     * Author：Wibus
     * Date：12-27
     */

    function echoSomeFunny(){
    
            $db = Typecho_Db::get();
        $sql = $db->select()->from('table.comments')
            ->where('cid = ?',$this->cid)
            ->where('mail = ?', $this->remember('mail',true))
            ->where('status = ?', 'approved')
        //只有通过审核的评论才能看回复可见内容
            ->limit(1);
        $result = $db->fetchAll($sql);

        if($this->user->hasLogin() || $result) {
            $content = preg_replace("/\[hide\](.*?)\[\/hide\]/sm",'<div class="reply2view">$1</div>',$this->content);
        }
        else{
            $content = preg_replace("/\[hide\](.*?)\[\/hide\]/sm",'<div class="reply2view">此处内容需要评论回复后方可阅读。</div>',$this->content);
        }
        echo $content;
    }
}
```

那么就是将post.php中的`<?php $this->content(); ?>`换成`<?php Content::echoSomeFunny();`

## 解决feed暴露

解决缩略内容和feed暴露问题。

在functions.php中加入如下代码即可
```php
Typecho_Plugin::factory('Widget_Abstract_Contents')->excerptEx = array('myyodux','one');
Typecho_Plugin::factory('Widget_Abstract_Contents')->contentEx = array('myyodux','one');
class myyodux {
    public static function one($con,$obj,$text)
    {
      $text = empty($text)?$con:$text;
      if(!$obj->is('single')){
      $text = preg_replace("/\[hide\](.*?)\[\/hide\]/sm",'',$text);
      }
      
               return $text;
}
}
```

就是用插件接口，在缩略内容输出之前，隐藏掉或者替换掉回复可见内容，同时使用if判断，来针对非single页面进行隐藏。

## 使用方法

在写文章需要隐藏部分内容时用以下写法

`[hide]要隐藏的内容[/hide]`

> 不过这个方法会有一个问题：你只能有一个短代码，所以需要找到其他的方法

---

## 后续解决

后来翻找了一下Wordpress程序以及handsome主题，解决了问题

```php

    /**
     * 短代码模块
     * Author：Wibus
     * 参照项目：Wordpress handsome
     * Date：2020-12-27
     * 相关function：
     * get_shortcode_regex，shortcode_parse_atts，get_shortcode_atts_regex，get_markdown_regex，scodeParseCallback，parseContentPublic，postContent，postContentHtml
     */

    /**
     * 获取匹配短代码的正则表达式
     * Date: 2020-12-27
     * @param null $tagnames
     * @return string
     * @link https://github.com/WordPress/WordPress/blob/master/wp-includes/shortcodes.php#L254
     */
    public static function get_shortcode_regex($tagnames = null)
    {
        global $shortcode_tags;
        if (empty($tagnames)) {
            $tagnames = array_keys($shortcode_tags);
        }
        $tagregexp = join('|', array_map('preg_quote', $tagnames));
        // WARNING! Do not change this regex without changing do_shortcode_tag() and strip_shortcode_tag()
        // Also, see shortcode_unautop() and shortcode.js.
        // phpcs:disable Squiz.Strings.ConcatenationSpacing.PaddingFound -- don't remove regex indentation
        return
            '\\['                                // Opening bracket
            . '(\\[?)'                           // 1: Optional second opening bracket for escaping shortcodes: [[tag]]
            . "($tagregexp)"                     // 2: Shortcode name
            . '(?![\\w-])'                       // Not followed by word character or hyphen
            . '('                                // 3: Unroll the loop: Inside the opening shortcode tag
            . '[^\\]\\/]*'                   // Not a closing bracket or forward slash
            . '(?:'
            . '\\/(?!\\])'               // A forward slash not followed by a closing bracket
            . '[^\\]\\/]*'               // Not a closing bracket or forward slash
            . ')*?'
            . ')'
            . '(?:'
            . '(\\/)'                        // 4: Self closing tag ...
            . '\\]'                          // ... and closing bracket
            . '|'
            . '\\]'                          // Closing bracket
            . '(?:'
            . '('                        // 5: Unroll the loop: Optionally, anything between the opening and closing shortcode tags
            . '[^\\[]*+'             // Not an opening bracket
            . '(?:'
            . '\\[(?!\\/\\2\\])' // An opening bracket not followed by the closing shortcode tag
            . '[^\\[]*+'         // Not an opening bracket
            . ')*+'
            . ')'
            . '\\[\\/\\2\\]'             // Closing shortcode tag
            . ')?'
            . ')'
            . '(\\]?)';                          // 6: Optional second closing brocket for escaping shortcodes: [[tag]]
        // phpcs:enable
    }
    /**
     * 获取短代码属性数组
     * Date: 2020-12-27
     * @param $text
     * @return array|string
     * @link https://github.com/WordPress/WordPress/blob/master/wp-includes/shortcodes.php#L508
     */
    public static function shortcode_parse_atts($text)
    {
        $atts = array();
        $pattern = self::get_shortcode_atts_regex();
        $text = preg_replace("/[\x{00a0}\x{200b}]+/u", ' ', $text);
        if (preg_match_all($pattern, $text, $match, PREG_SET_ORDER)) {
            foreach ($match as $m) {
                if (!empty($m[1])) {
                    $atts[strtolower($m[1])] = stripcslashes($m[2]);
                } elseif (!empty($m[3])) {
                    $atts[strtolower($m[3])] = stripcslashes($m[4]);
                } elseif (!empty($m[5])) {
                    $atts[strtolower($m[5])] = stripcslashes($m[6]);
                } elseif (isset($m[7]) && strlen($m[7])) {
                    $atts[] = stripcslashes($m[7]);
                } elseif (isset($m[8]) && strlen($m[8])) {
                    $atts[] = stripcslashes($m[8]);
                } elseif (isset($m[9])) {
                    $atts[] = stripcslashes($m[9]);
                }
            }
            // Reject any unclosed HTML elements
            foreach ($atts as &$value) {
                if (false !== strpos($value, '<')) {
                    if (1 !== preg_match('/^[^<]*+(?:<[^>]*+>[^<]*+)*+$/', $value)) {
                        $value = '';
                    }
                }
            }
        } else {
            $atts = ltrim($text);
        }
        return $atts;
    }

    /**
     * Retrieve the shortcode attributes regex.
     * Date: 2020-12-27
     * @return string The shortcode attribute regular expression
     * @since 4.4.0
     *
     */
    public static function get_shortcode_atts_regex()
    {
        return '/([\w-]+)\s*=\s*"([^"]*)"(?:\s|$)|([\w-]+)\s*=\s*\'([^\']*)\'(?:\s|$)|([\w-]+)\s*=\s*([^\s\'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|\'([^\']*)\'(?:\s|$)|(\S+)(?:\s|$)/';
    }

    public static function get_markdown_regex($tagName = '?')
    {
        return '\\' . $tagName . '&gt; (.*)(\n\n)?';

    }

    /**
     * 短代码解析正则替换回调函数
     * Date: 2020-12-27
     * Style: Super_Code
     * @param $matches
     * @return bool|string
     */
    public static function scodeParseCallback($matches)
    {
        // 不解析类似 [[player]] 双重括号的代码
        if ($matches[1] == '[' && $matches[6] == ']') {
            return substr($matches[0], 1, -1);
        }
        //[scode type="share"]这是灰色的短代码框，常用来引用资料什么的[/scode]
        $attr = htmlspecialchars_decode($matches[3]);//还原转义前的参数列表
        $attrs = self::shortcode_parse_atts($attr);//获取短代码的参数
        $type = "info";
        switch (@$attrs['type']) {
            case 'yellow':
                $type = "Scode-Yellow";
                break;
            case 'red':
                $type = "Scode-Red";
                break;
            case 'lblue':
                $type = "Scode-Blue";
                break;
            case 'green':
                $type = "Scode-Green";
                break;
            case 'share':
                $type = "Scode-zise";
                break;
            case 'pink':
                $type = "Scode-Pink";
                break;
            case 'pink-pro':
                $type = "Scode-Pink-Pro";
                break;
            case 'black':
                $type = "Scode-Black";
                break;
            case 'mhz':
                $type = "Scode-mhz";
                break;
            case 'xgh':
                $type = "Scode-xgh";
                break;
            case 'tkzj':
                $type = "Scode-tkzj";
                break;
            case 'xyz':
                $type = "Scode-xyz";
                break;
            case 'gll':
                $type = "Scode-gll";
                break;
            case 'xty':
                $type = "Scode-xty";
                break;
            case 'Shadow':
                $type = "Shadow";
                break;
            
        }
        return '<div class=" ' . $type . '">'."\n\n" . $matches[5] . "\n".'</div>';
    }

    /**
     * 文章解析函数
     * Date: 2020-12-27
     * @param $content
     * @return null|string|string[]
     */
    public static function parseContentPublic($content)
    {
        //解析短代码功能
        if (strpos($content, '[scode') !== false) {//提高效率，避免每篇文章都要解析
            $pattern = self::get_shortcode_regex(array('scode'));
            $content = preg_replace_callback("/$pattern/", array('Content', 'scodeParseCallback'),
                $content);
        }
        
        return $content;
    }

    /**
     * 替换+输出文章内容
     * Date: 2020-12-27
     *
     * @param $obj
     * @param $status
     * @param string $way
     * @return string
     */
    public static function postContent($obj, $status, $way = "origin")
    {
        if ($way == "origin") {
            $content = $obj->content;
        } else {
            $content = $obj->content;

            $content = Content::parseContentPublic($content);
        }
        return trim($content);
    }

    public static function postContentHtml($obj, $status)
    {

        //$way = "origin";
        
        $content = Content::postContent($obj, $status, $way);
        
        echo $content;

    }
```

其中，get_shortcode_regex，shortcode_parse_atts，get_shortcode_atts_regex，get_markdown_regex都是wp里的东西

剩下的就是用来替换的了，注释应该都写的挺清楚的了吧？

### 调用方法

将post.php里的`<?php $this->content(); ?>`替换为`<?php Content::postContentHtml($this,$this->user->hasLogin()); ?>·`