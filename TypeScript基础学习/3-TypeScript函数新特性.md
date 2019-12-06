# 函数新特性

## Rest and Spread 操作符: 用来声明任意数量的方法参数;

``` TypeScript
function func1(...args) {
    args.forEach(function (arg) {
        console.log(arg);
    })
}

function func1(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

var args = [1, 2];

func1(...args);

var args2=[7, 8, 9, 10, 11];

func1(...args2);
```

## generator函数： 控制函数的执行过程，手工暂停和恢复代码执行

``` JavaScript
function* doSomething() {
    
    console.log("start");
    
    yield;

    console.log("finish");
}

var func1 = doSomething();

func1.next();

func1.next();
```

``` TypeScript
function* getStockPrice(stock) {

    while(true) {
        yield Math.random()*100;
    }
}

var priceGenerator = getStockPrice("IBM");

var limitPrice = 15;

var price = 100;

while(price > limtPirce) {
    price = priceGenerator.next().value;
    console.log(`the generator return ${price}`);
}

console.log(`buying at ${price}`);
```

## destructuring析构表达式:通过表达式将对象或数组拆解成任意数量的变量。

``` TypeScript
function getStock() {
    return {
        code: "IBM",
        price1: 200,
        price2: 400
    },
    aaa: "xixi",
    bbb: "hahha",
}

var stock = getStock();
var code = stock.code;
var price = stock.price;

var {code, price: {price2}} = getStock();

console.log(code);
console.log(price);

var array1 = [1, 2, 3, 4];

var [number1, number2, ...others] = array1;

function doSomething(number1, number2, ...others) {
    console.log(number1);
    console.log(number2);
    console.log(others);
}

doSomething(array1);
```

## 表达式循环

### 箭头表达式：用来声明匿名函数，消除传统匿名函数的this指针问题。

``` TypeScript
var sum = arg1 => {
    console.log(arg1);
}

var myArray = [1, 2, 3, 4, 5];

console.log(myArray.filter(value) => value%2 == 0);

function getStock(name: string) {
    this.name = name;

    setInterval(function() {
        console.log('name is:' + this.name);
    }, 1000)
}

var stock = new getStock("IBM");

function getStock2(name: string) {
    this.name = name;

    setInterval(() => {
        console.log('name is:' + this.name);
    }, 1000)
}
```

## forEach(), for in 和 for of

``` TypeScript
var myArray = [1, 2, 3, 4];
myArray.desc = "four number";

myArray.forEach(value => console.log(value));

for(var n in myArray) {
    console.log(myArray[n]);
}

for (var n of myArray) {
    if (n > 2) break;
    console.log(n);
}

```