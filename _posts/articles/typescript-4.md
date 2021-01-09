---
date: 2021-01-02T16:01:41.008Z
updated: 2021-01-03T07:42:20.098Z
title: 一起入手TypeScript（四）
slug: typescript-4
categories: 编程
type: Post
permalink: posts/typescript-4
---


## 10 TypeScript 类的概念和使用

`TypeScript` 中类的概念和` ES6 `中原生类的概念大部分相同，但是也额外增加了一些新的特性。我在这里会完全从一个新手的角度，讲解类的各项知识点。

### 10.1 类的基本使用

新建一个文件，叫做`demo10.ts`,然后定义一个最简单的`Lady`类,这里要使用关键字`class`,类里边有姓名属性和一个得到姓名的方法
```ts
class Lady {
    content = "Hi，帅哥";
    sayHello() {
      return this.content;
    }
}
  
const goddess = new Lady();
console.log(goddess.sayHello());
// ts-node demo10.ts
//result：Hi，帅哥
```

> 代码下面的注释的意思是：运行ts-node demo10.ts命令，得到的结果是：Hi，帅哥

这是一个最简单的类了，如果你有些编程经验，对这个一定很熟悉

### 10.2 类的继承

TypeScrip 的继承和ES6中的继承是一样的。关键字也是`extends`,比如我们这里新建一个`xiaoJieJie`的类，然后继承自`Lady`类，在`XiaoJieJie`类里写一个新的方法，叫做`sayLove`,具体代码如下。

```ts
class xiaoJieJie extends Lady{
    sayLove(){
        return "I love you.";
    }
}

const Wibus = new xiaoJieJie();
console.log(Wibus.sayHello());
console.log(Wibus.sayLove());
// ts-node demo10.ts
// result: Hi，帅哥 I love you.
```
类写好以后，我们声明的对象是`xiaoJieJie`这个类，我们同时执行`sayHello()`和`sayLove()`都是可以执行到的，这说明继承起作用了

### 10.3 类的重写

讲了继承，那就必须继续讲讲重写，重写就是子类可以重新编写父类里边的代码。现在我们在`XiaoJieJies`这个类里重写父类的`sayHello()`方法

```ts
class XiaoJieJies extends Lady {
    sayLove(){
        return "I love you.";
    }
    sayHello() {
        return "Hi, honey!";
      }
}

const wibus = new XiaoJieJies();
console.log(wibus.sayHello());
console.log(wibus.sayLove());
// ts-node demo10.ts
// result: Hi, honey! I love you.
```

### 10.4 super 关键字的使用

比如我们还是想使用`Lady`类中说的话，但是在后面，加上`你好`两个字就可以了。这时候就可以使用`super`关键字，它代表父类中的方法

```ts
class Xiaojiejie extends Lady {
    sayLove() {
        return "I love you!";
      }
      sayHello() {
        return super.sayHello() + ".你好！";
      }
}

const goddesss = new Xiaojiejie();
console.log(goddesss.sayHello());
console.log(goddesss.sayLove());
// ts-node demo10.ts
// result: Hi，帅哥.你好！I love you!
```

那么整个下来呢，我们至少要知道TypoeScript中的类是如何定义和继承的。类中还有很多知识点要讲

### Demo10.ts

```ts
/**
 * Demo10.ts
 * TypeScript 类的概念和使用
 * @date 2021-1-2
 * @author Wibus
 */

 // TypeScript 中类的概念和 ES6 中原生类的概念大部分相同，但是也额外增加了一些新的特性

// 1 类的基本使用
// 下面是最简单的类
class Lady {
    content = "Hi，帅哥";
    sayHello() {
      return this.content;
    }
}
  
const goddess = new Lady();
console.log(goddess.sayHello());
// ts-node demo10.ts
//result：Hi，帅哥

// 2 类的继承
// TypeScrip 的继承和ES6中的继承是一样的。关键字也是extends,比如我们这里新建一个XiaoJieJie的类，然后继承自Lady类，在XiaoJieJie类里写一个新的方法，叫做sayLove,具体代码如下。

class xiaoJieJie extends Lady{
    sayLove(){
        return "I love you.";
    }
}

const Wibus = new xiaoJieJie();
console.log(Wibus.sayHello());
console.log(Wibus.sayLove());
// ts-node demo10.ts
// result: Hi，帅哥 I love you.

// 类写好以后，我们声明的对象是XiaoJieJie这个类，我们同时执行sayHello()和sayLove()都是可以执行到的，这说明继承起作用了

// 3 类的重写
// 讲了继承，那就必须继续讲讲重写，重写就是子类可以重新编写父类里边的代码。现在我们在XiaoJieJie这个类里重写父类的sayHello()方法

class XiaoJieJies extends Lady {
    sayLove(){
        return "I love you.";
    }
    sayHello() {
        return "Hi, honey!";
      }
}

const wibus = new XiaoJieJies();
console.log(wibus.sayHello());
console.log(wibus.sayLove());
// ts-node demo10.ts
// result: Hi, honey! I love you.

// 4 super 关键字的使用
// 比如我们还是想使用Lady类中说的话，但是在后面，加上你好两个字就可以了。这时候就可以使用super关键字，它代表父类中的方法

class Xiaojiejie extends Lady {
    sayLove() {
        return "I love you!";
      }
      sayHello() {
        return super.sayHello() + ".你好！";
      }
}

const goddesss = new Xiaojiejie();
console.log(goddesss.sayHello());
console.log(goddesss.sayLove());
// ts-node demo10.ts
// result: Hi，帅哥.你好！I love you!

// 我们至少要知道TypoeScript中的类是如何定义和继承的。类中还有很多知识点要讲
```

## 11 TypeScript 中类的访问类型

上节已经简单学习了`TypeScript`中类的使用，这节我们继续学习一下类中的访问类型。其实类的访问类型就是基于三个关键词`private`、`protected`和`public`,也是三种访问类型

### 11.1 简单的类

我们来写一个简单的类先，我们定义一个 Person 类，然后使用这个类的对象，进行赋值，最后打印在控制台上。

```ts
class Person {
    name: string;
  }
  
const person = new Person();
person.name = "Wibus";
  
console.log(person.name);
// ts-node demo11.ts
// result: Wibus
```

写完后我们直接可以在`Terminal`(中),输入`ts-node demo11.ts`进行查看结果，结果会打印出`Wibus`

### 11.2 public 访问属性

这时候可以打出Wibus是因为我们如果不在类里对name的访问属性进行定义，那么它就会默认是public访问属性。所以，我们刚刚所写的类相当于这样子

```ts
class Person2 {
    public name: string;
};
```

> `public`从英文字面的解释就是`公共的`或者说是`公众的`，在程序里的意思就是允许在类的`内部`和`外部`被调用.

比如说，我们在类里面写一个`sayHello()` 方法，访问属性为`public`

```ts
class Person3 {
    public name: string;
    public sayhello(){
        console.log(this.name + ' say hello');
    };
};
// ————————下面的是外部调用——————————
const person3 = new Person3;
person3.name = "Wibus";
person3.sayhello();
// ts-node demo11.ts
// result: Wibus say hello
```

这是的`this.name`就是类的内部调用。我们在下面在执行一下这个方法`person3.sayHello()`, 终端中可以看到一切正常运行了，顺利打印

### 11.3 private 访问属性

> `private` 访问属性的意思是，只允许在类的内部被调用，外部不允许调用

现在我们把` name `属性改成`private`,这时候在类的内部使用不会提示错误，而`外部`,以及子类使用`VSCode`直接会报错。

```ts
class Person4 {
    private name: string;
    private sayhello(){
        console.log(this.name + ' say hello');
    };
};

class Person_Person4 extends Person4 {
    public saySomeThing() {
        console.log(this.name); 
    }
}
//VSC Error: 属性“name”为私有属性，只能在类“Person4”中访问。
// ————————下面的是外部调用——————————
const person4 = new Person4;
person4.name = "Wibus";
person4.sayhello();
// VSC Error: 属性“sayhello”为私有属性，只能在类“Person4”中访问。
```

### 11.4 protected 访问属性

> `protected` 允许在类内及继承的子类中使用

把name的访问属性换成`protected`,这时候`外部`调用`name`的代码会报错，`内部`的不会报错，和`private`一样。这时候我们再写一个`Person_Person5`类，继承于`Person4`

```ts
class Person5 {
    protected name: string;
    protected sayhello(){
        console.log(this.name + ' say hello');
    };
};

class Person_Person5 extends Person5 {
    public sayBye(){
        return "this.name";
    }
}

// ————————外部调用——————————
const person5 = new Person5;
person5.name = "Wibus";
person5.sayhello();
// VSC Error: 属性“sayhello”受保护，只能在类“Person5”及其子类中访问。
// ————————Person_Person5 类 ——————
const person_person5 = new Person_Person5;
person_person5.sayBye(); //VSC 不报错
```

那么通过这个例子相信你一定知道什么是类的内部和类的外部，也知道了三个访问类型的区别了

### Demo11.ts

```ts
/**
 * Demo11.ts
 * TypeScript 中类的访问类型
 * @date 2021-1-3
 * @author Wibus
 */

// 上节已经简单学习了TypeScript中类的使用，这节我们继续学习一下类中的访问类型。其实类的访问类型就是基于三个关键词private、protected和public,也是三种访问类型

// 1 简单的类

class Person {
    name: string;
  }
  
const person = new Person();
person.name = "Wibus";
  
console.log(person.name);
// ts-node demo11.ts
// result: Wibus

// 2 public 访问属性
// 这时候可以打出Wibus是因为我们如果不在类里对name的访问属性进行定义，那么它就会默认是public访问属性。

// 相当于
class Person2 {
    public name: string;
};
// public从英文字面的解释就是公共的或者说是公众的，在程序里的意思就是允许在类的内部和外部被调用.
class Person3 {
    public name: string;
    public sayhello(){
        console.log(this.name + ' say hello');
    };
};
// ————————下面的是外部调用——————————
const person3 = new Person3;
person3.name = "Wibus";
person3.sayhello();
// ts-node demo11.ts
// result: Wibus say hello

// 3 private 访问属性
// private 访问属性的意思是，只允许在类的内部被调用，外部不允许调用

class Person4 {
    private name: string;
    private sayhello(){
        console.log(this.name + ' say hello');
    };
};

class Person_Person4 extends Person4 {
    public saySomeThing() {
        console.log(this.name); 
    }
}
//VSC Error: 属性“name”为私有属性，只能在类“Person4”中访问。
// ————————下面的是外部调用——————————
const person4 = new Person4;
person4.name = "Wibus";
person4.sayhello();
// VSC Error: 属性“sayhello”为私有属性，只能在类“Person4”中访问。


// 4 protected 访问属性
// protected 允许在类内及继承的子类中使用

class Person5 {
    protected name: string;
    protected sayhello(){
        console.log(this.name + ' say hello');
    };
};

class Person_Person5 extends Person5 {
    public sayBye(){
        return "this.name";
    }
}

// ————————外部调用——————————
const person5 = new Person5;
person5.name = "Wibus";
person5.sayhello();
// VSC Error: 属性“sayhello”受保护，只能在类“Person5”及其子类中访问。
// ————————Person_Person5 类 ——————
const person_person5 = new Person_Person5;
person_person5.sayBye(); //VSC 不报错
```

## 12 TypeScript 类的构造函数

构造函数就是在类被初始化的时候，自动执行的一个方法。我们通过这个构造方法经常作很多需要提前完成的工作，比如显示页面前我们要从后台得到数据

### 12.1 类的构造函数

简单来说，构造函数的关键字就是`constructor`

新建一个` Person` 类，类的里边定义一个`name`，但是`name`我们并不给他值,然后我们希望在`new`出对象的时候，直接通过传递参数的形式，给`name`赋值，并打印出来。这时候我们就需要用到`构造函数`了

```ts
class Person{
    public name: string;
    constructor(name:string){
        this.name = name;
    };
};

const person = new Person('Wibus');
console.log(person.name);
// ts-node demo12.ts
// result: Wibus
```

这是最常规和好理解的写法，那么既然都这么说了，就是有更简单的写法啦

#### 12.1.1 简单的写法

```ts
class Person2 {
    constructor(public name:string){} // 这个地方的name需要写上访问属性
};

const person2 = new Person2('Wibus2');
console.log(person2.name);
```

这种写法就相当于你定义了一个`name`,然后在构造函数里进行了赋值，这是一种简化的语法

### 12.2 类继承中的构造器写法

普通类的构造器我们已经会了，在子类中使用构造函数需要用`super()`调用父类的构造函数，如果你看不懂我在说啥的话，看下面的代码

```ts
class Teacher extends Person2 {
    constructor(public age: number){
        super('Wibus');
    };
};

const teacher = new Teacher(18);
console.log(teacher.age);
console.log(teacher.name);
```

如果你不写`super('Wibus');`的话，VSC将会报错：派生类的构造函数必须包含 "super" 调用。

当然你可以`super('');` 直接过去😂

> 父类没有构造函数，子类也要使用`super()`进行调用，否则就会报错。

```ts
class Person3 {};

class Teacher2 extends Person3 {
    constructor(public age: number){
        super();
    };
};

const teacher2 = new Teacher2(18);
console.log(teacher2.age);
```

这一节主要讲的就是类中的构造函数（也有叫构造器的），构造函数在工作中用的很多，所以你要学会并作充分的练习～

### Demo12.ts

```ts
/**
 * Demo12.ts
 * TypeScript 类的构造函数
 * @date 2021-1-3
 * @author Wibus
 * 构造函数就是在类被初始化的时候，自动执行的一个方法。我们通过这个构造方法经常作很多需要提前完成的工作，比如显示页面前我们要从后台得到数据
 */

// 1 类的构造函数
//构造函数的关键字是constructor

class Person{
    public name: string;
    constructor(name:string){
        this.name = name;
    };
};

const person = new Person('Wibus');
console.log(person.name);
// ts-node demo12.ts
// result: Wibus
// 这是最常规和好理解的写法

// 1.1 简单的写法

class Person2 {
    constructor(public name:string){} // 这个地方的name需要写上访问属性
};

const person2 = new Person2('Wibus2');
console.log(person2.name);
// 这种写法就相当于你定义了一个name,然后在构造函数里进行了赋值，这是一种简化的语法

// 2 类继承中的构造器写法
// 普通类的构造器我们已经会了，在子类中使用构造函数需要用super()调用父类的构造函数

class Teacher extends Person2 {
    constructor(public age: number){
        super('Wibus');
    };
};

const teacher = new Teacher(18);
console.log(teacher.age);
console.log(teacher.name);

// 父类没有构造函数，子类也要使用super()进行调用，否则就会报错。

class Person3 {};

class Teacher2 extends Person3 {
    constructor(public age: number){
        super();
    };
};

const teacher2 = new Teacher2(18);
console.log(teacher2.age);

// 主要讲的就是类中的构造函数（也有叫构造器的），构造函数在工作中用的很多，所以你要学会并作充分的练习。
```