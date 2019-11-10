# TypeScript字符串

## 多行字符串

``` JavaScript
var content = `
    aaa
    bbb
    ccc
    `
```

## 字符串模板

``` JavaScript
var myname = "zhai liang";
var getName = function() {
    return "zhai liang";
}

console.log(`hello ${myname}`);
console.log(`hello ${getName()}`);
console.log(
    `
    <div>
        <span>${myname}</span>
        <span>${getName}</span>
        <div>xxx</div>
    </div>
    `
)
```

## 自动拆分字符串

``` JavaScript
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}

var myname = "zhai liang";

var getAge = function() {
    return 18;
}

test `hello my name is ${myname}, i'm ${getAge()}`;

```

