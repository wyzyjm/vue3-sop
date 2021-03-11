<template>
  <div>
    <s-form :model="form" label-width="0" @submit="save">

      <el-row class="lh40">
        <el-col :span="12">售卖渠道</el-col>
        <el-col :span="12">生产流程</el-col>
      </el-row>

      <el-row v-for="(item,i) in form.productionProcessList" :key="i">
        <el-col :span="10">
          <s-form-item :prop="`productionProcessList.${i}.salesChannelId`" :rules="[{required:true,type:'array',message:'请选择售卖渠道',trigger: 'change'}]">
            <el-cascader clearable class="pct90" :props="{
              checkStrictly : true,
            label:'name',
            value:'id',
            multiple:true,
            emitPath:false
          }" v-model="item.salesChannelId" :collapse-tags="true" :show-all-levels="false" :options="options.salesChannelList"></el-cascader>
          </s-form-item>
        </el-col>
        <el-col :span="10">
          <s-form-item :prop="`productionProcessList.${i}.productionProcessId`" :rules="[{required:true,message:'请选择生产流程',trigger: 'change'}]">
            <s-group clearable class="pct90" @change="businessFlowChange($event,item)" :data="options.businessFlow" :props="{label:'businessFlowName',value:'id'}" v-model="item.productionProcessId"></s-group>
          </s-form-item>
        </el-col>
        <el-col :span="4">
          <s-button v-if="i!==0" type="text" @click="del(i)" icon="el-icon-delete" />
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
import useOptions from '../hooks/use-production-set-options'
import _save from '@/api/1504-post-production-config-service-product-production-process-batch'
import { Message } from 'element-ui'
import _getDetail from '@/api/1705-get-production-config-service-product-details'
export default defineComponent({
  props: {
    data: {
      type: Array,
    },
  },
  setup({ data }, { emit }) {
    const item = {
      salesChannelId: [],
      productionProcessId: '',
      productionProcessName: '',
    }

    let form = reactive({
      serviceProductIdList: data.map((v) => v.id),
      productionProcessList: [],
    })

    const save = (form) => {
      const params = JSON.parse(JSON.stringify(form))

      const arr = []

      params.productionProcessList.forEach((v) => {
        v.salesChannelId.forEach((c) => {
          arr.push({
            productionProcessId: v.productionProcessId,
            productionProcessName: v.productionProcessName,
            salesChannelId: Array.isArray(c) ? c[c.length - 1] : c,
          })
        })
      })
      params.productionProcessList = arr

      return _save(params).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
      })
    }
    const options = useOptions()

    const add = () => {
      form.productionProcessList.push({ ...item })
    }

    const del = (i) => {
      form.productionProcessList.splice(i, 1)
    }
    const businessFlowChange = (val, item) => {
      try {
        item.productionProcessName = options.businessFlow.find(
          (v) => v.id === val
        ).businessFlowName
      } catch (error) {
        item.productionProcessName = ''
      }
    }

    if (data && data.length === 1) {
      _getDetail({ id: data[0].id }).then((response) => {
        // form.productionProcessList=
        response.data.productionProcessList.forEach((v) => {
          const current = form.productionProcessList.find(
            (c) => c.productionProcessId === v.productionProcessId
          )
          if (current) {
            current.salesChannelId.push([v.salesChannelId])
          } else {
            form.productionProcessList.push({
              salesChannelId: [[v.salesChannelId]],
              productionProcessId: v.productionProcessId,
              productionProcessName: v.productionProcessName,
            })
          }
        })
      })
    } else {
      add()
    }

    return {
      del,
      add,
      save,
      form,
      options,
      businessFlowChange,
    }
  },
})
</script>