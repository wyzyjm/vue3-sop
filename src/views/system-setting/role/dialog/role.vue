<template>
  <el-dialog :title="dialog.title" :visible.sync="dialog.visible" :width="dialog.width">
    <dialog-content @close="dialog.visible=false" :isEdit="component.isEdit" :data="component.data"></dialog-content>
  </el-dialog>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import dialogContent from '../components/role'

export const component = reactive({
  isEdit: false,
  data: undefined,
})

export const dialog = reactive({
  title: '新增角色',
  visible: false,
  width: '500px',
  close() {
    dialog.visible = false
  },
  openAdd() {
    dialog.title = '新增角色'
    dialog.visible = true
  },
  openEdit(data) {
    component.isEdit = true
    component.data = data
    dialog.title = '编辑角色'
    dialog.visible = true
  },
})

export default defineComponent({
  components: { dialogContent },
  setup() {
    return {
      component,
      dialog,
    }
  },
})
</script>