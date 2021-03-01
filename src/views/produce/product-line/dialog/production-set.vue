<template>
  <div>
    <s-form :model="form" label-width="0" @submit="save">

      <el-row class="lh40">
        <el-col :span="8">服务商</el-col>
        <el-col :span="8">生产组织</el-col>
        <el-col :span="8">分单比例</el-col>
      </el-row>

      <el-row v-for="(item,i) in form.list" :key="i">
        <el-col :span="8">
          <s-form-item>
            <s-group class="pct90" :props="{
            label:'basicName',
            value:'id'
          }" :data="options.serviceProvider" v-model="item.serviceProviderId"></s-group>
          </s-form-item>
        </el-col>
        <el-col :span="8">
          <s-form-item>
            <s-group class="pct90" :data="options" v-model="item.productionOrganizationId"></s-group>
          </s-form-item>
        </el-col>
        <el-col :span="8">
          <s-form-item>
            <s-input class="pct90" v-model="item.shareRatio"></s-input>
          </s-form-item>
        </el-col>
      </el-row>

      <s-form-item>
        <s-button icon="el-icon-circle-plus" @click="add">继续添加</s-button>
      </s-form-item>
      <s-form-item>
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import _save from '@/api/1486-post-production-config-product-line-production-setting-batch'
import useOptions from '../hooks/use-options'
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
  setup({ isEdit, data }, { emit, root }) {
    const item = {
      serviceProviderId: '',
      serviceProvider: '',
      productionOrganizationId: '',
      productionOrganization: '',
      shareRatio: '',
    }

    let form = reactive({
      productLineId: '',
      list: [],
    })

    const save = (form) => {
      return _save(form).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        root.$store.commit('table/update')
      })
    }

    const add = () => {
      form.list.push({ ...item })
    }

    if (isEdit) {
      form.productLineId = data.id
    } else {
      add() //默认值
    }


    const options=useOptions()

    return {
      add,
      save,
      form,
      options
    }
  },
})
</script>