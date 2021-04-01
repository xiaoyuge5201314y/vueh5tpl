# vueh5tpl

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 简介 
vueh5模板

# 需要的依赖

## axios
- npm i axios -S
- 用于发送请求

## vant
- npm i vant -S
- 移动端ui框架

## less 
- npm i -D less less-loader
- css预处理器

# 目录
```
public 
src //资源文件
    api //存放所有api请求
    assets //静态文件
        font //字体图标
        image //图片文件
        style //样式文件
    components //存放组件
    config //存放配置文件
        env.config.js //环境配置
        http.config.js //axios配置
        mobile.config.js //移动端适配方案
        router.config.js //动态添加路由
    router //vue路由
        index.js
    store //vuex
        index.js
    utils //封装的工具库
    views //page页面
        Home.vue //主页
    main.js //入口文件
```