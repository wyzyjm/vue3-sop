<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path" :to="item.path">{{item.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup(props, { root }) {
    const route = root.$route
    // 可有传入data 改变
    const breadcrumb =
      props.data ||
      route.matched.map((v) => {
        let path = v.path
        if (v.path === '' && v.meta.title === '首页') {
          path = '/'
        }
        if (v.path === route.path) {
          path = ''
        }
        return {
          path,
          title: v.meta.title || '-',
        }
      })
    return { breadcrumb }
  },
})
</script>