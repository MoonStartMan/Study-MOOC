# jQuery事件命名空间面试题

``` jQuery
$(".father").on("click.ls", function(){
	alert("father click1");
});
$(".father").on("click",function(){
	alert("father click2");
})
$(".son").on("click.ls",function(){
	alert("son click1");
})

	利用trigger触发子元素带命名空间的事件，那么父元素带相同命名空间的事件也会被触发，而父元素没有命名空间的事件不会触发
	利用trigger触发子元素不带命名空间的事件，那么子元素所有同类型的事件和父元素所有相同类型的事件都会被触发。
$(".son").trigger("click.ls");
```

``` html
<div class="father">
	<div class="son"></div>
</div>
```