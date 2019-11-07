# jQuery入口函数其他写法

## 第一种写法
``` jQuery
$(document).ready(function) {
	alert("Hello h1");
}
```

## 第二种写法
``` jQuery
jQuery(document).ready(function) {
	alert("Hello h1");
}
```

## 第三种写法
``` jQuery
$(function(){
	alert("Hello h1");(推荐)
})
```

## 第四种写法
``` jQuery
jQuery(function () {
	alert("Hello h1");
})
```