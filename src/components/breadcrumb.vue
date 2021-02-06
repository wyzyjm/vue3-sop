<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path" :to="item.path">{{item.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
/***
 * 自动识别的情况下，会读取路由下的mate.title信息,不存在的会过滤掉
 */

export default {
  data() {
    return {}
  },
  computed: {
    breadcrumb() {
      const route = this.$route
      const matched = route.matched.filter((v) => v.meta.title)
      // 可有传入data 改变
      const breadcrumb = matched.map((v, i) => {
        let path = v.path
        if (v.path === '' && v.meta.title === '首页') {
          path = '/'
        }
        if (i === matched.length - 1) {
          path = ''
        }
        return {
          path,
          title: v.meta.title || '-',
        }
      })
      return breadcrumb
    },
  },
}
</script>