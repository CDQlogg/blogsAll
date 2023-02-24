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
          href: '/logo.jpg',
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
      logo: "/tx.jpg",
      authorAvatar: "/tx.jpg",
      type: "blog",
      sidebarDepth: 2,
      sidebar:{
        '/fontend/JavaScript/':[
          {
            title: 'JavaScript',
            collapsable: false, //是否展开折叠
            children:[
              '1'
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
        [
          "vuepress-plugin-live2d",
          {
            "modelName": ['z16','Epsilon2.1','izumi','koharu','shizuku','miku', 'hijiki', 'tororo'],
            "mobileShow": false,
            'position':'left'
          }
        ],
        ['go-top'],
     ],



}