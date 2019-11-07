# jQuery each方法

``` javascript
var arr = [1,3,5,7,9];
arr.forEach(function(value,index){
	console.log(index, value);
})
var obj = {0:1, 1:3, 2:5, 3:7, 4:9,length:5};
obj.forEach(function(){
	console.log(index,value);//报错 
})
第一个参数：遍历到元素
第二个参数：当前遍历到的索引
注意点：
原生发forEach方法只能遍历数组，不能遍历伪数组
```

``` jQuery
// 1.利用jQuery的each静态方法遍历数组
第一个参数:当前遍历到的索引
第二个参数：遍历到的元素
注意点:
jQuery的each方法是可以遍历伪数组的
$.each(arr, function(index),value) {
	console.log(index,value);
}
$.each(obj, function(index),value) {
	console.log(index,value);
}
```