# 面向对象特性

## 类(Class) 
类是TypeScript的核心，使用TypeScript开发时，大部分代码都是写在类里面的。
这里会介绍类的定义，构造函数，以及类的继承。

``` TypeScript
class Person{

    constructor(public name: string) {
        console.log("haha");
    }

    name;

    eat() {
        console.log("I'm eating");
    }

}

class Emplyoyee extends Person {
    constructor(name: string, code: string) {
        super(name);
        console.log("xixi");
        this.code = code;
    }
    code: string;
    work() {
        super.eat();
        this.doWork();
    }
    private doWork() {
        console.log("I'm working");
    }
}

var e1 = new Employee("name", "1");

var p1 = new Person("batman");
p1.eat();

var p2 = new Person("superman");
p2.eat();
```

## 泛型
参数化的类型，一般用来限制集合的内容。

``` TypeScript
var workers: Array<Person> = [];
workers[0] = new Person("zhangsan");
workers[1] = new Employee("lisi", "2");
workers[2] = 2; //  报错 只能放一个类型的元素;
```

## 接口（interface）
用来建立某种代码约定，使得其他开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定。

``` TypeScript
interface IPerson {
    name: string;
    age: number;
}

class Person {
    constructor (public config: IPerson) {
        
    }
}

var p1 =new Person({
    name: "zhangsan",
    age: 18,
})

interface Animal {
    eat();
}

class Sheep implements Animal {
    eat() {
        console.log("i eat grass");
    }
}

class Tiger implements Animal {
    eat() {
        console.log("i eat meat");
    }
}
```

## 模块(Module)

模块可以帮助开发者将代码分割为可重用的单元。开发者可以自己决定将模块中的哪些资源（类、方法、变量）暴露出去供外部使用，哪些资源只在模块内使用。

``` TypeScript a.ts
export var prop1;

var prop2;

export function func1() {

}

function func2() {

}

export class Clazz1 {

}

class Clazz2 {

}
```

``` TypeScript b.ts 
import {prop1, func1} from './a.ts';
console.log(prop1);

func1();

new Clazz1();

export function func3() {

}
```

## 注解
注解为程序的元素(类、方法、变量)加上更直观更明了的说明，这些说明信息与程序的业务逻辑无关，而是供指定的工具或框架使用的。

## 类型定义文件

类型定义文件用来帮助开发者在TypeScript中使用已有的JavaScript的工具包。如:jquery。

``` TypeScript
function func2() {
    $("#xxxx").hide();
}
```