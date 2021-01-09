---
date: 2021-01-02T05:13:43.268Z
updated: 2021-01-02T09:48:57.625Z
title: 一起入手TypeScript（三）
slug: typescript-3
categories: 编程
type: Post
permalink: posts/typescript-3
---


## 7 TypeScript 元组的使用和类型约束

元组是TS特有的一个概念，JavaScript并没有这个概念

### 7.1 元组的基本使用

我们先来看一个例子

```ts
const xiaojiejie = ["Qwq", "NoJob", 28];
```

这时候把鼠标放到xiaojiejie变量上面，可以看出`推断`出来的类型。我们就用`类型注解`的形式给他作一个注解

```ts
const zhujie_xiaojiejie : (number | string)[] = ["Qwq", "NoJob", 28];
```

这个时候你已经添加了`类型注解`，但是在下面的代码当中会有一个`小细节问题`

```ts
const Badxiaojiejie: (number | string)[] = ["Qwq", 28, "NoJob"];
```

我们只是把数组的位置调换了一下，但是`TS`并不能发现这个问题，所以我们需要一个更强大的类型，来解决，所以，这就是`元组`

元组和数组比较类似，但是类型注解的时候有点不一样

```ts
const Shuzu_xiaojiejie: [string, string, number] = ["Qwq", "NoJob", 28];
```

这个样子我们就把每个类型的位置都固定住了，这就叫做元组

#### 7.2 元组的使用

我们假设有这样子的一组数据

```ts
"dajiao", "teacher", 28;
"liuying", "teacher", 18;
"cuihua", "teacher", 25;
```

如果是这个样子的话，我们可以看到前两个都是字符串，最后一个是常数。

```ts
const xiaojiejies: [string, string, number][] = [
  ["dajiao", "teacher", 28],
  ["liuying", "teacher", 18],
  ["cuihua", "teacher", 25],
];
```

你要搞清楚元组和数组的区别，在理解后能在项目中适当的时候使用不同的类型。

### Demo7.ts

```ts
/**
 * Demo7.ts
 * TypeScript 元组的使用和类型约束
 * @date 2021-1-2
 * @author Wibus
 */

//元组是TS特有的一个概念，JavaScript并没有这个概念

// 1 元组的基本使用
const xiaojiejie = ["Qwq", "NoJob", 28];
// 把上面的进行类型注解
const zhujie_xiaojiejie : (number | string)[] = ["Qwq", "NoJob", 28];
// 这个时候你已经添加了类型注解，但是在下面的代码当中会有一个小细节问题
const Badxiaojiejie: (number | string)[] = ["Qwq", 28, "NoJob"];
//我们只是把数组的位置调换了一下，但是TS并不能发现这个问题，所以我们需要一个更强大的类型，来解决，所以，这就是元组
const Shuzu_xiaojiejie: [string, string, number] = ["Qwq", "NoJob", 28];
// 这个时候我们就已经把每一个类型都固定住了

// 2 元组的使用

// 得到的数据源是这样子的：
// "dajiao", "teacher", 28;
// "liuying", "teacher", 18;
// "cuihua", "teacher", 25;

const xiaojiejies: [string, string, number][] = [
  ["dajiao", "teacher", 28],
  ["liuying", "teacher", 18],
  ["cuihua", "teacher", 25],
];

// 你要搞清楚元组和数组的区别，在理解后能在项目中适当的时候使用不同的类型。
```

## 8 TypeScript 的 interface接口

TypeScript的接口。就是用来规范类型的

### 8.1 Interface 接口初步了解

我们要作一个简历的自动筛选程序，很简单。年龄小于 25 岁，胸围大于 90 公分的，可以进入面试环节。我们最开始的写法是这样的

```ts
const screenresume = (name: string, age: number, bust: number) => {
    age < 24 && bust >= 90 && console.log(name + "Pass");
    age > 24 || (bust < 90 && console.log(name + "Can't Pass"));
};

screenresume("Wibus", 14, 90);
```

好像还不错，我们再加上个查看简历的功能，于是你的代码是这样

```ts
const getResume = (name: string, age: number, bust: number) => {
    console.log(name+ "age: " + age);
    console.log(name+ "Bust: " + bust);
}
getResume("Wibus", 14, 90);
```

但是这个时候会发现，有很多东西重复了，程序开发中一直强调“代码重用”，两个方法用的类型注解一样，需要作个统一的约束。大上节课我们学了一个`类型别名`的知识可以解决代码重复的问题，这节课我们就学习一个更常用的语法`接口`（Interface）.

我们可以把这两个重复进行类型注解，定义成统一的接口。代码如下

```ts
interface Girl {
  name: string;
  age: number;
  bust: number;
}
```

有了这个接口后我们程序也要做一些修改

```ts
const screenresume2 = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "Pass");
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "Can't Pass"));
};

const getResume2 = (girl: Girl) => {
    console.log(girl.name+ "age: " + girl.age);
    console.log(girl.name+ "Bust: " + girl.bust);
};

const girl = {
    name: "Wibus",
    age: 14,
    bust: 94,
};

screenresume2(girl);
getResume2(girl);
```
这样就更像是面向对象编程了,以后再用到同样的接口也不怕了，直接使用girl就可以了。

### 8.2 接口和类型别名的区别

现在我们学了`接口`，也学过了`类型别名`，这两个语法和用处好像一样, 确实用起来基本一样，但是也有少许的不同。

> 类型别名可以直接给类型，比如string，而接口必须代表对象。

比如我们的类型别名可以写出下面的代码：
```ts
type Girl1 = stirng;
```
但是接口就不能这样写，它必须代表的是一个对象，也就是说，你初始化`girl`的时候，必须写出下面的形式.
```ts
const girl = {
  name: "大脚",
  age: 18,
  bust: 94,
};
```

### 8.3 接口非必选值定义

我们要求尽量能看到小姐姐的腰围，但是不作强制要求，就是`可选值`。那接口如何定义？`typeScript`已经为我们准备好了相应的办法，就是在 *:* 号前加一个 *?*

比如把Girl的接口写成这样。

```ts
interface Girl2 {
  name: string;
  age: number;
  bust: number;
  waistline?: number; // 非必选值
}
```

再修改一下getResume方法，写成这样。

```ts
const getResume3 = (girl: Girl2) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
};
```

这时候在定义`girl对象`的时候，就可以写`saistline`（腰围），也可以不写了。

### Demo8.ts

```ts
/**
 * Demo8.ts
 * TypeScript 的 interface 接口
 * @date 2021-1-2
 * @author Wibus
 * interface东西比较多，分两次讲述
 */

// 1 interface 接口初步了解

// 1.1 简历工具
const screenresume = (name: string, age: number, bust: number) => {
    age < 24 && bust >= 90 && console.log(name + "Pass");
    age > 24 || (bust < 90 && console.log(name + "Can't Pass"));
};

screenresume("Wibus", 14, 90);
// ts-node demo8.ts
// 进入面试


const getResume = (name: string, age: number, bust: number) => {
    console.log(name+ "age: " + age);
    console.log(name+ "Bust: " + bust);
}

// 但是似乎name: string, age: number, bust: number一直在出现
// 为了避免啊代码重用，我们可以使用接口

interface Girl {
    name: string;
    age: number;
    bust: number;
}
// 于是我们就需要修改一点程序
const screenresume2 = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "Pass");
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "Can't Pass"));
};

const getResume2 = (girl: Girl) => {
    console.log(girl.name+ "age: " + girl.age);
    console.log(girl.name+ "Bust: " + girl.bust);
};

const girl = {
    name: "Wibus",
    age: 14,
    bust: 94,
};

screenresume2(girl);
getResume2(girl);

// 2 接口和类型别名的区别

type Girl1 = string;

const girl1 = {
    name: "Wibus",
    age: 14,
    bust: 94 
};

// 3 接口非必选值定义

interface Girl2 {
  name: string;
  age: number;
  bust: number;
  waistline?: number; // 非必选值
}

const getResume3 = (girl: Girl2) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
};

//这时候在定义girl对象的时候，就可以写saistline（腰围），也可以不写了。
```

## 9 TypeScript 的 interface 接口 2

我们接着继续讲接口，接口部分的内容还是比较多的

### 9.1 允许加入任意值

简历一般是有自由发挥的空间的，所以这时候需要一些任意值，就是自己愿意写什么就写什么。这时候interface接口也是支持的。

```ts
interface Girl1 {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname: string]: any; //属性的名字是字符串类型，属性的值可以是任何类型。
  }
```

`propname` 你可以随意改成其他的名字～

这时候我们在对象里给一个性别

```ts
const girl = {
    name: "大脚",
    age: 18,
    bust: 94,
    waistline: 21,
    sex: "女",
  };
```

再修改一下代码，就没有错误了。

```ts
const getResume = (girl: Girl1) => {
    console.log(girl.name + "年龄是：" + girl.age);
    console.log(girl.name + "胸围是：" + girl.bust);
    girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
    girl.sex && console.log(girl.name + "性别是：" + girl.sex);
  };
```

这时候我们的程序是不报错的，但是如果我们去掉刚才的设置，就会报错。

```ts
[propname:string]:any;  //去掉
```

### 9.2 接口里的方法

接口里不仅可以存属性，还可以存方法，比如这时候有个`say()`方法，返回值是`string`类型。这时候你就不要再想成简历了，你需要更面向对象化的编程，想象成一个人。

```ts
interface Girl2 {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname: string]: any;
    say(): string;
}
```

加上这个`say()`方法后，程序马上就会报错，因为我们对象里没有` say `方法。那我们就要给对象一个` say `方法

```ts
const girl2 = {
  name: "Wibus",
  age: 14,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
};
```

### 9.3 接口和类的约束

` JavaScript `从ES6里是有类这个概念的，类可以和接口很好的结合

```ts
class XiaoJieJie implements Girl {}
```

这时候类会直接报错，所以我们需要把这个类写的完全点。

```ts
class xiaojiejie implements Girl2 {
    name: "大脚";
    age: 18;
    bust: 94;
    waistline: 21;
    sex: "女";
    say() {
      return "欢迎光临 ，红浪漫洗浴！！";
    };
};
```

### 9.4 接口的继承

接口也可以用于继承的，比如你新写一个`Teacher`接口，继承于`Person`接口。

```ts
interface Teacher extends Girl2{
    teach(): string;
}
```

比如这时候，只看` Teacher `级别的简历，那我们需要修改`getResume()`方法。

```ts
const getResume2 = (girl2: Teacher) => {
    console.log(girl2.name + "年龄是：" + girl2.age);
    console.log(girl2.name + "胸围是：" + girl2.bust);
    girl2.waistline && console.log(girl2.name + "腰围是：" + girl2.waistline);
    girl2.sex && console.log(girl2.name + "性别是：" + girl2.sex);
};
getResume2(girl2);
```

修改后，你就会发现下面我们调用`getResume2()`方法的地方报错了,因为这时候传的值必须有`Teach`方法，修改`girl`对象，增加`teach（）`方法，这时候就不会报错了。

```ts
const girl2 = {
  name: "Wibus",
  age: 14,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
    teach() {
    return "我是一个老师";
  },
};
```

关于接口的知识就讲到这里吧，这基本包含了接口 80%的知识

## Demo9.ts

```ts
/**
 * Demo9.ts
 * TypeScript 的 interface 接口 2
 * @date 2021-1-2
 * @author Wibus
 */

 // 1 允许加入任意值
//  简历一般是有自由发挥的空间的，所以这时候需要一些任意值，就是自己愿意写什么就写什么。这时候interface接口也是支持的。
interface Girl1 {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [name: string]: any; //属性的名字是字符串类型，属性的值可以是任何类型。
  }
// 这时候我们在对象里给一个性别
const girl = {
    name: "大脚",
    age: 18,
    bust: 94,
    waistline: 21,
    sex: "女",
  };
//   再修改一下代码，就没有错误了。
const getResume = (girl: Girl1) => {
    console.log(girl.name + "年龄是：" + girl.age);
    console.log(girl.name + "胸围是：" + girl.bust);
    girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
    girl.sex && console.log(girl.name + "性别是：" + girl.sex);
  };
// 这时候我们的程序是不报错的，但是如果我们去掉刚才的设置，就会报错。

// 2 接口里的方法
// 接口里不仅可以存属性，还可以存方法，比如这时候有个say()方法，返回值是string类型。这时候你就不要再想成简历了，你需要更面向对象化的编程，想象成一个人。

interface Girl2 {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
    [propname: string]: any;
    say(): string;
  }
// 加上这个say()方法后，程序马上就会报错，因为我们对象里没有 say 方法。那我们就要给对象一个 say 方法

const girl2 = {
  name: "Wibus",
  age: 14,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
    teach() {
    return "我是一个老师";
  },
};

// 3 接口和类的约束
// 类和接口能有很好的结合

class xiaojiejie implements Girl2 {
    name: "大脚";
    age: 18;
    bust: 94;
    waistline: 21;
    sex: "女";
    say() {
      return "欢迎光临 ，红浪漫洗浴！！";
    };
};

// 4 接口的继承
// 接口也可以用于继承的，比如你新写一个Teacher接口，继承于Person接口。

interface Teacher extends Girl2{
    teach(): string;
}

// 比如这时候，只看 Teacher 级别的简历，那我们需要修改getResume()方法。
const getResume2 = (girl2: Teacher) => {
    console.log(girl2.name + "年龄是：" + girl2.age);
    console.log(girl2.name + "胸围是：" + girl2.bust);
    girl2.waistline && console.log(girl2.name + "腰围是：" + girl2.waistline);
    girl2.sex && console.log(girl2.name + "性别是：" + girl2.sex);
  };
  
getResume2(girl2);
```