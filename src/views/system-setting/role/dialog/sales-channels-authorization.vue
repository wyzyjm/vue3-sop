<template>
  <div>
    <el-tree ref="treeRef" :data="tree.data" show-checkbox node-key="id" :default-checked-keys="tree.defaultChecked" :props="tree.defaultProps" />

    <div class="mt20">
      <s-button @click="$emit('close')">取消</s-button>
      <s-button type="primary" @click="save">确定</s-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import _save from '@/api/1446-post-common-service-role-org-save'
import getTree from '@/api/1424-get-production-config-sales-channel-treelist'

import useOptions from '../hooks/use-options'
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
        label: 'name',
      },
    })

    const treeRef = ref(null)

    getTree().then((response) => {
      tree.data = response.data
    })

    const save = () => {
      const checkedKeys = treeRef.value.getCheckedNodes(true)
      const arr = []

      data.forEach((v) => {
        checkedKeys.forEach((c) => {
          arr.push({
            orgId: c.code,
            orgType: '',
            sourceId: 0,
            sourceType: 1,
            type: 2,
            roleId: v.id,
          })
        })
      })


      return _save(arr).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        emit('updateTable')
      })
    }

    const options = useOptions()

    const cos = (p) => {
      console.log(p)
    }

    return {
      treeRef,
      tree,
      save,
      options,
      cos,
    }
  },
})
</script>