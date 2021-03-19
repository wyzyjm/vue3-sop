<template>
  <div>
    <div class="recomm mb20 k">
      <div class="rec-head">服务单详细流程</div>
      <div class="rec-con">

        <div class="flow-head">
          <h4 class="flow-head-h">服务单号：{{detail.orderCode || '--'}}</h4>
          <div class="flow-head-info">
            <span>{{detail.productName}}</span>
            <span>服务进度：{{detail.currentProgress || '--'}}</span>
            <span>更新时间：{{detail.updateTime || '--'}}</span>
          </div>
        </div>
        
        <div class="flow-setp">
          <div :class="{'flow-setp-item':true, 'flow-setp-active': index < active}" v-for="(item, index) of list" :key="index">
            <div class="setp-left">
              <div class="l-step__icon">{{index+1}}</div>
              <div class="l-step__line" v-if="list.length != index+1"></div>
            </div>
            <div class="setp-right">
              <div class="r-step__head">
                <span>{{item.state}}</span>
                <b>{{item.name}}</b>
              </div>
              <div class="r-step__content">
                <template v-if="index < active">
                  <user-flow :list="item.list"></user-flow>
                </template>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import UserProgress from './components/user-flow'
import getDetail from '@/api/2147-get-service-order-interface-api-process_detail-{custid}-{ordercode}'
export default defineComponent({
  components: {
    'user-flow': UserProgress
  },
  setup(props, { root }) {
    let translateData = reactive({
        active: 1,
        detail: {},
        list: [
          {
            name: '需求阶段',
            state: '进行中',
            list: [
              {
                stateLine: 1,
                completeTime: "2021-03-09 20:03:40",
                executor: "张三",
                nodeId: 63,
                nodeName: "创建服务单"
              },
              {
                stateLine: 2,
                visible: true,
                completeTime: "2021-03-10 20:03:40",
                executor: "李四",
                nodeId: 80,
                nodeName: "服务单已分派"
              },
              {
                stateLine: 0,
                executor: "张婷婷",
                nodeId: 66,
                nodeName: "提交需求"
              },
              {
                stateLine: 0,
                executor: "王二",
                nodeId: 65,
                nodeName: "需求确认"
              }
            ]
          },
          {
            name: '生产阶段',
            state: '未完成',
          },
          {
            name: '交付阶段',
            state: '未完成',
          }
        ]
    })

    let form = reactive({
      name: ''
    })

    getDetail({ custId: '1446113', orderCode: '2021031109166'})
    .then(({data}) => {
      translateData.detail = data || {};
      console.log("res", data)
    })

    const search = () => {
      console.log("search")
    }

    return {
      form,
      search,
      ...toRefs(translateData)
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
  .recomm {
    background: $sop-color-white;
    margin-bottom: 30px;
    .rec-head {
      text-indent: 20px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #EBEBEB;
    }
    .rec-con {
      padding: 20px;
    }
  }

  .flow-head {
    padding: 20px 0;
    &-h{
      margin: 0;
      color: $sop-color-theme;
    }
    &-info {
      font-size: 14px;
      padding: 15px 0;
      color: $sop-color-6;
      span {
        margin-right: 20px;
      }
    }
  }

  .flow-setp {
    .flow-setp-item {
      min-height: 150px;
      display: flex;
      color: $sop-color-9;
      padding-bottom: 4px;
      .setp-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 28px;
        .l-step__icon {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 28px;
          height: 28px;
          min-height: 28px;
          font-size: 14px;
          box-sizing: border-box;
          background: $sop-color-d9;
          border-radius: 50%;
          color: $sop-color-white;
          margin-bottom: 4px;
        }
        .l-step__line {
          width: 2px;
          height: 100%;
          background-color: $sop-color-d9;
        }
      }
      .setp-right {
        width: 100%;
        padding: 0 20px 20px 10px;
        .r-step__head {
          line-height: 28px;
          font-size: 12px;
          span {
            margin-right: 15px;
          }
          b {
            font-size: 14px;
          }
        }
        .r-step__content {
          color: $sop-color-6;
          padding: 30px 40px;
        }
      }
      &.flow-setp-active {
        color: $sop-color-6;
        .l-step__icon {
          background: $sop-color-theme;
        }
        .l-step__line {
          background-color: $sop-color-theme;
        }
      }
    }
  }
</style>