# 静态方法holdReady方法

``` html
<button>回复ready事件</button>
```

``` javascript
var btn = document.getElementsByTagName("button")[0];
btn.onclick = function() {
	alert("btn");
}
```

``` jQuery
//  $.holdReady(true); 作用: 暂停ready执行
$.holdReady(true);
$(document).ready(function() {
	alert("ready");
	恢复: $.holdReady(false);
});
```