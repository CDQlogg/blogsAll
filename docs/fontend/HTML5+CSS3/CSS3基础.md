---
title: CSS3基础 
date: 2023-2-28
permalink: /fontend/HTML5+CSS3/CSS3基础
---

## 使用CSS来修改元素的样式：
**3种方法**：
>
1.内联样式（ 注意：开发时绝对不要使用内联样式） 
``` js
<p style="color:red; font-size: 60px;">少小离家老大回，乡音无改鬓毛衰</p>
```
>

>
2.内部样式表
``` js
<style>
    p{
      color: blue;
      font-size: 20px;
    }
  </style>
  <body>
  <p> 会当临绝顶，一览众山小</p>
</body>

```
>

>
3.外部样式表（最佳实践）
``` js
  <link rel="stylesheet" href="./style.css">
```
>

## 选择器
### 复合选择器
``` css
交集选择器：选择器1选择器2选择器3选择器n{} #b1.p1h1.red{}
并集选择器：选择器1,选择器2,选择器3,选择器n{} #b1,.p1,h1,span,div.red{}
```

### 关系选择器
``` css
子元素选择器 ：父元素 > 子元素{}
后代元素选择器：祖先 后代{}
选择下一个兄弟：前一个 + 下一个{}
选择下边所有的兄弟：兄 ~ 弟{}
```


### 伪类选择器 a伪类
``` css
  :first-child 第一个子元素
  :last-child 最后一个子元素
  :nth-child() 选中第n个子元素
  :nth-child(even){} 选中偶数子元素
  :nth-child(odd){}选中奇数子元素
  :not() 否定伪类
  
  :link选择链接元素
  :visited 选择用户以访问的元素
  :hover 鼠标悬停其上的元素
  :active鼠标点击时触发的事件
  :focus 当前获取焦点的元素

```

### 伪元素，表示页面中一些特殊的并不真实的存在的元素（特殊的位置）
``` css
   伪元素使用 
      ::before 元素的开始 
      ::after 元素的最后
 - before 和 after 必须结合content属性来使用   

     div::before{
        content: 'abc';
        color: red;
    }
```

### 选择器的权重
``` python
            内联样式        1,0,0,0  
            id选择器        0,1,0,0   |#id名{}
            类和伪类选择器   0,0,1,0   |.class{}
            元素选择器       0,0,0,1  | p{} h1{}
            通配选择器       0,0,0,0  |*{}
            继承的样式       没有优先级
可以在某一个样式的后边添加 !important ，则此时该样式会获取到最高的优先级，甚至超过内联样式，注意：在开发中这个玩意一定要慎用！

class 是一个标签的属性，它和id类似，不同的是class可以重复使用
```
### 长度单位
``` css
    像素
        - 屏幕（显示器）实际上是由一个一个的小点点构成的
        - 不同屏幕的像素大小是不同的，像素越小的屏幕显示的效果越清晰
        - 所以同样的200px在不同的设备下显示效果不一样

    百分比
        - 也可以将属性值设置为相对于其父元素属性的百分比
        - 设置百分比可以使子元素跟随父元素的改变而改变

    em
        - em是相对于元素的字体大小来计算的
        - 1em = 1font-size
        - em会根据字体大小的改变而改变

    rem
        - rem是相对于根元素的字体大小来计算
```
## CSS3新增文本属性
``` css
color:rgba();

text-overflow:是否使用一个省略标记（...）标示对象内文本的溢出

text-align:文本的对齐方式

text-transform:文字的大小写

text-decoration:文本的装饰线，复合属性

text-shadow:文本阴影

text-fill-color:文字填充颜色

text-stroke:复合属性。设置文字的描边

tab-size:制表符的长度

word-wrap:当前行超过指定容器的边界时是否断开转行

word-break:规定自动换行的处理方法

```

### text-align:文本的对齐方式
``` css
css1
left:默认值 左对齐
right:右对齐
center:居中
justify： 内容两端对齐。
css3
start:开始边界对齐
end:结束边界对齐
```
### text-transform:文字的大小写
``` css
css1

none：    默认值 无转换 

capitalize：     将每个单词的第一个字母转换成大写 

uppercase：    转换成大写 

lowercase：    转换成小写



css3

full-width：    将左右字符设为全角形式。不支持

full-size-kana：将所有小假名字符转换为普通假名。不支持
```

### text-shadow:文本阴影
``` css
取值：x y   blur color,......

x      横向偏移

y       纵向偏移

blur     模糊距离(灰度)

color    阴影颜色

text-fill-color:文字填充颜色

text-stroke:复合属性。设置文字的描边

text-stroke-width:文字的描边厚度 

text-stroke-color:文字的描边颜色 

tab-size:制表符的长度   
默认值为8(一个tab键的空格字节长度)，在    pre标签之内才会有显示

word-wrap:当前行超过指定容器的边界时是否断开转行

normal： 默认值
允许内容顶开或溢出指定的容器边界。 

break-word：

```

### CSS3弹性盒模型
``` css
display:box或者display:inline-box;  设置给父元素

box-orient定义盒模型的布局方向   设置给父元素

horizontal 水平显示

vertical 垂直方向

box-direction 元素排列顺序     设置给父元素

box-ordinal-group  设置元素的具体位置   设置子元素
```

### css3新增背景属性
``` css
display:box或者display:inline-box;  设置给父元素

box-orient定义盒模型的布局方向   设置给父元素

horizontal 水平显示

vertical 垂直方向

box-direction 元素排列顺序     设置给父元素

box-ordinal-group  设置元素的具体位置   设置子元素
```
## CSS背景属性复习

```css
background:

background-color:背景颜色

background-image:背景图片

background-repeat:背景重复

background-position:背景定位

background-attachment:背景固定(scroll/fixed)
```





## CSS3新增背景属性

```css
background-size  背景尺寸

background-size:x y
background-size:100% 100%

background-size:cover 比例放大

background-size:contain 包含（图片不溢出）
```


## 多背景

```css
background:url() 0 0,url() 0 100%;

background-origin 背景区域定位

border-box： 从border区域开始显示背景。 

padding-box： 从padding区域开始显示背景。 

content-box： 从content内容区域开始显示背

background-clip   背景绘制区域

border-box： 从border区域向外裁剪背景。 

padding-box： 从padding区域向外裁剪背景。 

content-box： 从content区域向外裁剪背景。 

text:背景填充文本

no-clip： 从border区域向外裁剪背景
```


## 颜色渐变

```css
线性渐变：linear-gradient(起点/角度，颜色 位置，...,)

起点：left/top/right/bottom/left top......默认top

角度：逆时针方向 0-360度
颜色 位置：red 50%, blue 100%(红色从50%渐变到100%为蓝色)

repeating-linear-gradient  线性渐变重复平铺

IE低版本渐变(滤镜)：
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#ff0000',GradientType='1');

径向渐变：radial-gradient(起点(圆心位置), 形状/半径/大小，颜色1，颜色2)

起点：left/top/right/bottom或具体值/百分比
形状：ellipse(椭圆)、circle(正圆)
大小：具体数值或百分比，也可以是关键字（closest-side(最近端), closest-corner最近角), farthest-side(最远端), farthest-corner(最远角), contain(包含) ,cover(覆盖)）;
```

## CSS3边框系列
### border-radius边框圆角写法
```css
border-radius: 2em 1em 4em / 0.5em 3em;
等价于:
border-top-left-radius: 2em 0.5em;
border-top-right-radius: 1em 3em;
border-bottom-right-radius: 4em 0.5em;
border-bottom-left-radius: 1em 3em;复制代码

```




## box-shadow方框添加阴影

```css
语法：box-shadow:x-shadow y-shadow blur spread color inset;


box-shadow的API


x-shadow 必需。水平阴影的位置。允许负值。    

y-shadow     必需。垂直阴影的位置。允许负值。    

blur     可选。模糊距离。    

spread     可选。阴影的尺寸。    

color     可选。阴影的颜色。请参阅 CSS颜色值    

inset     可选。将外部阴影 (outset) 改为内部阴影


实例：box-shadow:10px 10px 5px 5px #888888;
```