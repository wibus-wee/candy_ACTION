---
date: 2021-01-01T01:16:41.899Z
updated: 2021-01-02T03:00:47.792Z
title: 一起入手TypeScript（一）
slug: typescript-1
categories: 编程
type: Post
permalink: posts/typescript-1
---


> 从一起小白到一起精通～

我们将会一起从小白到精通的吧！

## 1 Typescript环境搭建

如果你想使用 TypeScript 来编写代码，你需要先安装一下它的开发环境，这并不复杂。

1.安装 `Node` 的运行环境

你可以到`Node.js`官网去下载 Node 进行安装(https://node.js.org)，建议你下载LTS版本,也就是长期支持版本。安装的过程我就不演示了，这个过程就和安装 QQ 一样，没有任何难度。

如果你已经安装了，可以打开命令行工具，然后使用node -v命令查看安装的版本，但是一般还有一个命令需要检测一下，就是npm -v,如果两个命令都可以输出版本号，说明你的 Node 安装已经没有任何问题了。

2.`全局安装` typeScript

你要使用 TypeScript 先要在你的系统中全局安装一下TypeScript，这里你可以直接在 VSCode 中进行安装，安装命令可以使用` npm` 也可以使用 `yarn`

```sh
npm install typescript -g
yarn global add typescript
```

这两个你使用那个都是可以的，根据喜好自行选择，我使用的npm进行安装。

我们在一个目录下新建`Demo1.ts`,输入下面的代码：

```ts
function hello() {
  let web: string = "Hello World";
  console.log(web);
}

hello();
```

使用node Demo1.ts时，会出现报错。所以我们需要先tsc Demo.ts，在目录下将会生成Demo1.js，我们再node Demo1.js就没事了

### 1.1 ts-node 工具

但是这样操作的效率实在是太低了，你可以使用ts-node插件来解决这个问题，有了这个插件，我们就不用再编译了，而使用ts-node就可以直接看到编写结果。

使用`npm`命令来全局安装，直接在命令行输入下面的命令：

```bash
npm install -g ts-node
```

安装完成后，就可以在命令中直接输入如下命令，来查看结果了。

```bash
ts-node Demo1.ts
```

### Demo1.ts

```ts
function hello() {
  let web: string = "Hello World";
  console.log(web);
}

hello();
```

## 2 Typescript静态类型

### 2.1 一般静态类型

下面的代码是一般的，也是最简单的变量静态类型

```ts
 // 1 一般的静态类型
 const count: number = 1; //此时number这个变量值为0
```
这里的: number就是定义了一个静态类型。

这样定义后count这个变量在程序中就永远都是数字类型了，不可以改变了。

比如我们这时候给count复制一个字符串，它就报错了。

```ts
// 错误示范
const count: number = 1
count = "Wibus"; //这里的代码VSC将会报错提示：Cannot assign to 'count' because it is a constant.（无法分配到 "count" ，因为它是常数。）
```

你也可以发现这时候的count变量,可以使用number类型上所有的属性和方法。

当然我们还可以使用其他的类型，如string（字符串）

### 2.2 自定义静态类型

下面的代码展示了什么是 自定义静态类型

```ts
//2 自定义静态类型
interface Student {
  name: string; //string - 字符串;
  age: number; //number 常数
}
const Ming: Student = {
  name: "小明", //可以填写字符串
  age: 14, //只能填写数字
};
```

`interface` 是我们之后需要学到的接口，这部分暂时不说

这时候你如果声明变量，跟自定义不一样，VSCode直接就会报错。需要注意的是，这时候Ming变量也具有name和age属性了。

你需要记住的是，如果使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定了。这个特点就大大提高了程序的健壮性，并且编辑器这时候也会给你很好的语法提示，加快了你的开发效率。

### Demo2.ts

```ts
/**
 * Demo2.ts
 * 介绍typescript的静态类型
 * @date 2021-1-1
 * @author Wibus
 */

 // 1 一般的静态类型
 const count: number = 1; //此时number这个变量值为0

/**
  * 这里的: number就是定义了一个静态类型。
  * 这样定义后count这个变量在程序中就永远都是数字类型了，不可以改变了。
  * 比如我们这时候给count复制一个字符串，它就报错了。
  * count = "Wibus";
  */

count = "Wibus"; //这里的代码VSC将会报错提示：Cannot assign to 'count' because it is a constant.（无法分配到 "count" ，因为它是常数。）

//2 自定义静态类型
interface Student {
  name: string; //String - 字符串;
  age: number; //number 常数
}
const Ming: Student = {
  name: "小明", //可以填写字符串
  age: 14, //只能填写数字
};
//这时候你如果声明变量，跟自定义不一样，VSCode直接就会报错。需要注意的是，这时候Ming变量就变得具有name和age属性了

/**
 * 如果使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定了。
 * 这个特点就大大提高了程序的健壮性，并且编辑器这时候也会给你很好的语法提示，加快了你的开发效率。
 */
```

## 3 Typescript 基础静态类型和对象类型

在 TypeScript 静态类型分为两种，一种是基础静态类型，一种是对象类型

### 3.1 基础静态类型

基础静态类型非常的简单，只需要在变量名后加上 *:* 之后加上类型名即可，例子如下：

```ts
const counter : number = 918; // 类型 number only数字
const myName : string = "Wibus"; // 类型 string only字符串
```

类型不止这些，还有`null`,`undefinde`,`symbol`,`boolean`，`void`，`nerver`这些都是最常用的基础数据类型

### 3.2 对象类型

先来看一个例子，通过例子有经验的小伙伴就知道个大概了，然后我们再来讲解(其实上节课我们也讲到了，我们这里就当复习了)。

新建一个文件`demo3.ts`（你可以跟我不一样）,然后写下如下代码。

#### 3.2.1 最简单的对象类型
```ts
const xiaoGeGe: {
    name: string, //字符串类型
    age: number, //常数类型
  } = {
    name: "Wibus", //对应的数据
    age: 14,
  };
  console.log(xiaoGeGe.name);
```

写完后，我们在 **terminal（终端）** 中输入`ts-node demo3.ts`，可以看到结果输出了Wibus。这就是一个经典的对象类型，也是最简单的对象类型。

#### 3.2.2 数组对象类型

对象类型也可以是数组，比如现在我们需要很多小姐姐，我们就可以这样写。

```ts
const xiaoJieJies : string[] = ["Awa", "Qwq", "老婆"];
```

这时候的意思是，变量xiaoJieJies必须是一个数组，数组里的内容必须是字符串。你可以试着把字符串改为数字，VSCode会直接给我们报错。

```ts
// ⚠️错误示范
const ErrorxiaoJieJies : string[] = [123, "Qwq", "老婆"]; //VSC将会直接报错
```

#### 3.2.3 类类型

来看看下面的代码。这个代码就是用类的形式，来定义变量。

```ts
class Person {} //定义一个Person类
const Js: Person = new Person();
```

这个意思就是dajiao必须是一个Person类对应的对象才可以。

#### 3.2.4 函数类型

我们还可以定义一个函数类型，并确定返回值。代码如下：

```ts
const Wibus : () => string = () => {
    return "I'm Wibus";
};
```

我们现在总结一下对象类型可以有几种形式：

- 对象类型
- 数组类型
- 类类型
- 函数类型

这几种形式我们在TypeScript里叫做对象类型。

### Demo3.ts

```ts
/**
 * Demo3.ts
 * 基础静态类型和对象类型
 * @Date 2021-1-1
 * @author Wibus
 */


// 基础静态类型
const counter : number = 918;
const myName : string = "Wibus";
// null,undefinde,symbol,boolean，void这些都是最常用的基础数据类型

// 对象类型
// 1 🌰
const xiaoGeGe: {
    name: string, //字符串类型
    age: number, //常数类型
  } = {
    name: "Wibus", //对应的数据
    age: 14,
  };
  console.log(xiaoGeGe.name);
// ts-node Demo3.ts Result: Wibus
// 这就是一个经典的对象类型，也是最简单的对象类型。

// 2 🌰 对象类型也可以是数组
const xiaoJieJies : string[] = ["Awa", "Qwq", "老婆"]; 
// 这时候的意思是，变量xiaoJieJies必须是一个数组，数组里的内容必须是字符串。你可以试着把字符串改为数字，VSCode会直接给我们报错。
// ⚠️错误示范
const ErrorxiaoJieJies : string[] = [123, "Qwq", "老婆"]; //VSC将会直接报错

// 3 类

class Person {} //定义一个Person类
const Js: Person = new Person(); // 这个意思就是Js必须是一个Person类对应的对象才可以
// 我们还可以定义一个函数类型，并确定返回值
const Wibus : () => string = () => {
    return "I'm Wibus";
};
/**
 * 对象类型可以有几种形式：
 * 对象类型
 * 数组类型
 * 类类型
 * 函数类型
 * 这几种形式在TypeScript里叫做对象类型。
 */
```