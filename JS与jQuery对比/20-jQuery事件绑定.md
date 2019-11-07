# jQuery事件绑定

``` jQuery
	jQuery中有两种绑定事件的方式
	1.eventName(fn);
		编码效率略高
		部分事件jQuery没有实现，所以不能添加
	2.on(eventName,fn);
		编码效率略低
		所有js事件都可以添加
		
	注意点:
	两种绑定事件的方式都可以添加多个相同事件而且不会覆盖
	$(".button").click(function(){
		alert("hello lnj")
	})
	$(".button").click(function(){
		alert("hello 123")
	})
	$(".button").mouseenter(function(){
		alert("hello mouseenter")
	})
	$(".button").mouseleave(function(){
		alert("hello mouseleave")
	})
	$(".button").on("click",function(){
		alert("hello lnj2")
	})
	$(".button").on("click",function(){
		alert("hello 123")
	})
	$(".button").on("mouseenter",function(){
		alert("hello mouseenter")
	})
		$(".button").on("mouseleave",function(){
		alert("hello mouseleave")
	})
```

``` html
<button>我是按钮</button>
```