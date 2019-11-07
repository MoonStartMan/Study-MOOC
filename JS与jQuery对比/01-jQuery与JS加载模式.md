# 01-jQuery与JS加载模式

## javascript
``` javascript
window.onload = function (ev) {
	1. 通过原生的JS入口函数可以拿到DOM元素
	var img = document.getElemntsByTagName("img")[0];
	console.log(img);
	2.通过原生的JS入口函数可以拿到DOM元素的距离
	var width = window.getComputedStyle(img).width;
	console.log(width)
}

1.原生JS如果编写了多个入口函数，后面编写的会覆盖前面编写的。
window.onload = function(ev) {
	alert("hello h1");
}
window.onload = function(ev) {
	alert("hello h2");
}
```

## jQuery
``` jQuery
$(document).ready(function){
	1.通过jQuery入口函数可以拿到DOM元素
	var $img = $("img")[0];
	console.log($img);
	2.通过jQuery入口函数不可以拿到DOM元素的宽高
	var $width = $img.widht();
	console.log($width);
}

1.jQuery中编写多个入口函数，后面的不会覆盖前面的。
$(document).ready(function(){
	alert("hello h1");
})
$(document).ready(function(){
	alert("hello h2");
})
```

## 区别
1.原生JS和jQuery入口函数的加载模式不同
2.原生JS会等到DOM元素加载完毕，并且图片也加载完毕才会执行
3.JQuery会等到DOM元素加载完毕，但不会等到图片也加载完毕就会执行
4.原生JS如果编写了多个入口函数，后面编写的会覆盖前面编写的。
5.jQuery中编写多个入口函数，后面的不会覆盖前面的。