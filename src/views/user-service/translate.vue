<template>
  <div>
    <div class="recomm mb20 k">
      <div class="rec-head">服务单详细流程</div>
      <div class="rec-con">
        <el-steps direction="vertical" :active="1">
          <el-step title="步骤 1">
            <div>霜期dddddddddddd</div>
          </el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3">这是一段很长很长很长的描述性文字</el-step>
        </el-steps>
      </div>
    </div>
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