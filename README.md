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

- [vuex](https://github.com/vuejs/vuex)

- [vuex-router-sync](https://github.com/vuejs/vuex-router-sync)

- [axios](https://github.com/mzabriskie/axios)

- [nprogress](https://github.com/rstacruz/nprogress)

- [normalize.css](https://github.com/necolas/normalize.css/commits/master)

- mock

- babel-runtime

- node-sass sass-loader


> 项目依赖包

```
$ npm install --save vuex vuex-router-sync axios nprogress babel-runtime normalize.css
```

> 开发依赖包

```
# npm instsall --save-dev node-sass sass-loader mock
```


## 项目端口配置

> 默认端口8080

修改 config 文件夹下 index.js 找到 8080，这里修改的是 9001

## 依赖包配置

> mock

在 build 文件夹下找到 dev-server.js 中添加

```
// mock
app.use('/mock',express.static('./mock'))
```

## 错误收集

> node "os":"win32","arch":"x64"

```
$ npm install -g n --force
```