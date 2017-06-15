# 开发项目配置

依赖包
> vue + vuex + router + axios + nprogress + mock

样式重置
> normalize.css

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 项目依赖插件

+ [vuex](https://github.com/vuejs/vuex)

  - 仓库

+ [vuex-router-sync](https://github.com/vuejs/vuex-router-sync)

  - 同步路由到仓库中

+ [axios](https://github.com/mzabriskie/axios)

  - 数据请求(ajax)

+ [nprogress](https://github.com/rstacruz/nprogress)

  - 页面加载进度条

+ [normalize.css](https://github.com/necolas/normalize.css/commits/master)

  - global css reset

+ mock

  - 模拟请求数据

+ [babel-runtime](https://github.com/babel/babel/tree/master/packages/abel-runtime)

  - 模拟ES2015环境

+ node-sass sass-loader

  - Sass编译


## 项目端口配置

> 修改默认监听端口(默认8080)

在项目根目录 config 文件夹下打开 index.js 找到 8080，我这里修改监听 9001

## 依赖包配置

> mock

在项目根目录 build 文件夹下打开 dev-server.js 添加下面代码，在 exporess 中注册静态文件访问路径

```
// mock
app.use('/mock',express.static('./mock'))
```