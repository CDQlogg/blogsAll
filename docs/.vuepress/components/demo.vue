// 在vue中使用第三方库
// 定义一个vue组件   /docs/.vuepress/componets/demo.vue
<template>
  <div class="demo">
    {{ msg }}
    <el-button >button</el-button>   // 使用了el-button
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  },
  methods:{

  }
}
</script>
