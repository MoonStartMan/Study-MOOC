# Vue 过滤器的使用

##  全局过滤器

``` vue.js
Vue.filter('globalFilter', function(value){
	return value + "!!!"
})
```

## 局部过滤器

```
filters: {
	componentFilter: function(value) {
		return value + "!!!"
	}
}
```

## 全局和局部过滤器注意点

全局注册是fiter,没有s的。而组件过滤器是filters，是有s的，这要注意了，虽然你写的时候没有s不报错，但是过滤器是没有效果的。

## 使用方法

### 在花括号插值
```
{{'ok' | globalFilter}}
```

### 在v-bind表达式中使用

``` html
<div v-bind:data="ok"| globalFilter></div>
```

## 过滤器的参数写法
``` js
{{message | filterA | filterB}}
```

``` html
<div>{{'2018' | filterA | filterB}}</div>
filters: {
	filterA: function(value) {
		return value + '年'
	},
	filterB: function(value) {
		return value + 'Hello World'
	}
}
```

``` js
{{message | filterA('arg1', arg2)}}
```

``` html
<div>{{ '2018' | filterA('07', '17') }}</div>
filters: {
	filterA: function(value, arg1, arg2) {
		return value + '-' + arg1 + '-' + arg2
	}
}
```

``` js
{{'a', 'b' | filterB}}
```

``` html
<div>结果:{{ 'Hello', 'World' | filterB }}</div>
filters: {
	filterB: function(value1, value2){
		return value + ' ' + value2
	}
}
```