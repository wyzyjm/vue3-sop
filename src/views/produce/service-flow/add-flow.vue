<template>
  <div>
    新增流程
    <div class="path-flow">
      <flow-path :data="data"/>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import flowpath from "../components/flow-path";
export default defineComponent({
  components: { 
    'flow-path':flowpath
  },
  setup(props, { root }) {
    const flowData = reactive({
      data: [
        {
          name: '开始事件',
          type: 'start',
          relation: '',
          produceCycle: 1,
          earlyCycle: 2
        },
        {
          name: '用户任务',
          type: 'flow',
          relation: '',
          produceCycle: 2,
          earlyCycle: 4
        },
        {
          name: '结束事件',
          type: 'end',
          relation: '',
          produceCycle: 1,
          earlyCycle: 3
        }
      ],
      options: [
        {
          value: 1,
          label: '停用'
        }, {
          value: 2,
          label: '启用'
        }
      ]
    })

    const form = reactive({
      orderCode: '',
      state: 1,
      relation: ''
    })

    function addFlow() {
      root.$router.push({
        path: "/",
        query: {}
      });
    }

    return {
      ...toRefs(flowData),
      form,
      addFlow
    }
  },
})
</script>
<style lang="scss" scoped>
.path-flow {
  width: 100%;
  height: 380px;
  overflow-x: auto;
}
</style>