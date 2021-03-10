<template>
  <div>
    <div class="work mb20 k">
      <div class="work-head">我的工作台</div>
      <div class="work-title">本月生产概况</div>
      <div class="work-con">
        <div class="work-con-item item-1">
          <div class="con-icon">
            <i class="iconfont">&#xe7ab;</i>
          </div>
          <div class="con-value">
            <b>200</b>
            <p>
              本月新单
            </p>
          </div>
          <div class="con-circular"></div>
        </div>
        <div class="work-con-item item-2">
          <div class="con-icon">
            <i class="iconfont">&#xe767;</i>
          </div>
          <div class="con-value">
            <b>150</b>
            <p>
              未派单
            </p>
          </div>
          <div class="con-circular"></div>
        </div>
        <div class="work-con-item item-3">
          <div class="con-icon">
            <i class="iconfont">&#xe63b;</i>
          </div>
          <div class="con-value">
            <b>65%</b>
            <p>
              生产中
            </p>
          </div>
          <div class="con-circular"></div>
        </div>
        <div class="work-con-item item-4">
          <div class="con-icon">
            <i class="iconfont">&#xe647;</i>
          </div>
          <div class="con-value">
            <b>10</b>
            <p>
              已超期
            </p>
          </div>
          <div class="con-circular"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
// import aaaa from '@/api/1562'
// import aaaa from '@/api/1562'
export default defineComponent({
  setup(props, { root }) {
      console.log(root)
    let workData = reactive({})

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
        align-items: center;
        flex-direction: row;
        padding: 0 20px;
        position: relative;
        overflow: hidden;
        .con-circular{
          background: $sop-color-white;
          width: 100px;
          height: 100px;
          position: absolute;
          right: -28px;
          top: -50px;
          opacity: .2;
          border-radius: 50%;
        }
        .con-icon {
          width: 50px !important;
          height: 50px;
          background: $sop-color-white;
          border-radius: 50%;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          .iconfont {
            font-size: 30px;
          }
        }
        .con-value {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
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
        .con-icon {
          color: #18B398;
        }
      }
      .item-2 {
        background: #F89A6C;
        .con-icon {
          color: #F89A6C;
        }
      }
      .item-3 {
        background: #5780FA;
        .con-icon {
          color: #5780FA;
        }
      }
      .item-4 {
        background: #f34235;
        margin: 0;
        .con-icon {
          color: #f34235;
        }
      }
    }
  }
</style>