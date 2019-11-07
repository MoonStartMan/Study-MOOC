# jQuery类操作相关方法(掌握)

``` HTML
<style>
*{
	margin: 0;
	padding: 0;
}
.class1{
	width: 100px;
	height: 100px;
	backgorund-color: red;
}
.class2{
	border:10px solid red;
}
</style>
<body>
    <button>添加类</button>
    <button>删除类</button>
    <button>切换类</button>
    <div></div>
</body>
<script>
$(function() {
	/*
	1.addClass(class|fn)
	 作用：添加一个类
	 如果要添加多个，多个类名间用空格隔开即可
	2.removeClass([class|fn]);
	 作用：删除一个类
	 如果想删除多个，多个类名之间用空格隔开即可
	3.toggleClass(class|fn[,sw]);
	 作用：切换类
	 有就删除，没有就添加。
	*/
	var btns= document.getElementsByTagName("button");
	btn[0].onclick =function () {
		$("div").addClass("class1");
		$("div").addClass("class2");
	}
	btn[1].onclick =function () {
		$("div").removeClass("class1 class2");
	}
	btn[2].onclick =function () {
	$("div").toggleClass("class1 class2");
	}
});
</script>
```