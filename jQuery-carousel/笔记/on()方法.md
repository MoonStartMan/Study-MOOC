# .on()方法

## 语法：

```
on(events[,selector][,data],handler(eventObject))
```

##	描述:

在选定的元素上绑定一个或多个事件处理函数

+ events: 一个或多空格分隔的事件类型，列如 click keydown。
+ selector: 一个选择器字符串，用于过滤出被选中的元素中能触发事件的后代元素，如果为null，那么被选中的元素总是能触发事件。
+ data: 事件触发时，要传递给处理函数的event.data。
+ handler: (eventObject)事件触发时，执行的函数。

##	有点：

委托事件不仅可以给为创建的后代元素绑定事件外，当需要监视很多元素的时候，委托事件的开销更小。