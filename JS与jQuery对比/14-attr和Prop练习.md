# attr和Prop练习

``` HTML
<input type="text">
<button>切换图片</button><br>
<img src="./1.png" alt="">
<script>
	//	编写jQuery相关代码
	//  1.给按钮添加点击事件
		var btn = document.getElementsByTagName("button")[0];
		btn.onclick = function() {
			
		}
	//  2.获取输入框输入的内容
		var input = document.getElementsByTagName(input)[0];
		var text = input.value;
	//  3.修改img的src属性节点的值
		$("img").attr("src",text);
		$("img").prop("src",text);	//	没有false和true用attr方法
</script>
```