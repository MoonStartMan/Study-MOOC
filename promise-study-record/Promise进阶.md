# Promise 进阶

## Promise.resolve()

返回一个 fulfilled 的 Promise 实例，或原始 Promise 实例。

+ 参数为空，返回一个状态为 fulfilled 的 Promise 实例
+ 参数是一个跟 Promise 无关的值，同上，不过 fulfuilled 响应函数会得到这个参数
+ 参数为Promise 实例，则返回该实例，不做任何修改。
+ 参数为 thenable, 立刻执行它的 .then()

## Promise.race()

类似 Promise.all()，区别在于它有任意一个完成就算完成。

### 常用用法

+ 把异步操作和定时器放在一起
+ 如果定时器先触发，就认为超时，告知用户