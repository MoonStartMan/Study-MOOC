# jQuery的scrollTop方法

``` HTML
<div class="scroll">

</div>
<button>设置</button>
<button>获取</button>
```

``` css
*{
	margin: 0;
	padding: 0;
}
.scroll{
	width:100px;
	height: 200px;
	border:1px solid #000;
	overflow: auto;
}
```

``` jQuery
$(function() {
	//	编写jQuery相关代码
	var btns = document.getElementsByTagName("button");
	//	监听获取
	btns[0].onclick = function() {
		$(".scroll").scrollTop();	//	获取元素偏移位
		//	获取网页滚动的偏移位
		//	注意点：为了保证浏览器的兼容，获取网页滚动的偏移位需要按照如下写法:
		$("html").scrollTop()+$("html").scrollTop();
	}
	btns[1].onclick = function() {
		//	设置滚动的偏移位
		$(".scroll").scrollTop(300p);	//	设置元素偏移位
		//	设置网页滚动偏移位
		//	注意点：为了保证浏览器的兼容，获取网页滚动的偏移位需要按照如下写法:
		$("html,body").scrollTop(300);
	}
})
```