# jQuery事件冒泡和默认行为

``` jQuery
	1.什么是事件冒泡?
	2.如何阻止事件冒泡
	3.什么是默认行为?
	4.如何阻止默认行为
	$(".son").click(function(event) {
		alert("son");
		return false;	//	阻止事件冒泡方法1
		event.stopPropagation();	//	阻止事件冒泡方法2
	})
	$(".father").click(function() {
		alert("father");
	})
	
	$("a").click(function(event){
		alert("我是百度");
		return false;	//	阻止默认行为;
		event.stopPropagation();
	})
```

``` html
<div class="father">
	<div class="son"></div>
</div>
<a href="http://www.baidu.com">我是百度</a>
<form action="http://www.taobao.com">
	<input type="text">
	<input type="submit">
</from>
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
}
.son{
	width: 100px;
	height: 100px;
	background-color: blue;
}
```