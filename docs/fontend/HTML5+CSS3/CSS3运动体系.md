---
title: CSS3运动体系 
date: 2023-2-28
permalink: /fontend/HTML5+CSS3/CSS3运动体系
---

## 过渡
过渡：给改变添加过程

### transition 过渡属性

```css
transition: property duration timing-function delay;

transition-property:过渡属性的名称

none  没有过渡属性

all      所有属性都过渡(默认值)

property   具体属性名称(property1,property2...)

transition-duration:过渡属性花费的时间

transition-timing-function:过渡效果速度曲线

transition-delay:过渡效果延迟时间
```

### transition-timing-function:过渡效果速度曲线

```css
linear:规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。

ease:规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。

ease-in:规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。

ease-out    :规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。

ease-in-out :规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。

cubic-bezier(n,n,n,n):在 cubic-bezier 函数中定义自己的值。可能的值是 0至 1 之间的数值。
```

## 动画

通过 CSS3，我们能够创建动画，这可以在许多网页中取代动画图片、Flash 动画以及 JavaScript

### 动画接口

|属性|描述|
|:---:|:---:|
|@keyframes|规定动画|
|animation|所有动画属性的简写属性，除了 animation-play-state 属性。|
|animation-name|规定 @keyframes 动画的名称。|
|animation-duration|规定动画完成一个周期所花费的秒或毫秒。|
|animation-timing-function|规定动画的速度曲线。|
|animation-delay|规定动画何时开始。|
|animation-iteration-count|规定动画被播放的次数。|
|animation-direction|规定动画是否在下一周期逆向地播放。|
|animation-play-state|规定动画是否正在运行或暂停。|
|animation-fill-mode|规定对象动画时间之外的状态。|
|animation-timing-function|速度曲线|

|值|描述|
|:---:|:---:|
|linear|动画从头到尾的速度是相同的。|
|ease|默认。动画以低速开始，然后加快，在结束前变慢。|
|ease-in|动画以低速开始。|
|ease-out|动画以低速结束。|
|ease-in-out|动画以低速开始和结束。|
|cubic-bezier(n,n,n,n)|在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。|
- 在谷歌浏览器里面需要加上-webkit-IE6,7,8,9不支持css3运动


### CSS3盒模型阴影
```CSS
box-shadow:inset x y blur spread color

inset：投影方式

inset：内投影

outset：外投影 默认(不能设置)

x、y：阴影偏移

blur：模糊半径（灰度）

spread：扩展阴影半径
先扩展原有形状，再开始画阴影
color
```


### CSS3盒模型倒影

```CSS
box-reflect 倒影

方向 above|below|left|right;

距离
渐变（可选）
```


### CSS3其他盒模型

```CSS
box-sizing 盒模型解析模式

content-box  标准盒模型(和css2一样的计算)
width/height=border+padding+content

border-box 怪异盒模型width/height与设置的值一样 ，content减小
```

## transform 2D转换

### Css3平面转换方法
```CSS
translate()        移动

rotate()        旋转

scale()        缩放

skew()        翻转

matrix()    矩阵
```




### transform:
```CSS
rotate()  旋转函数 (deg)


skew(X,Y) 倾斜函数 (deg) 


scale(X,Y) 缩放函数 (正数、负数和小数)
```

### translate(X,Y) 位移函数(px)
```CSS
translateX()
translateY()
```

### rotate() 旋转方法
```CSS
用于旋转元素角度
例：rotate(30deg)
```

### translate()位置方法
```CSS
用于移动元素位置
例：translate(50px,100px)
把元素从左侧移动 50 像素，从顶端移动 100 像素。
```

### scale()尺寸方法
```CSS
方法用于改变元素尺寸
例：scale(2,4) 
把宽度转换为原始尺寸的 2 倍，把高度转换为原始高度的 4 倍
```
### skew() 翻转方法
```CSS
通过 skew()方法，元素翻转给定的角度
例：transform: skew(30deg,20deg);
把元素围绕 X轴把元素翻转30 度，围绕 Y 轴翻转 20度
```

## transform 3D转换

### Css3立体转换

```CSS
transform-style（preserve-3d） 建立3D空间

Perspective 视角

Perspective- origin 视角基点

transform-origin：坐标轴基点
```


### transform 新增函数
```CSS
rotateX()
rotateY()
rotateZ()
translateZ()
scaleZ()
```

