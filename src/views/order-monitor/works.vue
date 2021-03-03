<template>
  <div>
    <div class="work mb20 k">
      <div class="work-head">我的工作台</div>
      <div class="work-title">本月生产概况</div>
      <div class="work-con">
        <div class="work-con-item item-1">
          <b>200</b>
          <p>本月新单</p>
        </div>
        <div class="work-con-item item-2">
          <b>150</b>
          <p>未派单</p>
        </div>
        <div class="work-con-item item-3">
          <b>65%</b>
          <p>生产中</p>
        </div>
        <div class="work-con-item item-4">
          <b>10</b>
          <p>已超期</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
export default defineComponent({
  setup(props, { root }) {
    let workData = reactive({
        activeWeb: 'first',
        activePro: 'first'
    })

    return {
      ...toRefs(workData)
    }
  },
})
</script>
<style lang="scss" scoped>
  .k {
    background: $sop-color-white;
    border-radius: 6px;
    border: 1px solid #EBEBEB;
  }
  .work {
    background: $sop-color-white;
    margin-bottom: 30px;
    .work-title {
      padding: 20px 20px 0 20px;
      color: $sop-color-3;
    }
    .work-head {
      text-indent: 20px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #EBEBEB;
    }
    .work-query {
      display: flex;
      align-items: center;
      padding: 20px;
      p {
          padding: 0 20px;
      }
    }
    .work-con {
      display: flex;
      padding: 20px;
      .work-con-item {
        width: 200px;
        height: 124px;
        border: 1px solid #EBEBEB;
        border-radius: 6px;
        margin-right: 30px;
        color: #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 30px;
        b {
          font-size: 32px;
          margin-bottom: 8px;
        }
        p {
          margin: 0;
          font-size: 14px;
        }
      }
      .item-1 {
        background: #18B398;
      }
      .item-2 {
        background: #F89A6C;
      }
      .item-3 {
        background: #5780FA;
      }
      .item-4 {
        background: #f34235;
        margin: 0;
      }
    }
  }
</style>