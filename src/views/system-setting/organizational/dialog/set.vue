<template>
  <div>
    <el-tree ref="treeRef" :data="tree.data" show-checkbox node-key="id" :default-checked-keys="tree.defaultChecked" :props="tree.defaultProps">
    </el-tree>

    <div class="mt20">
      <s-button @click="$emit('close')">取消</s-button>
      <s-button type="primary" @click="save">确定</s-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import getTree from '@/api/1326-get-frontapi-service-provider-org-get-org-partner'
import _save from '@/api/1328-post-frontapi-service-provider-org-add-org-partner'
import { Message } from 'element-ui'

export default defineComponent({
  props: {
    data: {
      required: true,
    },
  },
  setup({ data }, { emit }) {
    const tree = reactive({
      data: [],
      defaultChecked: [],
      defaultProps: {
        children: 'children',
        label: 'orgName',
      },
    })

    const treeRef = ref(null)

    getTree({ providerId: data.sourceId, id: data.id }).then((response) => {
      tree.defaultChecked = response.data.partnerIdList
      tree.data = response.data.providerOrgDTOList
    })

    const save = () => {
      return _save({
        sourceId: data.id,
        partnerIds: treeRef.value.getCheckedKeys(true),
      }).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        emit('updateTable')
      })
    }

    return {
      treeRef,
      tree,
      save,
    }
  },
})
</script>