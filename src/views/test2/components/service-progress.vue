<template>
  <div class="service-progress">
    <div class="item" :class="{finished:item.nodeStatus>0&&list[i+1]&&list[i+1].nodeStatus>0,last:item.isLast,first:i===0}" v-for="(item,i) in list" :key="i">
      <span v-if="!item.clone">
        <el-popover placement="top" :title="item.statusName" width="200" trigger="hover" :content="item.takeupTime?`耗时:${item.takeupTime}`:''">
          <span class="dot" slot="reference" />
        </el-popover>

        <span class="node-detail">
          <span class="node-name">{{item.nodeName}}</span>
          <span v-if="item.nodeStatus>0" class="executor mt10">{{item.executor}}</span>
          <span v-if="item.nodeStatus>0" class="completeTime">{{item.completeTime}}</span>
        </span>
      </span>

      <el-popover v-else placement="top" :title="item.statusName" width="200" trigger="manual" :content="item.takeupTime?`耗时:${item.takeupTime}`:''" :value="item.nodeId===actived">
        <span slot="reference" />
      </el-popover>
      <!-- {{item}} -->
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
            list.value.push({ clone: true, visible: false, ...v })
          }
        })
        Vue.nextTick(() => {
          list.value.forEach((v) => {
            if (
              Object.hasOwnProperty.call(v, 'visible') &&
              v.nodeStatus === 1
            ) {
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
  height: 300px;
  padding-top: 100px;
  .item {
    flex: 1;
    height: 2px;
    background-color: #d9d9d9;
    position: relative;
    &.finished {
      background-color: #18b398;
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
      flex: none;
      width: 12px;
    }
    .dot {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 6px;
      background: #18b398;
      left: -6px;
      top: -5px;
    }
    .node-detail {
      color: #666666;
      position: absolute;
      left: 0px;
      top: 20px;
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
