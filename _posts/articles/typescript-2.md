---
date: 2021-01-02T03:00:33.992Z
updated: 2021-01-02T04:06:19.101Z
title: 一起入手Typescript（二）
slug: typescript-2
categories: 编程
type: Post
permalink: posts/typescript-2
---


## 4 Typescript的类型注解和类型推断

TypeScript 中的两个基本概念：`类型注解`和`类型推断`，这两个概念在我们编写 TypeScript 代码时会一直使用(重点)，但很多教程都没有讲解，不过在官方文档中有比较好的解释。你现在可能还不能完全理解我说的这两个概念，但是你看完文章后就会有很直观的了解啦

### 4.1 type annotation 类型注解

我们直接点，直接看代码

```ts
let countDemo4: number;
countDemo4 = 123;
```

这段代码就是类型注解，意思是显示的告诉代码，我们的count变量就是一个数字类型，这就叫做类型注解

### 4.2 type inferrence 类型推断

当你明白了`类型注解`的概念之后，再学`类型推断`就更简单了，先来看一段代码。还是在Demo4.ts文件中写入下面的代码。

```ts
let countInterfence = 123; //let countInterfence: number
```

这时候我并没有显示的告诉你变量countInference是一个`数字类型`，但是如果你把鼠标放到变量上时，你会发现 TypeScript `自动`把变量注释为了number（数字）类型，也就是说它是有某种推断能力的，通过你的代码 `TS` 会自动的去尝试`分析变量的类型`

#### 4.2.1 工作使用问题（潜规则）

- 如果 `TS` 能够自动分析变量类型， 我们就什么也不需要做了
- 如果 `TS` 无法分析变量类型的话， 我们就需要使用类型注解

#### 4.2.2 不需要注解例子

我们来看两个例子，先是一个不需要注解的

```ts
const one = 123;
const two = "abc";
const three = one + two;
```

#### 4.2.3 需要写的例子

```ts
function getTotal(one, two) {
    return one + two;
  }
const total = getTotal(1, 2); //正常情况
const Warningtotal = getTotal(1, "字符串"); //非正常情况
```

这种形式，就需要用到`类型注释`了，因为这里的one和two会显示为any类型。这时候如果你传字符串，你的逻辑就是*错误*的，所以你必须加一个`类型注解`

```ts
function GoodgetTotal(one: number, two: number) {
    return one + two;
  }
const Goodtotal = getTotal(1, 2); 
```

为什么total这个变量不需要加类型注解，因为当one和two两个变量加上注解后，TypeScript 就可以自动通过类型推断，分析出变量的类型。

#### 4.2.4 推断对象中属性的类型

当然 TypeScript 也可以推断出对象中属性的类型，比如现在写一个小姐姐的对象，然后里边有两个属性。

```ts

const XiaoJieJie = {
    name: "刘英",
    age: 18,
  };

/* 
const XiaoJieJie: {
    name: string;
    age: number;
}
 */

```

写完后你把鼠标放在XiaoJieJie对象上面，就会提示出他里边的属性，这表明 TypeScript 也分析出了对象的属性的类型。

在写 TypeScript 代码的一个重要宗旨就是每个变量，每个对象的属性类型都应该是固定的，如果你推断就让它推断，推断不出来的时候你要进行注释。

### Demo4.ts

```ts
/**
* Demo4.ts
 * 类型注解 & 类型推断
 * @date 2021-1-1
 * @author Wibus
 * TypeScript 中的两个基本概念：类型注解和类型推断，这两个概念在我们编写 TypeScript 代码时会一直使用(重点)
 */

 // 1 type annotation 类型注解
let countDemo4: number;
countDemo4 = 123;
// 这段代码就是类型注解，意思是显示的告诉代码，我们的count变量就是一个数字类型，这就叫做类型注解

 // 2 type inferrence 类型推断
 let countInterfence = 123; //let countInterfence: number
 /**
  * 我并没有显示的告诉你变量countInference是一个数字类型，但是如果你把鼠标放到变量上时，你会发现 TypeScript 自动把变量注释为了number（数字）类型
  * 也就是说它是有某种推断能力的，通过你的代码 TS 会自动的去尝试分析变量的类型。
  * 这个就彷佛是人的情商比较高，还没等女生表白，你就已经看出她的心思🤣
  */

  /**
   * 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
   * 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
   */

// 3 不需要写注解的例子 🌰
const one = 123;
const two = "abc";
const three = one + two;

// 4 需要写的例子 🌰
function getTotal(one, two) {
    return one + two;
  }
const total = getTotal(1, 2); //正常情况
const Warningtotal = getTotal(1, "字符串"); //非正常情况
//   这种形式，就需要用到类型注释了，因为这里的one和two会显示为any类型。这时候如果你传字符串，你的逻辑就是错误的，所以你必须加一个类型注解
function GoodgetTotal(one: number, two: number) {
    return one + two;
  }
const Goodtotal = getTotal(1, 2); 
// 为什么total这个变量不需要加类型注解，因为当one和two两个变量加上注解后，TypeScript 就可以自动通过类型推断，分析出变量的类型。

// 5 推断对象中属性的类型
/* 
const XiaoJieJie: {
    name: string;
    age: number;
}
 */
const XiaoJieJie = {
    name: "刘英",
    age: 18,
  };


// 写 TypeScript 代码的一个重要宗旨就是每个变量，每个对象的属性类型都应该是固定的，如果你推断就让它推断，推断不出来的时候你要进行注释。
```

## 5 TypeScript 函数参数和返回类型定义

### 5.1 简单类型定义

上次我们写了一个getTotal的函数，并且对传入的参数作了定义，我们再复习一遍。

新建一个文件demo5.ts,然后写入代码

```ts
function LastgetTotal(one: number, two: number) {
    return one + two;
}
const LastTotal = LastgetTotal(1, 2);
```

代码其实有一个小坑，就是我们并没有定义getTotal的返回值类型，虽然TypeScript可以自己推断出返回值是number类型。 但是如果这时候我们的代码写错了，比如写成了下面这个样子。

```ts
function BadgetTotal(one: number, two: number) {
    return one + two + "";
  }
  
const Badtotal = BadgetTotal(1, 2); 
```

这时候total的值就不是number类型了，但是不会报错。有的小伙伴这时候可能会说，可以直接给total一个类型注解，比如写成这个样子。

```ts
const total: number = getTotal(1, 2);
```

这样写虽然可以让编辑器报错，但是这还不是很高明的算法，因为你没有找到错误的根本，这时错误的根本是getTotal()函数的错误，所以合适的做法是给函数的返回值加上类型注解，代码如下：

```ts
function BettergetTotal(one: number, two: number): number {
    return one + two;
}
const BetterTotal = BettergetTotal(1, 2);
//这段代码就比较严谨了
```

### 5.2 函数无返回值时定义方法
有时候函数是没有返回值的，比如现在定义一个sayHello的函数，这个函数只是简单的terminal打印，并没有返回值。
```ts
function sayHello() {
  console.log("hello world");
}
```
这就是没有返回值的函数，我们就可以给他一个类型注解void，代表没有任何返回值。
```ts
function sayHello(): void {
  console.log("hello world");
}
```
如果这样定义后，你再加入任何返回值，程序都会报错。

### 5.3 never 返回值类型
如果一个函数是永远也执行不完的，就可以定义返回值为never，那什么样的函数是永远也执行不完的那?我们先来写一个这样的函数(比如执行执行的时候，抛出了异常，这时候就无法执行完了)。
```ts
function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}
```
还有一种是一直循环，也是我们常说的死循环，这样也运行不完，比如下面的代码：
```ts
function forNever(): never {
  while (true) {}
  console.log("Hello ");
}
```
### 5.4 函数参数为对象(解构)时
这个坑有很多小伙伴掉下去过，就是当一个函数的参数是对象时，我们如何定义参数对象的属性类型。我先写个一般javaScript的写法。
```ts
function add({ one, two }) {
  return one + two;
}

const total = add({ one: 1, two: 2 });
```
在浏览器中你会看到直接报错了，意思是total有可能会是任何类型，那我们要如何给这样的参数加类型注解那？最初你可能会这样写。
```ts
function add({ one: number, two: number }) {
  return one + two;
}

const total = add({ one: 1, two: 2 });
```
你在编辑器中会看到这种写法是完全错误的。那正确的写法应该是这样的。
```ts
function add({ one, two }: { one: number, two: number }): number {
  return one + two;
}

const three = add({ one: 1, two: 2 });
```
如果参数是对象，并且里边只有一个属性时，我们更容易写错。 错误代码如下：
```ts
function getNumber({ one }: number) {
  return one;
}

const one = getNumber({ one: 1 });
```
看着好像没什么问题，但实际这是有问题的，正确的代码应该时这样的。
```ts
function getNumber({ one }: { one: number }): number {
  return one;
}

const one = getNumber({ one: 1 });
```
这样写才是正确的写法

## Demo5.ts
```ts
/**
 * Demo5.ts
 * TypeScript 函数参数和返回类型定义
 * @date 2021-1-1
 * @author Wibus
 */


// 1 复习下demo4的getTotal
function LastgetTotal(one: number, two: number) {
    return one + two;
}
const LastTotal = LastgetTotal(1, 2);
//  代码其实有一个小坑，就是我们并没有定义getTotal的返回值类型，虽然TypeScript可以自己推断出返回值是number类型。 但是如果这时候我们的代码写错了，比如写程了下面这个样子。
function BadgetTotal(one: number, two: number) {
    return one + two + "";
  }
  
const Badtotal = BadgetTotal(1, 2); //这时候total的值就不是number类型了，但是不会报错。
// 1.1 某些人的解决办法
const SomePersontotal: number = BadgetTotal(1, 2); //这样写虽然可以让编辑器报错(不能将类型“string”分配给类型“number”。)，但是这还不是很高明的算法，因为你没有找到错误的根本

// 1.2 合适的做法是给函数的返回值加上类型注解

function BettergetTotal(one: number, two: number): number {
    return one + two;
}
const BetterTotal = BettergetTotal(1, 2);
//这段代码就比较严谨了

// 2 never 返回值类型
// 如果一个函数是永远也执行不完的，就可以定义返回值为never
function errorFuntion(): never {
    throw new Error();
    console.log("Hello World");
}
// 👆执行执行的时候，抛出了异常，这时候就无法执行完了

//void 无返回值类型
function avoid(): void {
    const a = 123
    //这个时候这个函数里面是不允许return一个值的
    return a;
}

function forNever(): never {
  while (true) {}
  console.log("Hello");
}
// ⬆️死循环，这样也运行不完
```

## 6 TypeScript 中数组类型的定义
TypeScript 中的数组类型，一般的数组类型定义我们已经接触过了，只是没有单独拿出来讲，所以先来复习一下。
 
### 6.1 一般数组类型的定义

我们我们先定义一个最最最简单的数组

```ts
const numberArr = [1,2,3]'
```

这时候你把鼠标放在`numberArr`上面可以看出，这个数组的类型就是 *number* 类型。这是 TypeScript 通过`类型推断`自己推断出来的。 如果你要显示的`注解`，也非常简单，可以写成下面的形式。
```ts
const numberArr: number[] = [1, 2, 3];
```
同样道理，如果你的数组各项是字符串，你就可以写成这样
```ts
const stringArr: string[] = ["a", "b", "c"];
```
也就是说你可以定义任意类型的数组，比如是`undefined`
```ts
const undefinedArr: undefined[] = [undefined, undefined];
```

这时候问题来了，如果数组中有多种类型，比如既有数字类型，又有字符串的时候。那我们要如何定义那。 很简单，只要加个()，然后在里边加上|就可以了，具体看代码。

```ts
const arr: (number | string)[] = [1, "string", 2];
```
数组简单类型的定义就是这样了，并不难。

### 6.2 数组中对象类型的定义

在实际项目当中肯定会有对象出现，那这个时候定义的话就麻烦一点点了

```ts
const xiaoJieJiesDemo6: {name: string, age: number}[] = [
    {name: "Ming", age: 15},
    {name: "Wibus", age: 14},
];
```

这样子的形式看起来比较复杂，当然这段程序是可以的，但是不好读嘛

#### 6.2.1 Type Alias 类型别名

`TS` 为我们弄了一个`类型别名`，使用type+名字，具体看代码

```ts
type lady = {name: string, age: number};

const GoodxiaoJieJiesDemo6: lady[] = [
    {name: "Ming", age: 15},
    {name: "Wibus", age: 14},
];
```
这样子就好读多了

#### 6.2.2 Class定义

当然，使用class来定义也是可以的，例如这样子

```ts
class ladys{
    name: string;
    age: number;
};
const GoodxiaoJieJiesDemo6_2: ladys[] = [
    {name: "Ming", age: 15},
    {name: "Wibus", age: 14},   
];
```

我们可以看到，是可以的~

### Demo6.ts

```ts
/**
 * Demo6.ts
 * TypeScript 中数组类型的定义
 * @date 2021-1-2
 * @author wibus
 */

// 1 一般数组类型的定义
const numberArr = [1,2,3];
// 这是最简单的数组类型（number) 当你鼠标放上变量名时，就可以看得出来是number类型（类型推断）
const numberArr2: number[] = [1,2,3];
// 类型注解
const stringArr: string[] = ["a","b","c"];
// 所以说你可以定义任何类型的数组
const undefinedArr: undefined[] = [undefined, undefined];
// 1.1 多种数据类型
const arr: (number|string)[] = [1,2,"abc"];
// 数组简单类型定义就这样了，其实不难

// 2 数组中对象类型的定义
// 在实际项目当中肯定会有对象出现，那这个时候定义的话就麻烦一点点了

const xiaoJieJiesDemo6: {name: string, age: number}[] = [
    {name: "Ming", age: 15},
    {name: "Wibus", age: 14},
];
//这样子的形式看起来比较复杂，当然这段程序是可以的，但是不好读嘛

// 2.1 Type Alias 类型别名

type lady = {name: string, age: number};
const GoodxiaoJieJiesDemo6: lady[] = [
    {name: "Ming", age: 15},
    {name: "Wibus", age: 14},
];
//这样子就好读多了

// 2.2 使用class
// 当然，使用class来定义也是可以的，例如这样子
class ladys{
    name: string;
    age: number;
};
const GoodxiaoJieJiesDemo6_2: ladys[] = [
    {name: "Ming", age: 15},
    {name: "Wibus", age: 14},   
]
// 我们可以看到，是可以的~
```