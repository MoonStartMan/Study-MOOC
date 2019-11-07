# jQuery其他静态方法(掌握)

## trim();
``` jQuery
//  $.trim();
作用:去除字符串两端的空格
参数： 需要去除空格的字符串
返回值： 去除空格之后的字符串
var str = '     toby      ';
var res = $.trim(str);
console.log("---"+str+"---");
console.log("---"+res+"---");
```

## isWindow();
``` jQuery
//	真数组
var arr = [1, 3, 5, 7, 9];

// 伪数组
var arrlike = {0:1, 1:3, 2:5, 3:7, 4:9, length:5};

//	对象
var obj = {"name": "lnj", age:"33"};

//  函数
var fn = function() {};

//  window对象
var w = window;

var res = $.isWindow(w);	// true

$.isWindow();
作用：判断传入的对象时候是window对象
返回值：true/false;
```

## isArray();
``` jQuery
var res = $.isArray(arrlike);
console.log(res);

$.isArray();
作用：判断传入的对象是否是真数组
返回值： true/false
```

## isFunction();
$.isFunction();
作用：判断传入的对象是否是函数
返回值：true/false
注意点：
jQuery框架本质上是一个函数