<template>
  <div>
    <div class="service-progress">
      <div
        :class="{
          'wrap-item': true,
          first: i===0
        }"
        v-for="(item,i) in list" 
        :key="i">
        <div
          :class="{
            item: true,
            finished: (item.nodeStatus == 1|| item.nodeStatus == 3)
          }">
        </div>
        <div class="tip-con" v-if="item.nodeStatus == 1">
          <div class="tip-title">{{item.nodeName}}</div>
        </div>
        <div
          :class="{
            item: true,
            finished: item.nodeStatus == 3,
            last: list.length == i+1
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
      </div>
    </div>
    <div class="service-desc">
      <p class="desc-active">{{currData.nodeShowTerm}}</p>
      <p>如有任何疑问，请电话或邮件联系您的专属设计师</p>
      {{JSON.stringify(currData)}}
      <div class="desc-btn" v-if="currData.buttonList&&currData.buttonList.length">
        <s-button 
          type="primary" 
          :disabled="o.buttonDisabled"
          v-for="(o, i) in buttonList" 
          :key="i">
            {{o.buttonName}}
        </s-button>
      </div>
      <div class="desc-explain">
        <el-row type="flex">
          <el-col :span="4">需求说明 ：</el-col>
          <el-col :span="20">{{demandData.demandContent}}</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import getDemand from '@/api/2315-get-service-order-interface-api-demand'
// import request from '@/api/1100'
// import request from '@/api/1100'
// import request from '@/api/1100'
export default defineComponent({
  props: {
    orderCode: {
      type: String,
      required: ''
    },
    list: {
      type: Array,
      required: []
    },
  },
  setup({ orderCode, list }) {
    let progressData = reactive({
      currData: {},
      demandData: {}
    })
    
    console.log("list", list)

    list.forEach(element => {
      if (element.nodeStatus == 1) {
        progressData.currData = element;
      }
    });

    getDemand({orderCode}).then(({ data }) => {
      progressData.demandData = data || {};
      console.log("res", data)
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
      &.first {
        flex: none;
        width: 12px;
        .item {
          border: none;
          .node-detail {
            width: 100px;
            text-align: center;
            transform: translate(-30%);
          }
        }
        .dot {
          left: 0;
        }
      }
      .item {
        flex: 1;
        border-top: 2px solid #d9d9d9;
        position: relative;
        &.finished {
          border-color: #18b398;
        }
        .dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: #18b398;
          right: -6px;
          top: -6px;
          z-index: 99;
        }
        .node-detail {
          color: #666666;
          display:inline-block;
          margin-top: 20px;
          transform: translate(50%);
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
      padding-bottom: 10px;
    }
    .desc-active {
      color: $sop-color-theme;
      font-weight: bold;
    }
    .desc-btn {
      margin-bottom: 10px;
    }
    .desc-explain {
      width: 100%;
      margin-bottom: 10px;
    }
  }
</style>
