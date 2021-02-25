<template>
  <div>
    网站推荐
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
export default defineComponent({
  setup(props, { root }) {
    let custData = reactive({
        activeWeb: 'first',
        activePro: 'first'
    })

    let form = reactive({
      name: ''
    })

    const search = (form) => {
      console.log("search")
    }

    return {
      ...toRefs(custData),
      form,
      search
    }
  },
})
</script>
<style lang="scss" scoped>
  .flow-k {
    background: $sop-color-white;
    border-radius: 6px;
    border: 1px solid #EBEBEB;
  }
  .query-head {
    display: flex;
    align-items: center;
    padding: 20px;
    p {
        padding: 0 20px;
    }
  }
  .query-info {
      padding: 20px;
      .info-cust {
          .info-cust-item {
              font-size: 12px;
              margin-bottom: 20px;
              color: $sop-color-9;
              b {
                  font-size: 14px;
                  color: $sop-color-0;
              }
          }
      }
  }
</style>