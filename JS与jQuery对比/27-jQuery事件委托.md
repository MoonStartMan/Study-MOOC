# jQuery事件委托

``` jQuery
$(function() {
	1.什么是事件委托?
	请别人帮忙做事情，然后将做完的结果反馈给我们
	$("button").click(function() {
		$(ul).append("<li>我是新增的li</li>")
	})
	/*
		在jQuery中，如果通过核心函数找到的元素不止一个，那么在添加事件的时候，jQuery会遍历
	*/
	$("ul>li").click(function() {
		console.log($(this).html());
	})
	
	$("ul").delegate("li","click",function(){
		console.log($(this).html());
	})
})
```

``` HTML
<ul>
	<li>我是第1个li</li>
	<li>我是第2个li</li>
	<li>我是第3个li</li>
</ul>
<button>新增一个li</button>
```