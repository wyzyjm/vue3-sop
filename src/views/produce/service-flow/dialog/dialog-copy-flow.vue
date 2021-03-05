<template>
  <div>
    <s-form :model="form" label-width="140px" @submit="save" class="flow-form">
      <s-form-item label="选择服务流程" :rules="['required:number']" prop="id">
        <el-select v-model="form.id" placeholder="请选择流程" class="flow-select">
            <el-option
              v-for="item in list"
              :key="item.id"
              :label="item.businessFlowName"
              :value="item.id"
            ></el-option>
        </el-select>
      </s-form-item>
      <!-- <s-form-item label="版本" prop="version" /> -->
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Message } from 'element-ui'
import flowAllList from '@/api/1670-get-service-order-sevice-business-flow-all-list'
import copyBusinessFlow from '@/api/1557-post-service-order-sevice-business-flow-copy-{id}'
export default defineComponent({
  setup(props, { emit, root }) {
    const copyData = reactive({
      list: []
    })

    let form = reactive({
      id: '',
      version: ''
    })

    flowAllList().then(({ data }) => {
      copyData.list = data || [];
    })

    const save = () => {
      copyBusinessFlow(form).then(
        () => {
          Message({
            type: 'success',
            message: '复制成功！',
          })
          emit('close')
          root.$store.commit('table/update')
        }
      )
    }

    return {
      ...toRefs(copyData),
      save,
      form
    }
  },
})
</script>
<style lang="scss" scoped>
  .flow-select {
    width: 100%;
  }
  .flow-form {
      display: flex;
      flex-direction: column;
      .el-form-item {
        width: 400px;
      }
    }
</style>