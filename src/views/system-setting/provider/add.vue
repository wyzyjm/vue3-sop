<template>
  <div class="box">
      <Category @changeStatus="changeStatus" v-if="showType == 0"></Category>
      <company v-if="showType == 2"></company>
      <personal v-if="showType == 1"></personal>
  </div>
</template>
<script>
import Category from './components/category'
import Company from './components/company'
import Personal from './components/personal'
// import { defineComponent } from '@vue/composition-api'
// reactive
export default {
    components: {
        Category,
        Company,
        Personal
    },
    data () {
        return {
            showType: 0, // 默认需要选择
        }
    },
    methods: {
        changeStatus (type) {
            this.showType = type
        }
    }    
}
</script>
<style lang='scss' scoped>
@import url("./style.scss");
</style>