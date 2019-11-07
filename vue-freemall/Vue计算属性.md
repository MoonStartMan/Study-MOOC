# Vue 计算属性

计算属性是自动监听依赖值的变化，从而动态返回内容，监听是一个过程，在监听的值变化时，可以触发一个回调，并做一些事情。它有以下几个特点：

+ 数据可以进行逻辑处理，减少模板中计算逻辑。
+ 对计算属性中的数据进行监视
+ 依赖固定的数据类型（响应式数据）

例子

``` JavaScript
computed: {
        checkAllFlag() {
            //  当数组中所有对象都返回true的时候，我们整体才会返回true
            return this.cartList.every((item) => {
                return item.checked
            })
        },
```

``` html
<span class="checkbox-btn item-check-btn" :class="{'check' : checkAllFlag}">
```

使用计算属性来动态控制css类名