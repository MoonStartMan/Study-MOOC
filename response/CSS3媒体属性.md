# CSS3 媒体属性

## 属性

+ width: 视口宽度
+ height: 视口高度
+ device-width: 渲染表面的宽度,就是设备屏幕的宽度。
+ device-height: 渲染表面的高度,就是设备屏幕的高度。
+ orientation: 检查设备处于横向还是纵向。
+ aspect-ratio: 基于视口宽度和高度的宽高比。width/height 如：16/9，4/3
+ device-aspect-ratio: 渲染表面的宽度，就是设备屏幕的宽度。
+ color: 每种颜色的位数bits 如: min-color: 16位 8位
+ resolution: 检测屏幕或者打印机的分辨率 如： min-resolution:300dpi

PS：以上属性可以添加 min-或者 max-前缀

## 视口

+ 布局视口(layout viewport)
+ 可视视口(visual viewport)
+ 理想视口(ideal viewport)

``` HTML
<meta name="viewport" content="width=device-width" />
<!-- 不指定该属性：布局视口的宽度是厂商的默认值 -->
<!-- 指定该属性：布局视口为理想视口-->
```

``` HTML
<meta name="viewport" content="width=device-width,minimum-scale=1.0, maximum-scale=1.0,user-scalable=no">
```

## 响应式图片

### srcset

``` HTML
<img class="image" src="img/480.png" srcset="img/480.png 480w, img/800.png 800w, img/1600png, img/1600w" sizes="100vw" />
```

Ps: srcset根据宽度设置图片为谁 srcset="图片地址 宽度" 如srcset="/img/480.png 480w" 480宽度为480.png这张图片

### picture

``` HTML
<picture>
    <source srcset="./img/ad003-l.png" media="(min-width:50em)">
    <source srcset="./img/ad003-m.png" media="(min-width: 30em)">
    <img src="./img/ad003.png" alt="新手秘籍">
</picture>
```

Ps:响应式图片picture写法。