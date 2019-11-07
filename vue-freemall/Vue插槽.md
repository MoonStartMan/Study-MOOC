# Vue 插槽

## 什么是插槽

+ 插槽(slot)是Vue提出来的一个概念，正如名字一样，插槽用于决定将携带的内容，插入到指定的某个位置，从而使模板分块，具有模板化的特质和更大的重要性。

## 怎么用插槽

``` html
<template>
	<div>
		我是父组件
		<slotOnel>
			<p style="color: red">我是父组件插槽内容</p>
		</slotOnel>
	</div>
</template>
```

## 作用域插槽

子组件
```
<template>
	<div>
		我是作用域插槽的子组件
		<slot :daya="user"></slot>
	</div>
</template>

<script>
export default {
	name: 'slotthree',
	data() {
		return {
			user: [
				{name: 'Jack', sex: 'boy'},
				{name: 'Jone', sex: 'girl'},
				{name: 'Tom', sex: 'boy'}
			]
		}
	}
}
</script>
```

在子组件的slot标签上绑定需要的值。