---
title: （六）路由问题导致样式丢失
date: 2023-03-15
category:
    - react路由管理
tag: 
    - react
order: 6
---

### 🍇一、解决多级路由路径刷新页面样式丢失的问题
1. `public/index.html` 中 引入样式不要写 `./` 写 `/` 常用

2. `public/index.html` 中 引入样式不要写 `./` 写 `%PUBLIC_URL%` 常用

3. 使用 `HashRouter` 可以直接解决，因为 `#` 后面的路径不参与解析