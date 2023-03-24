module.exports = {
  theme: 'reco',
  title: '前端面试文档',
  description: '',
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  },
  base: '/fe-interview/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img.zoom-custom-imgs',
      options: {
        margin: 16
      }
    },
    '@vuepress/plugin-nprogress': true,
    // '@vuepress-reco/vuepress-plugin-bgm-player': {
    //   audios: [
    //     // 本地文件示例
    //     {
    //       name: '送别',
    //       artist: '朴树',
    //       url: '/bgm/url/送别.mp3',

    //     },
    //   ],
    //   poition:{ 
    //     left: '10px',
    //     bottom: '10px',
    //     'z-index': '999999'
    //   },
    // },
    '@vuepress-reco/vuepress-plugin-screenfull': {},
    '@vuepress-reco/vuepress-plugin-extract-code': {},
    'vuepress-plugin-flowchart': {},
  },
  themeConfig: {
    author: 'oliver-xie666',
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
    },
    nav: [

      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '标签', link: '/tag/', icon: 'reco-tag' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'oliver的 JavaScript 博客',
        items: [
          { text: 'Github', link: 'https://github.com/oliver-xie666', icon: 'reco-github' },
        ]
      }
    ],
    sidebar: [
      {
        title: "HTML",
        path: '/html/meta',
        collapsable: false, // 不折叠
        children: [
          { title: "meta元素有什么", path: "/html/meta" },
          { title: "<script>元素 中async和defer属性的区别", path: "/html/async_and_defer" },
          { title: "HTML语义化", path: "/html/html_semantization" },
          { title: "a标签的默认事件禁用后，如何实现跳转", path: "/html/a_tag_jump" },
          { title: "网站seo怎么处理", path: "/html/seo" },
        ],
      },
      {
        title: 'JavaScript',
        path: '/javaScript/equal_and_congruent',
        collapsable: true,
        children: [
          { title: "相等和全等的区别", path: "javaScript/equal_and_congruent" },
          { title: "AJAX的原理及实现", path: "javaScript/ajax" },
          { title: "数组操作", path: "javaScript/array_cof" },
        ],
      },
      // {
      //   title: '手写JS',
      //   path: '/handwritejs/ajax',
      //   collapsable: true, 
      //   children: [
      //     { title: "手写ajax", path: "/handwritejs/ajax" },
      //     { title: "深浅拷贝", path: "/handwritejs/deep_clone" },
      //   ],
      // },     

    ],
    subSidebar: 'auto'
  }
}