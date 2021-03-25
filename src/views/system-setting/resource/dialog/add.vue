<template>
  <div>
    <s-form :model="form" label-width="110px" @submit="save">
      <s-form-item label="名称" :rules="['required']" prop="resourceName" />
      <s-form-item label="编码" :rules="['required']" v-if="isEdit" component="s-text" :content="form.resourceCode" prop="resourceCode" />
      <s-form-item label="编码" v-else :rules="['required']" prop="resourceCode" />
      <s-form-item label="URL" prop="resourceUrl" />
      <s-form-item label="父级" prop="parentId">
        <el-cascader :props="{
            label:'resourceName',
            value:'id',
            emitPath:false,
            checkStrictly:true
          }" v-model="form.parentId" clearable :show-all-levels="false" :options="parentList"></el-cascader>
      </s-form-item>

      <s-form-item label="描述" prop="resourceDesc" type="textarea" />
      <s-form-item label="图标" prop="resourceIcon" />
      <s-form-item label="排序" :rules="['required:number']" prop="resourceSort" :min="0" component="el-input-number" />
      <s-form-item label="类型" prop="resourceType" :rules="['required:number']" component="s-group" :data="moreOptions.resourceType" />
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import _update from '@/api/1396-post-common-service-resource-update'
import _save from '@/api/1394-post-common-service-resource-save'
import useState from '@/hooks/use-state/disable-state'
import useOptions from '../hooks/use-options'
import { Message } from 'element-ui'
import getTableData from '@/api/1392-get-common-service-resource-list-tree'
import filterEmptyArray from '@/util/filter-empty-array'



export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ data, isEdit }, { root, emit }) {
    let form = reactive({
      parentId: '',
      resourceName: '',
      resourceCode: '',
      resourceUrl: '',
      state: 1,
      resourceDesc: '',
      resourceIcon: '',
      resourceType: '',
      resourceSort: 0,
    })

    const parentList = ref([])

    getTableData().then((response) => {
      filterEmptyArray(response.data)
      parentList.value = response.data
    })

    if (isEdit) {
      Object.keys(form).forEach((v) => {
        form[v] = data[v]
      })
    }

    const save = (form) => {
      if (isEdit) {
        form.id = data.id
      }

      if (!form.parentId) {
        form.parentId = 0
      }

      return (isEdit ? _update(form) : _save(form)).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        root.$store.commit('table/update')
      })
    }

    const { options } = useState()
    const moreOptions = useOptions()

    return {
      save,
      form,
      options,
      moreOptions,
      parentList,
    }
  },
})
</script>