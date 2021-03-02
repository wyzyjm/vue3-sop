<template>
  <div class="service-one-phase-information">
    <s-form :model="form" label-width="150px" @submit="save">
      <div class="box">
        <h2>服务单信息</h2>
        <s-form-item label="服务单呈现名称" :rules="['required']" prop="flowShowName" />
        <s-form-item label="服务单名称编码" :rules="['required']" prop="flowShowCode" />
        <s-form-item label="流程名称"  class="pct100"  :props="{
        label:'businessFlowName',
        value:'id'
      }" component="s-group" :data="options.businessFlowList" :rules="['required:number']" prop="businessFlowDefId" />
      </div>

      <div class="box mt20">
        <h2>阶段信息</h2>
        <div v-for="(item,index) in form.stageGroupDTOList" :key="index">
          <s-form-item>
            <s-button type="primary" @click="add(i)">添加</s-button>
            <s-button type="primary" @click="del(i)">删除</s-button>
          </s-form-item>
          <s-form-item :prop="'stageGroupDTOList.' + index + '.stageName'" label="阶段名称" :rules="[{ required: true, message: '请输入阶段名称', trigger: 'blur' }]">
            <el-input v-model="item.stageName"></el-input>
          </s-form-item>
          <s-form-item :prop="'stageGroupDTOList.' + index + '.stageCode'" label="阶段编码" :rules="[{ required: true, message: '请输入阶段编码', trigger: 'blur' }]">
            <el-input v-model="item.stageCode"></el-input>
          </s-form-item>
          <s-form-item :prop="'stageGroupDTOList.' + index + '.orderSort'" label="展示顺序" :rules="[{ required: true, message: '请输入展示顺序', trigger: 'blur' }]">
            <el-input-number class="pct100" :min="0" :precision="0" v-model="item.orderSort"></el-input-number>
          </s-form-item>
          <s-form-item :prop="'stageGroupDTOList.' + index + '.noStartTerm'" label="未开始术语" :rules="[{ required: true, message: '请输入未开始术语', trigger: 'blur' }]">
            <el-input v-model="item.noStartTerm"></el-input>
          </s-form-item>
          <s-form-item :prop="'stageGroupDTOList.' + index + '.progressTerm'" label="进行中术语" :rules="[{ required: true, message: '请输入进行中术语', trigger: 'blur' }]">
            <el-input v-model="item.progressTerm"></el-input>
          </s-form-item>
          <s-form-item :prop="'stageGroupDTOList.' + index + '.finishedTerm'" label="已完成术语" :rules="[{ required: true, message: '请输入已完成术语', trigger: 'blur' }]">
            <el-input v-model="item.finishedTerm"></el-input>
          </s-form-item>
        </div>
      </div>

      <s-form-item class="mt20">
        <s-button @click="$emit('close')">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import useOptions from './hooks/use-options'
import saveConfig from '@/api/1444-post-service-order-cust-service-show-config-addconfig'
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
  setup(props, { emit, root }) {
    const stageGroupDTOItem = reactive({
      stageName: '',
      stageCode: '',
      orderSort: '',
      noStartTerm: '',
      progressTerm: '',
      finishedTerm: '',
    })

    const form = reactive({
      flowShowName: '',
      flowShowCode: '',
      businessFlowDefId: '',
      stageGroupDTOList: [],
    })

    form.stageGroupDTOList.push({ ...stageGroupDTOItem })

    const add = (i) => {
      form.stageGroupDTOList.splice(i + 1, 0, { ...stageGroupDTOItem })
    }
    const del = (i) => {
      form.stageGroupDTOList.splice(i, 1)
    }

    const save = (form) => {
      return saveConfig(form).then(() => {
        Message({
          message: '保存成功！',
          type: 'success',
        })
        emit('close')
        root.$router.go(-1)
      })
    }

    const options = useOptions()

    return {
      add,
      del,
      save,
      form,
      options,
    }
  },
})
</script>
<style lang="scss">
.service-one-phase-information {
  .box {
    background: #fff;
    border:1px solid #eee;
  }
  .el-form-item{
    width:600px;
    margin-left:auto;
    margin-right:auto;
  }
  .el-select{
    width:100%;
  }
  h2 {
    font-size: 14px;
    padding:15px 20px;
    margin:0 0 20px 0;
    border-bottom: 1px solid #eee;
  }
}
</style>