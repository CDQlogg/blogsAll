module.exports = {
    title: "理想三旬",
    description: '   ',
    theme: 'reco',
    base: '/blogs/',
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: 'http://file.cqcdq.top/5WNDCsAGGrGOHFjWsXETyDdEASrrDTBs/logo.JPG',
        },
      ],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        // 引入jquery
      ["script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
      }],
      // 引入鼠标点击脚本
      ["script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/MouseClickEffect.js"
      }]
    ],
    themeConfig: {
      subSidebar:'auto',
      logo: "http://file.cqcdq.top/cxBnnKcx1oUW3tVQgeb65kdAAL4VtGgp/tx.JPG",
      authorAvatar: "http://file.cqcdq.top/cxBnnKcx1oUW3tVQgeb65kdAAL4VtGgp/tx.JPG",
      type: "blog",
      sidebarDepth: 2,
      sidebar:{
        '/fontend/HTML5+CSS3/':[
          {
            title: 'HTML5+CSS3',
            collapsable: false, //是否展开折叠
            children:[
              'HTML5基础','HTML5智能表单','CSS3基础','CSS3运动体系','视频音频'
            ]
          } 
        ],
        '/fontend/JavaScript/':[
          {
            title: 'JavaScript',
            collapsable: false, //是否展开折叠
            children:[
              '变量类型','深拷贝与浅拷贝','原型与原型链','实现class与extends','继承与实现','作用域、执行上下文与闭包','this','apply、call、bind实现','同步与异步','AMD、CMD、CommonJS与ES6模块化','script标签之async与defer','改变数组本身的api','window之location、navigator','ajax与fetch','WebSocket','短轮询、长轮询与WebSocket','长连接与短连接','存储','跨域','setTimeout与setInterval','requestAnimationFrame','事件'
            ]
          } 
        ],
        '/fontend/Vue/':[
          {
            title: 'Vue',
            collapsable: false, //是否展开折叠
            children:[
              '1'
            ]
          } 
        ],
        '/fontend/React/':[
          {
            title: 'React',
            collapsable: false, //是否展开折叠
            children:[
              '1'
            ]
          } 
        ]
      },
      nav: [
        { text: "首页", link: "/" },
        {
          text: "External links",
          items: [
            { text: "掘金", link: "https://juejin.cn/user/1293506657925367", icon: 'reco-juejin' },
            { text: "Github", link: "https://github.com/CDQlogg", icon: 'reco-github' },
          ]
        },
        {
          text: "学习文档",
          items: [
            { text: "leetcode", link: "https://leetcode.cn/" },
            { text: "vue2", link: "https://v2.cn.vuejs.org/" },
            { text: "微信小程序", link: "https://developers.weixin.qq.com/miniprogram/dev/framework/" },
            { text: "React", link: "https://beta.reactjs.org/learn/thinking-in-react" },
            { text: "ES6", link: "https://es6.ruanyifeng.com/" },
            { text: "uniapp", link: "https://uniapp.dcloud.net.cn/" },
            { text: "TypeScript", link: "https://www.tslang.cn/index.html" },
            { text: "cook", link: "https://cook.aiurs.co/" },
          ]
        },
        {
          text: "前端笔记文档",
          items: [
            { text: "HTML5+CSS3", link: "/fontend/HTML5+CSS3/" },
            { text: "JavaScript", link: "/fontend/JavaScript/" },
            { text: "vue", link: "/fontend/Vue/" },
            { text: "React", link: "/fontend/React/" },
          ]
        },
      ],
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: "博客", // 默认文案 “分类”
        },
        tag: {
          location: 6, // 在导航栏菜单中所占的位置，默认4
          text: "Tag", // 默认文案 “标签”
        },
      },
      author: "小陈同学",
    },
    locales: {
        "/": {
          lang: "zh-CN",
        },
      },
    plugins: [
        [
          "sakura",
          {
            num: 20, // 默认数量
            show: true, //  是否显示
            zIndex: -1, // 层级
            img: {
              replace: false, // false 默认图 true 换图 需要填写httpUrl地址
            },
          },
        ],
        [
          'vuepress-plugin-comment',
          {
            choosen: 'valine', 
            // options选项中的所有参数，会传给Valine的配置
            options: {
              el: '#valine-vuepress-comment',
              appId: 'ohIPrzy1mKHozOG22Kb5ibW2-gzGzoHsz',
              appKey: '16EEoZu5n9pgPylsdFMSDNFA'
            }
          }
        ],
        [
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
              audios: [
                {
                  name: "乌梅子酱",
                  artist: "李荣浩",
                  url: "http://file.cqcdq.top/qLhu8WxN0tfzSItJ84xmQBtOYV3N2T76/%E4%B9%8C%E6%A2%85%E5%AD%90%E9%85%B1.mp3",
                  cover:"http://file.cqcdq.top/5XfAobgLjeSkFMGtFowkqrjVDo9cmA6P/lrh.png",
                },
                {
                  name: "강남역 4번 출구",
                  artist: "Plastic / Fallin` Dild",
                  url: "https://assets.smallsunnyfox.com/music/2.mp3",
                  cover: "https://assets.smallsunnyfox.com/music/3.jpg",
                },
              ],
              // 是否默认缩小
              autoShrink: true,
              // 缩小时缩为哪种模式
              shrinkMode: "float",
              // 悬浮窗样式
              floatStyle: { bottom: "20px", "z-index": "999999" },
            },
        ],
        ['go-top'],
        ['demo-container']
     ],
     configureWebpack: {
      node: {
        global: true,
        process: true
      }
    }


}