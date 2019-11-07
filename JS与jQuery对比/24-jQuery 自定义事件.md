# jQuery 自定义事件

``` jQuery
$(function(){
	$(".son").click(function(event){
		alert("son");
	});
	$(".son").trigger("click");
	
	想要自定义事件，必须满足两个条件
	1.事件必须是通过on绑定的
	2.事件必须通过trigger来触发
	$(".son").on("myClick", function(){
		alert("son");
	})
	$(".son").trigger("myClick");
})
```

``` HTML
<div class="father">
	<div class="son"></div>
</div>
<a href="http://www.baidu.com"><span>注册</span></a>
<form action="http://www.taobao.com">

</form>
```