---
title: （三）复习类相关知识
date: 2022-12-31
category:
    - react
---


### 🥥一、类式组件
类式组件适用于【复杂组件】的定义，类式组件需要用到 `js` 相关的类知识
- [类的基本知识](../../blend/js/js-6.md)

### 🥠二、定义一个类式组件，继承 `React` 自带的 `React.Component` 类
```jsx
// 1.创建类式组件 必须要继承 React 中自带的 React.Component
class Demo extends React.Component  {

}
```
- 类式组件的三个必要条件
1. 必须继承 `React` 自带的 `React.Component` 类
2. 必须调用 `render` 这个方法
3. `render` 方法必须有返回值
```jsx
// 1.创建类式组件 必须要继承 React 中自带的 React.Component
class Demo extends React.Component  {
    render() {
        return <h2>我是类式组件</h2>
    }
}

// 2. 渲染到组件到页面
ReactDom.render(<Demo/>, document.getElmentById('test'))
```

### 🍥三、解决几个问题
1. 上述代码中类的 `render` 函数是放在哪里的？
- 放在 `Dome` 的原型对象上，共实例使用，那么实例在哪里呢？
- ReactDom.render(<Demo/>, ....) 执行了这个 `react` 帮我们 `new` 了


2. 执行 `ReactDom.render()` 之后发生了什么
- `React` 解析组件标签，找到了 `Demo` 组件
- 发现组件是使用类定义的，随后 `new` 出来改类的实例，并通过改该实例调用到原型上 `render` 方法
- 将 `render` 返回的虚拟 `dom` 转换为真实 `dom`，随后呈现在页面中

3. `render` 中的 `this` 是谁？
- `Demo` 的实例对象，或者说是 `Demo` 的组件实例对象

```jsx
// 1.创建类式组件 必须要继承 React 中自带的 React.Component
class Demo extends React.Component  {
    render() {
        return <h2>我是类式组件</h2>
        console.log('render中的this', this)
    }
}

// 2. 渲染到组件到页面
ReactDom.render(<Demo/>, document.getElmentById('test'))
```

![](https://image.zswei.xyz/img/202301011448972.png)

### 🦐四、我们需要用到的组件三大属性
1. props
2. refs
3. state

- 下面图中这些方法，都是继承于 `react` 自带的 `React.Component` 类

![](https://image.zswei.xyz/img/202301011449730.png)