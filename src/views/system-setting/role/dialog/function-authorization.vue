<template>
  <div class="uNxyjKHEvndYpoDh">

    <el-tree ref="treeRef" :data="tree.data" show-checkbox node-key="resourceCode" :default-checked-keys="tree.defaultChecked" :props="tree.defaultProps">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <s-group class="ml10" size="mini" v-model="data.permissionCode" v-if="node.isLeaf" :data="options.dropList"></s-group>
      </span>
    </el-tree>
    <div class="mt20">
      批量修改选中权限权限：<s-group class="ml10" v-model="globalPermissionCode" @change="modifyPermissionCode" :data="options.dropList"></s-group>
    </div>
    <div class="mt20">
      <s-button @click="$emit('close')">取消</s-button>
      <s-button type="primary" @click="save">确定</s-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import getTree from '@/api/1392-get-common-service-resource-list-tree'
import _save from '@/api/1438-post-common-service-role-resource-save'
import _getDefalut from '@/api/1426-get-common-service-role-resource-list-{roleid}'
import Vue from 'vue'
import useOptions from '../hooks/use-options'
import { Message } from 'element-ui'

function setCheckedFild(data) {
  data.forEach((v) => {
    v.permissionCode = 0
    if (v.children && v.children.length) {
      setCheckedFild(v.children)
    }
  })
}

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
        label: 'resourceName',
      },
    })

    const treeRef = ref(null)
    const globalPermissionCode=ref(0)

    const modifyPermissionCode = (val) => {
      const checked = treeRef.value.getCheckedNodes()
      if (checked && checked.length) {
        checked.forEach((v) => {
          v.permissionCode = val
        })
      }
    }

    const setpermissionCode = (tree, arr) => {
      tree.forEach((v) => {
        let c = arr.find((c) => c.resourceCode === v.resourceCode)

        if (c) {
          v.permissionCode = c.permissionCode
        }

        if (v.children && v.children.length) {
          setpermissionCode(v.children, arr)
        }
      })
    }

    getTree().then((response) => {
      setCheckedFild(response.data)
      tree.data = response.data
      if (data && data.length === 1) {
        _getDefalut({ roleId: data[0].id }).then((response) => {
          Vue.nextTick(() => {
            response.data.forEach((v) => {
              treeRef.value.setChecked(v.resourceCode, true)
            })
          })
          setpermissionCode(tree.data, response.data)
        })
      }
    })

    const save = () => {
      const checkedKeys = treeRef.value.getCheckedNodes(false, true)

      const arr = []

      if (checkedKeys.length === 0) {
        Message({
          type: 'error',
          message: '没有任何选中项！',
        })
        return
      }

      data.forEach((v) => {
        checkedKeys.forEach((c) => {
          arr.push({
            permissionCode: c.permissionCode,
            resourceCode: c.resourceCode,
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

    return {
      treeRef,
      tree,
      save,
      options,
      globalPermissionCode,
      modifyPermissionCode,
    }
  },
})
</script>
<style lang="scss" >
// 角色管理-功能授权
.uNxyjKHEvndYpoDh {
  .el-tree-node {
    padding: 2px 0;
  }
}
</style>