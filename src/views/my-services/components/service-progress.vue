<template>
  <div class="service-progress">
    <div class="item" :class="{finished:item.nodeStatus>1,last:item.isLast,first:i===0}" v-for="(item,i) in list" :key="i">
      <span v-if="!item.clone">
        <el-popover v-if="item.nodeStatus>1" placement="bottom" width="200" trigger="hover">
          <span v-if="item.nodeStatus>1" class="executor mt10">{{item.executor}}</span><br />
          <span v-if="item.nodeStatus>1" class="completeTime mt5">{{item.completeTime}}</span>
          <span class="dot" slot="reference" />
        </el-popover>
        <span v-else class="dot" />
        <span class="node-detail">
          <span class="node-name">{{item.nodeName}}</span>
        </span>
      </span>

      <el-popover v-else placement="top" :title="item.statusName" width="200" trigger="manual" :content="item.takeupTime?`${item.takeupTime}`:''" :value="item.nodeId===actived">
        <span slot="reference" />
      </el-popover>
    </div>
  </div>

</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'
import request from '@/api/1823-get-service-order-sevice-order-info-get-service-order-progress-{serviceorderid}'
import Vue from 'vue'
export default defineComponent({
  props: {
    serviceOrderId: {
      required: true,
    },
  },
  setup({ serviceOrderId }) {
    const actived = ref('')
    const init = (serviceOrderId) => {
      const list = ref([])
      request({ serviceOrderId }).then((response) => {
        response.data.forEach((v, i) => {
          if (i === response.data.length - 1) {
            list.value.push({ isLast: true, ...v })
          } else {
            list.value.push(v)
            list.value.push({
              clone: true,
              ...response.data[i + 1],
            })
          }
        })
        Vue.nextTick(() => {
          list.value.forEach((v) => {
            if (v.nodeStatus === 1) {
              actived.value = v.nodeId
            }
          })
        })
      })
      return list
    }

    return { list: init(serviceOrderId), actived }
  },
})
</script>
<style lang="scss" scoped>
.service-progress {
  display: flex;
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
    &.last {
      width: 12px;
      border: none;
      .node-detail {
        transform: translate(calc(-100% + 12px));
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
      .node-name {
        font-size: 12px;
      }
      color: #666666;
      display: inline-block;
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
}
</style>
