# ibase-web

## 代办事项
- [x] 考虑如何把 路由动态插入到主框架中
- [x] vue-cli3
- [x] TypeScript

#### 路由动态插入当前主框架(待实现)

> 路由分为 主界面路由和项目路由，当出现一下情况的时候，需要额外的加载路由进入框架。

1. 项目需要额外的扩展页面，例如
    
    主框架提供了 A/B/C 页面，
    项目框架需要在此基础上增加 /M/N 两个界面
    
2. 项目需要被修改为自定义的界面（慎用）
    
    * 因为一旦重写了项目内界面，路由将会被引导至新界面，原有界面的新功能升级和bug的修复均不会影响到当前重写的界面。
    需要重写者额外自行修复bug和维护功能。
    
    * 你也可以选择复用项目内部模板界面，在项目模板界面的基础上进行适当的样式覆盖，而你也会受益于 模板界面在不断的升级迭代的新功能和bug的维护支持。    



## 项目架构

- [x] vue
- [x] vue-cli3
- [x] TypeScript
- [x] axios
- [x] vuex
- [x] vueStore
- [x] 
- [ ] 编码
- [ ] 测试
- [ ] 交付

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
