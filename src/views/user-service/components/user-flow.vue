<template>
  <div>
    <div class="service-progress">
      <div
        :class="{
          'wrap-item': true,
          last: list.length == i+1
        }"
        v-for="(item,i) in list" 
        :key="i">
        <div
          :class="{
            item: true,
            finished: (item.nodeStatus == 1|| item.nodeStatus == 3),
            first: i===0
          }">
            <el-popover 
              placement="top" 
              :title="item.statusName" 
              width="200" 
              trigger="hover" 
              :content="item.nodeName?`${item.nodeName}`:''">
              <span class="dot" slot="reference" />
            </el-popover>

            <span class="node-detail">
              <span class="node-name">{{item.nodeName}}</span>
              <span class="executor mt10">{{item.nodeCode}}</span>
              <span class="completeTime mt5">{{item.nodeEndTime}}</span>
            </span>
        </div>
        <template v-if="list.length != i+1">
          <div class="tip-con" v-if="item.nodeStatus == 1">
            <div class="tip-title">{{list[i+1].nodeName}}</div>
          </div>
          <div
            :class="{
              item: true,
              finished: item.nodeStatus == 3
            }">
          </div>
        </template>
      </div>
    </div>
    <div class="service-desc">
      <p class="desc-active">以下为设计师与您沟通后的服务需求，请您确认</p>
      <p>如有任何疑问，请电话或邮件联系您的专属设计师</p>
      <s-button type="primary">确认需求</s-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
// import request from '@/api/1100'
export default defineComponent({
  props: {
    activeId: {
      type: Number,
      required: 0
    },
    list: {
      type: Array,
      required: []
    },
  },
  setup({ list }) {
    let progressData = reactive({
      visible: true
    })

    return {
      ...toRefs(progressData)
    }
  }
})
</script>
<style lang="scss" scoped>
  .service-progress {
    display: flex;
    .wrap-item {
      display: flex;
      flex: 1;
      &.last {
        flex: none;
        width: 12px;
        .item {
          border: none;
          .node-detail {
            width: 100px;
            text-align: center;
          }
        }
      }
      .item {
        flex: 1;
        border-top: 2px solid #d9d9d9;
        position: relative;
        &.finished {
          border-color: #18b398;
        }
        &.first,
        &.last {
          .dot {
            left: 0;
          }
          .node-detail {
            transform: none;
          }
        }
        .dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: #18b398;
          left: -6px;
          top: -6px;
        }
        .node-detail {
          color: #666666;
          display:inline-block;
          margin-top: 20px;
          transform: translate(-50%);
          .executor,
          .completeTime {
            font-size: 12px;
            color: #999;
            display: block;
          }
        }
      }
      .tip-popover {
        position:relative;
      }
      .tip-con {
        position: relative;
        width: 0px;
        height: 0px;
        .tip-title {
          position: absolute;
          left: -66px;
          top: -66px;
          background: $sop-color-white;
          width: 100px;
          border: 1px solid #EBEEF5;
          border-radius: 4px;
          z-index: 200;
          line-height: 1.4;
          text-align: justify;
          font-size: 14px;
          box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
          word-break: break-all;
          padding: 18px 20px;
        }
      }
    }
  }
  .service-desc {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    p {
      margin: 0;
      padding-bottom: 6px;
    }
    .desc-active {
      color: $sop-color-theme;
      font-weight: bold;
    }
  }
</style>
