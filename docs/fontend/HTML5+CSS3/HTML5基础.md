---
title: HTML5基础  
date: 2023-2-28
permalink: /fontend/HTML5+CSS3/HTML5基础
---

## meta标签

``` js
 <meta name="keywords" content="HTML5,CSS3">
 <meta name="description" content="不错的网站">
```

## 语义化标签
``` xml
<!-- 
  标题标签:
 <h1>一级标题</h1>
 <h2>二级标题</h2>
 <h3>三级标题</h3>
 <h4>四级标题</h4>
 <h5>五级标题</h5>
 <h6>六级标题</h6>
 -->
<!-- 
    块元素（block element）
        - 在网页中一般通过块元素来对页面进行布局
    行内元素（inline element）
        - 行内元素主要用来包裹文字 <p></p>
 -->
 <!-- 
    布局标签（结构化语义标签）：

    header 表示网页的头部
    main 表示网页的主体部分(一个页面中只会有一个main)
    footer 表示网页的底部
    nav 表示网页中的导航
    aside 和主体相关的其他内容（侧边栏）
    article 表示一个独立的文章
    section 表示一个独立的区块，上边的标签都不能表示时使用section

    div 没有语义，就用来表示一个区块，目前来讲div还是我们主要的布局元素
    span 行内元素，没有任何的语义，一般用于在网页中选中文字

  -->
```

## html列表



``` js
    // 1、有序列表 
    <ul>
        <li>结构</li>
        <li>表现</li>
        <li>行为</li>
    </ul>
    // 2、无序列表
    <ol>
        <li>结构</li>
        <li>表现</li>
        <li>行为</li>
    </ol>
    // 3、定义列表
    <dl>
        <dt>结构</dt>
        <dd>结构表示网页的结构，结构用来规定网页中哪里是标题，哪里是段落</dd>
    </dl>
```

## 超链接、图片、内联框架、音视频
``` js
    <a href="https://www.baidu.com">超链接</a>
    <img src="" alt="">
    <iframe src="https://www.qq.com" width="800" height="600" frameborder="0"></iframe>
    <!-- 除了通过src来指定外部文件的路径以外，还可以通过source来指定文件的路径 -->
    <audio controls>
        <!-- 对不起，您的浏览器不支持播放音频！请升级浏览器！ -->
        <source src="./audio.mp3">
        <source src="./audio.ogg">
        <embed src="./audio.mp3" type="audio/mp3" width="300" height="100">
    </audio>
```

## 实体（转义字符）
>
    &nbsp；   空格
    &gt ；  >
    &lt ；  <
    &copy ；  版权符号
>

- [HTML5标签速查表](https://design.inmotionhosting.com/assets/legacy/img/infographics/html5_cheat_sheet_tags.png)
- [HTML5 API大盘点](http://jartto.wang/2016/07/25/make-an-inventory-of-html5-api/)