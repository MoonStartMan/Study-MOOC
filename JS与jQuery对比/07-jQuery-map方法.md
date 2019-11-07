# jQuery-map方法

``` javascript
var arr =[1, 3, 5, 7, 9];
var obj = {0:1, 1:3, 2:5, 3:7, 4:9, length:5};
// 1.利用原生JS的map方法遍历
arr.map(function(value, index, array) {
	console.log(index, value, array);
});
obj.map(funciton(value, index, array)) {
	console.log(index, value, array);
}

第一个参数：当前遍历到的元素
第二个参数：当前遍历到的索引
第三个参数：当前被遍历的数组
注意点:
和原生的forEach一样，不能遍历伪数组。


$.map(arr,function(value, index){
	console.log(index,value)
})
第一个参数：要遍历的数组
第二个参数：每遍历一个元素之后执行的后调函数
回调函数的参数:
第一个参数：遍历到的元素
第二个参数：遍历到的索引
注意点：
和jQuery中的each静态方法一样，map静态方法也可以遍历伪数组。

jQuery中的each静态方法和map静态方法的区别:
each静态方法默认的返回值就是，遍历谁返回谁
map静态方法默认的返回值是一个空数组

each静态方法不支持在回调函数中对遍历的数组进行处理
map静态方法可以在回调函数中通过return对遍历的数组进行处理，然后生成一个新的数组返回
```