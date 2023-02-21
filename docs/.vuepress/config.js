module.exports = {
    title: "理想三旬",
    description: '不积硅步,无以至千里',
    theme: 'reco',
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
      nav: [
        { text: "首页", link: "/" },
        {
          text: "External links",
          items: [
            { text: "掘金", link: "https://juejin.cn/user/1293506657925367" },
            { text: "Github", link: "https://github.com/CDQlogg" }
          ]
        }
      ],
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: "博客", // 默认文案 “分类”
        },
        tag: {
          location: 4, // 在导航栏菜单中所占的位置，默认4
          text: "Tag", // 默认文案 “标签”
        },
      },
      author: "小陈",
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
                  url: "http://m701.music.126.net/20230221203105/b82a756d45ff1c06973923b99ca51394/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/22046760991/6d9b/eb87/f3de/a3cb8fd53c760fb3193b953df03b7531.mp3",
                  cover:"https://p0.itc.cn/q_70/images03/20221123/0a91f888c2d34f3586b02ce00365bf9a.png",
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
     ],
     base: '/blogs/'
  }