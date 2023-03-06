---
title:  网站SEO怎么处理
author: oliver
date: '2023-03-06'
---

## 网站SEO怎么处理

- 网站ui设计优化
- meta标签的优化，如keyword，description的优化
- 网站布局的优化，一个舒适的布局，扁平化的网站结构
- 代码结构的优化，语义化标签

### SPA单页面应用SEO解决
关键点：“搜索引擎蜘蛛”或“网络爬虫”程序更擅长对静态资源的抓取和更新

- SSG(预渲染)，用webpack 等构建工具，针对 SPA 应用开发后只有一个 index.html 文件入口问题，用上述预渲染中间件在前端项目构建时预先获取页面数据，生成多个页面，如 about、help 、contact 等页面，优化首屏渲染与部分页面SEO

``` JavaScript
  // 在create-react-app 2.x以下的的版本里,   
// 在config-overrides.js是这样配置预渲染的
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');
module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins = config.plugins.concat([
      new PrerenderSPAPlugin({
        routes: ['/', '/home', 'about'],
        staticDir: path.join(__dirname, 'build'),
      }),
    ]);
  }
  return config;
};

// create-react-app 2.x 以上的ban版本是这样配置的
const { override, fixBabelImports, addLessLoader, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');
// 除了单独定义一个功能函数你还可以使用
// customize-cra提供的addWebpackPlugin来添加插件
const addConfigPlugin = config => {
    // 在这里我们还可以很方便的对config扩展别的配置项
    if(process.env.NODE_ENV === 'production') {
        config.plugins = config.plugins.concat([
            new PrerenderSPAPlugin({
                routes: ['/', '/home', 'about'],
                staticDir: path.join(__dirname, 'build'),
            })
        ]);
    }
    return config
}
// 我的理解override函数的本质还是处理config对象并返回
module.exports =  override(
    addConfigPlugin,
    // 这里是按需加载antd
    fixBabelImports('import', {        
        libraryName: 'antd',        
        libraryDirectory: 'es',       
        style: 'css'
    })
)
```

- SSR(服务端渲染)，服务端渲染就是先向后端服务器请求数据,然后生成完整首屏html返回给浏览器, 服务端渲染返回给客户端的是已经获取了异步数据并执行JavaScript脚本的最终HTML,SSR另一个很大的作用是加速首屏渲染,因为无需等待所有的JavaScript都完成下载并执行,才显示服务端渲染的标记,所以用户会更快地看到完整渲染的页面.

参考链接

- [SPA 的 SEO 方案](https://juejin.cn/post/6857110861371146247)
  