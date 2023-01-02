---
title: （一）、props 的基本使用
icon: zujianhua
date: 2023-01-03
category:
    - React
---

### 🐷一、props 的基本使用
```jsx
class Person {
    render() {
        console.log(this)
        const { naem, age, sex } = this.props
        return (
            <ul>
                <li>姓名：{name}</li>
                <li>性别：{sex}</li>
                <li>年龄：{age}</li>
            </ul>
        )
    }
}

// 渲染组件到页面
ReactDom.render(<Person name="tom" age="18" sex="女"/>, doument.getElmentById('test'))
```

![](https://image.zswei.xyz/img/202301021738916.png)