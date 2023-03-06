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
          { title: "meta", path: "/html/meta" },
        ],
      }
    ],
    subSidebar: 'auto'
  }
}