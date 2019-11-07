# jQuery内容选择器

## :empty
:empty: 作用:找到既没有文本内容也没有子元素的指定元素
``` jQuery
var $div = $("div:empty");
console.log($div);
```

## :parent
:parent作用：找到文本内容或子元素的指定元素
``` jQuery
var $div = $("div:parent");
console.log($div);
```

## :contains(text)
:contains(text) 作用: 找到包含指定文本内容的指定元素
``` jQuery
var $div = $("div:contains("我是div")");
console.log($div);
```

##: has(selector)
:has(select)作用:找到包含指定子元素的指定元素。
``` jQuery
var $div = ("div":has('span'));
console.log($div);
```