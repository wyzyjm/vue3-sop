<template>
  <div>
    <div class="recomm mb20 k">
      <div class="rec-head">服务单详细流程</div>
      <div class="rec-con">
        <!-- <service-progress :serviceOrderId="4"></service-progress> -->
        <el-steps direction="vertical" finish-status="success" space="100px" :active="1">
          <el-step title="需求阶段" >
          </el-step>
          <el-step title="生产阶段"></el-step>
          <el-step title="交付阶段">这是一段很长很长很长的描述性文字</el-step>
        </el-steps>
        <div class="con-set">fasdfasd</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import ServiceProgress from './components/service-progress'
export default defineComponent({
  components: { 
    'service-progress': ServiceProgress
  },
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
      display: flex;
      padding: 20px;
      
    }
  }
</style>