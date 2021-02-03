<template>
  <el-dialog :title="dialog.title" :visible.sync="dialog.visible" :width="dialog.width">
    <dialog-content @close="dialog.visible=false"></dialog-content>
  </el-dialog>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import dialogContent from '../components/role-group'

export const dialog = reactive({
  title: '新增角色组',
  visible: false,
  width: '500px',
  close() {
    dialog.visible = false
  },
  openAdd() {
    dialog.visible = true
  },
})

export default defineComponent({
  components: { dialogContent },
  setup() {
    return {
      dialog,
    }
  },
})
</script>