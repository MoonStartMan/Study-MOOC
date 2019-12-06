# 参数新特性

## 参数类型：在参数名称后面使用冒号来指定参数的类型。

``` TypeScript
var myname: string = "zhai liang";

myname = 13;    //  类型不为string。

var alias = "xixi";

alias = 13; //  类型推断机制

var man: boolean = true;

function test(): void{
    return "";
}

class Person {
    name: string;
    age: number;
}

var zhangsan: Person = new Person();
zhangsan.name = "zhailiang";
zhangsan.age = 18;
```

## 默认参数：在参数声明后用等号来指定参数的默认值。

``` JavaScript
var myname:string = "zhai liang";

function test(a:string, b:string, c:string="join") {
    console.log(a);
    console.log(b);
    console.loc(c);
}

test("xxx", "yyy", "zzz");  // xxx yyy zzz
test("xxx", "yyy");//  xxx yyy join
```

## 可选参数：在方法的参数声明后面用问号来标明次参数为可选参数。

``` TypeScript
function test(a: string, b?: string, c:string = "jojo"){
    console.log(a);
    console.log(b.length);
    console.log(c);
}

test("xxx");
```