<template>
  <div>
    <el-tree ref="treeRef" :data="tree.data" show-checkbox node-key="orgId" :default-checked-keys="tree.defaultChecked" :props="tree.defaultProps">
    </el-tree>

    <div class="mt20">
      <s-button @click="$emit('close')">取消</s-button>
      <s-button type="primary" @click="save">确定</s-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import getTree from '@/api/1420-get-common-service-org-list-tree'
import _save from '@/api/1446-post-common-service-role-org-save'
import _getDefalut from '@/api/1442-get-common-service-role-org-list-{roleid}'
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

    getTree({ state: 1 }).then((response) => {
      tree.data = response.data
    })

    if (data && data.length === 1) {
      _getDefalut({ roleId: data[0].id,type:1 }).then((response) => {
        tree.defaultChecked = response.data.map((v) => v.orgId)
      })
    }


    const save = () => {
      const arr = []
      const nodes = treeRef.value.getCheckedNodes(true)

      data.forEach((v) => {
        nodes.forEach((c) => {
          c.type = 1
          c.roleId = v.id
          arr.push(c)
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

    return {
      treeRef,
      tree,
      save,
    }
  },
})
</script>