<template>
  <div class="box">
      <!-- <Category></Category> -->
      <company></company>
      <!-- <personal></personal> -->
  </div>
</template>
<script>
import Category from './components/category'
import Company from './components/company'
import Personal from './components/personal'
import { defineComponent } from '@vue/composition-api'
// reactive
export default 
    defineComponent({
        components: {
            Category,
            Company,
            Personal
        },
        setup () {
            // const Category = 
        }
    })
</script>
<style lang='scss' scoped>
@import url("./style.scss");
</style>