# jQuery静态方法和实例方法

## 静态方法

``` javascript
//1.定一个一个类
function AClass() {

}
2.给这个类添加一个静态方法
直接添加给类的就是静态方法
AClass.staticMethod = function() {
	alert("staticMethod");
}
// 静态方法通过类名调用
AClass.staticMehod();
```

## 实例方法
给类添加一个实例方法
``` javascript
AClass.prototype.instanceMehod = function() {
	alert("instanceMethod");
}
// 实例方法通过类的实例调用
// 创建一个实例(创建一个对象)
a.instanceMethod();
```


