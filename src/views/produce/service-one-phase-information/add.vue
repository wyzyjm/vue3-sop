<template>
  <div>
    <s-form :model="form" label-width="150px" @submit="save">
      <h2>服务单信息</h2>

      <s-form-item label="服务单呈现名称" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="服务单名称编码" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="版本" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="流程名称" :rules="['required']" prop="roleGroupName" />
      <s-form-item label="流程版本" :rules="['required']" prop="roleGroupName" />
      <h2>阶段信息</h2>
      <div v-for="(item,i) in form.phases" :key="i">
        <div>
          <s-button type="primary" @click="add(i)">添加</s-button>
          <s-button type="primary" @click="del(i)">删除</s-button>
        </div>
        <s-form-item label="阶段名称" :rules="['required']" prop="roleGroupName" />
        <s-form-item label="阶段编码" :rules="['required']" prop="roleGroupName" />
        <s-form-item label="展示顺序" :rules="['required']" prop="roleGroupName" />
      </div>

      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import roleGroupSave from '@/api/1368-post-role-group-save'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ isEdit, data }) {
    let form = reactive({
      roleGroupName: '',
      remark: '',
      phases: [{ namea: 1 }],
    })

    const phase = reactive({
      form: '111',
    })

    if (isEdit) {
      form = { ...form, ...data }
    }

    const add = (i) => {
      console.log(112, i, form.phases)
      form.phases.splice(i + 1, 0, { ...phase })
    }
    const del = (i) => {
      form.phases.splice(i, 1)
    }

    const save = (form) => {
      return roleGroupSave(form).then(({ msg }) => {
        console.log(msg)
      })
    }

    return {
      add,
      del,
      save,
      form,
    }
  },
})
</script>