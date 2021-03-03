<template>
  <div>
    <s-form :model="form" label-width="140px" @submit="save">
      <s-form-item label="节点名称" :rules="['required']" prop="nodeName" />
      <s-form-item label="节点编码" :rules="['required']" prop="nodeCode" />
      <s-form-item label="展示顺序" :min="0" component="el-input-number" :rules="['required:number']" prop="orderSort" />
      <s-form-item label="进行中显示状态" :rules="['required']" prop="progressStatusName" />
      <s-form-item label="进行中显示话述" :rules="['required']" prop="progressTerm" />
      <s-form-item label="显示编辑内容" :rules="['required']" prop="showContentCode" />
      <s-form-item label="关联服务环节" :rules="['required:array']" component="s-group" :props="{label:'businessFlowNodeName',value:'businessFlowNodeCode'}" :data="options.businessFlowDefList" prop="businessNodeIdsArray" multiple />
      <!-- <s-form-item label="显示文档" :rules="['required']" prop="showDocumentFileId" /> -->
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import _save from '@/api/1456-post-service-order-cust-service-show-config-{showconfigid}-{stageid}-addnode'
import getBusinessflownodelist from '@/api/1512-get-service-order-cust-service-show-config-getbusinessflownodelist-{businessflowdefid}'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    businessFlowDefId: {
      required: true,
    },
    data: {
      type: Object,
    },
  },
  setup({ data, businessFlowDefId }, { root, emit }) {
    let form = reactive({
      nodeName: '',
      nodeCode: '',
      orderSort: '',
      progressStatusName: '',
      progressTerm: '',
      showContentCode: '',
      showDocumentFileId: '',
      businessNodeIdsArray:[]
    })

    const options = reactive({
      businessFlowDefList: [],
    })

    getBusinessflownodelist({ businessFlowDefId }).then((response) => {
      options.businessFlowDefList = response.data
    })


    const save = (form) => {
      form.showConfigId = data.custShowConfigId
      form.stageId = data.id
      return _save(form).then(({ msg }) => {
        root.$store.commit('table/update', {
          _uid: data.id,
        })

        emit('close')

        console.log(msg)
      })
    }

    return {
      options,
      save,
      form,
    }
  },
})
</script>