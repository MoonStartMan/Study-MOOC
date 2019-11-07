# jQuery尺寸和位置操作

##尺寸
``` html
<div class="father">
	<div class=son></div>
</div>
<button></button>
<button></button>
```

``` css
*{
	margin: 0;
	padding: 0;
}
.father{
	width: 200px;
	height: 200px;
	background-color: red;
	border: 50px solid #000;
	margin-left: 50px;
	position: relative;
}
.son{
	width: 100px;
	height: 100px;
	background-color: blue;
	position: 50px;
	top: 50px;
}
```

``` jQuery
$(function() {
	//	编写jQuery相关代码
	var btns = document.getElementByTagName("button");
	//	监听获取
	btns[0].onclick = function() {
	
		$(".father").width;
	}
	btns[1].onclick = function() {
		$(".father").width("500px");
	}
})
```
## 位置
``` jQuery
//  offset([coordinates])
//  作用：获取元素距离窗口的偏移位
$(".son").offset().left	//	获取距离窗口左边的距离
$('.son').offset({
	left: 10	//	设置距离左边为10px
})
//  position()
//  作用：获取元素距离定位元素的偏移位
$(".son").position().left	//	获取距离父元素左边的距离
//	注意点：position方法只能获取不能设置
$(".son").css({
	left: "10px"
})
```