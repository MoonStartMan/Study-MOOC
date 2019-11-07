# jQuery事件解绑

``` html
<button>我是按钮</button>
```

``` jQuery

	function test1() {
		alert("hello lnj");
	}
	function test2() {
		alert("hello 123");
	}
	$("button").click(test1);
	$("button").click(test2);
	$("button").mouseenter(function() {
		alert("hello mouseenter");
	})
	$("button").mouseleave(function() {
		alert("hello mouseleave");
	})
	
	//	off方法如果不传递参数，会移除所有的事件
	$("button").off();
	//	off方法如果传递一个参数，会移除所有指定类型的事件
	$("button").off("click");
	//	off方法如果传递两个参数，会移除指定类型的指定事件
	$("button").off("click",test1);
```