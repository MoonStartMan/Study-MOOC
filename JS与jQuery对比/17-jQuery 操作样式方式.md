# jQuery 操作样式方式

``` jQuery
编写jQuery相关的代码
$(function() {
	1.逐个设置
	$("div").css("width","100px");
	$("div").css("height","100px");
	$("div").css("background-color","red");
	
	2.链式设置
	注意点：链式操作大于3步，建议分开
	$("div").css("width","100px").css("height","100px").css("background-color","blue");
})

	3.批量设置
	$("div").css({
		width: "100px",
		height: "100px",
		backgorund-color: "red"
	});
	
	4.获取CSS样式值
	$("div").css("width");
```

``` html
<div></div>
```