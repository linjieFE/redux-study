# 搭建环境

```bash
 sudo npm install -g create-react-app
```
## 新建项目
```bash
create-react-app  redux-demo01
```
## 启动项目
```
cd redux-demo01
yarn start
```

- http://localhost:3000

## 安装andDesign

```
npm install antd --save
```

### 第一章 新建一个静态列表页面TodoList
::: antd首字母大写 :::

### 第二章 安装redux
```
npm install --save redux
```

### redux常遇三上小坑

- store 必需是唯一的 只能有一个`store`空间
- 只有 `store` 能改变自己的内容， `Reducer` 不能改变 
- `Reducer` 必需量个 `纯函数`

+ `纯函数` - 如果函数的调用参数相同，则永远返回相同的结果，它不依赖于程序执行期间涵数外部任何状态或数据的变化，**必须只依赖于其输入参数决定**，（如本例中`reducer.js` 的`state`  和 `action`）
```js
    export default (state = defaultState ,action)=>{
        //todo ...

    }
```
### 无状态组件

## 调mock接口

```bash
sudo npm install --save axios  
```

### redux-thunk中间件


 Middleware Redux-Thunk中间件
      dispatch   👆   
action ------> store -----> reducer

- 安装中间件插件

```
sudo npm install --save redux-thunk 
```
- 配置
+ store/index.js 引入 详见代码注释
···
import thunk from 'redux-thunk'
···