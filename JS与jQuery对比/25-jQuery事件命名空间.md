# jQuery事件命名空间


``` jQuery
$(function(){
	想要事件的命名空间有效，必须满足两个条件
	1.事件是通过on来绑定的
	2.通过trigger触发事件
	$(".son").on("click.zs", function(){
		alert("click1");
	})
	$(".son").on("click.ls", function(){
		alert("click2");
	})
	$(".son").trigger("click.zs");
})
```

``` HTML
<div class="father">
	<div class="son"></div>
</div>
<a href="http://www.baidu.com"><span>注册</span></a>
<form action="http://www.taobao.com">
	<input type="text">
	<input type="submit">
</form>
```