# jQuery文本值相关操作

``` jQuery
/*
	1.html([val|fn])
	和原生JS中的innerHTML一模一样
	2.text([val|fn])
	和原生JS的innerText一模一样
	3.val([val|fn|arr])
	
*/
	var btns = document.getElementsByTagName("button");
	btns[0].onclick = function() {
		$("div").html("<p>我是段落<span>我是span</span></p>");
	}
	btns[1].onclick = function() {
		$("div").html();
	}
	btns[2].onclick = function() {
		$("div").text("<p>我是段落<span>我是span</span></p>");
	}
	btns[3].onclick = function() {
		$("div").text();
	}
	btns[4].onclick = function() {
		$("input").val("请输入内容");
	}
	btns[5].onclick = function() {
		$("input").val();
	}
```

``` HTML
<button>设置HTML</button>
<button>获取html</button>
<button>设置text</button>
<button>获取text</button>
<button>设置value</button>
<button>获取value</button>
<div></div>
<input type="text">
```

``` css
*{
	margin: 0;
	padding: 0;
}
div{
	width: 100px;
	height: 100px;
	border: 1px solid #000;
}
```