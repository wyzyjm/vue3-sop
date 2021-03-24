<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="组织名称" :rules="['required']" prop="orgName" />
      <s-form-item label="组织编码" :rules="['required']" v-if="isEdit" component="s-text" :content="form.orgId" prop="orgId" />
      <s-form-item label="组织编码" v-else :rules="['required']" prop="orgId" />
      <s-form-item label="状态" :rules="['required:number']" prop="status" component="s-group" :data="options" tag="el-radio-group" />
      <s-form-item label="描述" type="textarea" prop="remark" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import _save from '@/api/1316-post-frontapi-service-provider-org-add'
import _update from '@/api/1322-post--frontapi-service-provider-org-update'
import useState from '@/hooks/use-state/disable-state'
import { Message } from 'element-ui'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ data, isEdit }, { emit }) {
    let form = reactive({
      orgName: '',
      orgId: '',
      remark: '',
      status: 1,
    })

    if (isEdit) {
      form.orgName = data.orgName
      form.remark = data.remark
      form.status = data.status
      form.orgId = data.orgId
    }

    const save = (form) => {
      if (isEdit) {
        form.id = data.id
      } else {
        form.parentId = data.orgId
        form.sourceId = data.sourceId
      }

      return (isEdit ? _update(form) : _save(form)).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        emit('updateTable')
      })
    }

    const { options } = useState()

    return {
      save,
      form,
      options,
    }
  },
})
</script>