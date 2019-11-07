# Promise 学习笔记

## Promise 三个状态

+ pending: [待定]初始状态
+ fulfilled: [实现]操作成功
+ rejected: [被否决]操作失败

```
Promise 状态发生改变，就会触发.then()里的响应函数处理后续步骤。
Promise 状态一经改变，不会再变。
```

## .then()

+ 状态响应函数可以返回新的 Promise，或其他值。
+ 如果返回新的Promise， 那么下一级.then()会在新 Promise状态改变之后执行
+ 如果返回其他值，则会立刻执行下一级.then()

## 错误处理

Promise 会自动捕获内部异常，并交给 rejected 响应函数处理。

### 错误处理的两种做法

+ reject('错误信息').then(null, message => {})
+ throw new Error('错误信息').catch( message => {})

```
推荐使用第二种，更加清晰好读，并且可以捕获前面的错误。
```

## Promise常用函数

### Promise.all()
+ 它接受一个数组作为参数。
+ 数组里可以是 Promise 对象，也可以是别的值，只有 Promise 会等待状态改变。
+ 当所有子 Promise 都完成， 该 Promise 完成，返回值是全部值的数组。
+ 有任何一个失败，该 Promise 失败，返回值是第一个失败的子Promise的结果。

### Promise.all()最常见就是和.map()