# jQuery事件自动触发

``` jQuery
$(".son").click(function(){
	alert("son");
})
$(".father").click(function(){
	alert("father");
})
$(".father").trigger("click");
$(".father").triggerHandler("click");
/*
	trigger: 如果利用trigger自动触发事件，会触发事件冒泡。
	triggerHandler: 如果利用triggerHandler自动触发事件，不会触发事件冒泡
*/
$(".son").trigger("click");

$("input[type='submit']").click(function(){
	alert("submit");
})
$("input[type='submit']").trigger();
/*
	trigger:如果利用trigger自动触发事件，会触发默认行为
	triggerHandler: 如果利用triggerHandler自动触发事件，不会触发事件冒泡
*/

$("a").click(function(){
	alert("a");
})
$("a").triggerHandler("click");
$("a").trigger("click");
如果想自动触发a还要跳转到指定地址，需要把a里面的内容进行封装。
```

``` HTML
<div class="father">
	<div class="son"></div>
</div>
<a href="http://www.baidu.com">我是百度</a>
<form action="http://www.taobao.com">
	<input type="text">
	<input type="submit">
</from>
```

``` CSS
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