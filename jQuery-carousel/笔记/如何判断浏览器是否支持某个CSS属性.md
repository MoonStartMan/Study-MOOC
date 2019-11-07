# 如何判断浏览器是否支持某个CSS属性

##	实现思路

通过判断某个element的style中是否存在某个css属性。

##	实现代码

```  JavaScript
(function(temp){
	if(temp.style["transition"] !== undefined) {
		return true;
	}
})(document.createElement("div"));
```