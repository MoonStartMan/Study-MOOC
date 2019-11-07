# jQuery 冲突问题

## 释放$的使用权
``` jQuery
1.释放$的使用权
注意点： 释放操作必须在编写其他jQuery代码之前编写
		释放之后就不能再使用$，改为jQuery
jQuery.onConflict();//	不使用$
jQuery(function(){
	alert("hello h1");
})

2.自定义一个访问符号
var nj = jQuery.noConflict();
nj(function(){
	alert("hello h1");
})
```