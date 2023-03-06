module.exports = {
  title: '前端面试文档',
  description: '',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  base: '/fe-interview/',
  theme: 'reco',
  themeConfig: {
    nav: [
        { text: '首页', link: '/' },
        { 
            text: 'oliver的 JavaScript 博客', 
            items: [
                { text: 'Github', link: 'https://github.com/oliver-xie666' },
            ]
        }
    ],
    sidebar: [
      {
          title: '欢迎学习',
          path: '/',
          collapsable: false, // 不折叠
          children: [
              { title: "学前必读", path: "/" }
          ]
      },
      {
        title: "HTML",
        path: '/html/meta',
        collapsable: true, // 不折叠
        children: [
          { title: "meta元素有什么", path: "/html/meta" },
          { title: "<script>元素 中async和defer属性的区别", path: "/html/async_and_defer" },
          { title: "HTML语义化", path: "/html/html_semantization" },
          { title: "a标签的默认事件禁用后，如何实现跳转", path: "/html/a_tag_jump" },
          { title: "网站seo怎么处理", path: "/html/seo" },
        ],
      },
    ],
    subSidebar: 'auto'
  }
}