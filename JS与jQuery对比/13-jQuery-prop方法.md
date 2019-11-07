# jQuery-prop方法

``` jQuery
/*
	1.prop方法
	特点和attr方法一致
	2.removeProp方法
	特点和removeProp方法一致
	$("span").eq(0).prop("demo","it666");
	$("span").removeProp("demo")
	注意点：
	prop方法不仅能够操作属性，他还能操作属性节点
	$("span").prop("class");
	$("span").prop("class","box");
*/

```

``` HTML
<span class="span1" name="it666"></span>
<span class="span2" name="lnj"></span>
```

``` HTML
<input type="checkbox" checked>

<script>
	console.log($("input").prop(checked));// true
	console.log($("input").attr(checked));// checked
	官方推荐在操作属性节点时，具有true和false两个属性的属性节点，如checked,selected或者disabled 使用prop(),其他使用attr()
</script>
```