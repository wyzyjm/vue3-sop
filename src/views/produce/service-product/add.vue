<template>
  <div>
    <s-form class="service-one-phase-information" :model="form" label-width="130px" @submit="save">
      <div class="box">
        <h2>基本信息</h2>
        <s-form-item label="服务产品名称" prop="name" :rules="['required']" />
        <s-form-item v-if="!isEdit" label="服务产品编号" prop="codeGenerateType" :rules="['required:number']">
          <el-radio-group v-model="form.codeGenerateType">
            <el-radio :label="1">随机生成</el-radio>
            <el-radio :label="2">自定义编号
              <el-input v-model="form.code"></el-input>
            </el-radio>
          </el-radio-group>
        </s-form-item>
        <s-form-item v-else component="s-text" :content="form.code" />
        <s-form-item label="服务产品类型" :props="{label:'name',value:'code'}" prop="type" :rules="['required']" component="s-group" :data="options.type" />
        <s-form-item label="单位" :props="{label:'name',value:'code'}" prop="unit" :rules="['required']" component="s-group" :data="options.unit" />
        <s-form-item label="优先级" :min="0" component="el-input-number" prop="priority" :rules="['required:number']" />
        <s-form-item label="业务类型" prop="businessTypeId" component="s-group" :props="{label:'name',value:'id'}" :data="options.businessType" />
        <s-form-item label="服务内容" autosize prop="serviceContent" type="textarea" />
      </div>
      <div class="box mt20">
        <h2>属性信息</h2>
        <s-form-item>
          <s-button type="text" @click="addOtherPropDialog.open">新增其他属性</s-button>
          <s-button type="text" @click="selectOtherPropDialog.open">选择其他属性</s-button>
        </s-form-item>

        <div v-for="(item,i) in otherProps" :key="i">
          <s-form-item :label="item.name">
            <s-group multiple v-model="item.checked" component="s-group" :props="{label:'value',value:'code'}" :data="item.valueList"></s-group>
          </s-form-item>
        </div>
      </div>

      <s-form-item class="mt20">
        <s-button @click="$router.go(-1)">取消</s-button>
        <s-button type="primary" run="form.submit">确定</s-button>
      </s-form-item>
    </s-form>
    <s-dialog v-bind="addOtherPropDialog" @close="addOtherPropDialog.close" />
    <s-dialog @change="selectOtherPropChange" v-bind="selectOtherPropDialog" @close="selectOtherPropDialog.close" />

  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import useOptions from './hooks/use-options'
import _save from '@/api/1490-post-production-config-service-product'
import _update from '@/api/1492-put-production-config-service-product'
import request from '@/api/1496-get-production-config-service-product'
import useDialog from '@/hooks/use-dialog'
import { Message } from 'element-ui'

export default defineComponent({
  props: {
    id: {
      default: '',
    },
  },
  setup({ id }, { root }) {
    let form = reactive({
      id,
      code: '',
      name: '',
      type: '',
      unit: '',
      priority: '',
      status: 1,
      codeGenerateType: 1,
      businessTypeId: '',
      serviceContent: '',
      accountType: '',
      propertyList: [],
      belongsToProductLine: [],
    })

    const otherProps = ref([])

    const isEdit = ref(!!id)

    const save = (form) => {
      form.propertyList = otherProps.value.map((v) => {
        v.valueList = v.valueList.filter((c) => v.checked.includes(c.code))
        return v
      })
      return (id ? _update(form) : _save(form)).then(() => {
        Message({
          type: 'success',
          message: '保存成功！',
        })
        root.$router.go(-1)
      })
    }

    const selectOtherPropChange = (arr) => {
      otherProps.value = arr.map((v) => {
        const c = JSON.parse(JSON.stringify(v))
        c.checked = c.valueList.map((v) => v.code)
        return c
      })
    }

    const addOtherPropDialog = useDialog({
      uid: 'add-other-prop',
      title: '新增属性',
      width: '500px',
      component: require('./dialog/add-other-prop'),
    })

    const selectOtherPropDialog = useDialog({
      uid: 'select-other-prop',
      title: '选择其他属性',
      width: '500px',
      component: require('./dialog/select-other-prop'),
    })

    if (id) {
      request({ id }).then((response) => {
        Object.keys(form).forEach((v) => {
          if (v === 'propertyList') {
            let arr = []
            response.data[v].forEach((v) => {
              const current = arr.find((c) => c.name === v.name)
              if (current) {
                current.valueList.push(v)
              } else {
                arr.push({
                  name: v.name,
                  valueList: [v],
                })
              }
            })
            selectOtherPropChange(arr)
          } else {
            form[v] = response.data[v]
          }
        })
      })
    }

    const options = useOptions()

    return {
      isEdit,
      save,
      form,
      options,
      addOtherPropDialog,
      selectOtherPropDialog,
      selectOtherPropChange,
      otherProps,
    }
  },
})
</script>


<style lang="scss">
.service-one-phase-information {
  .box {
    background: #fff;
    border: 1px solid #eee;
  }
  .el-form-item {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .el-select {
    width: 100%;
  }
  h2 {
    font-size: 14px;
    padding: 15px 20px;
    margin: 0 0 20px 0;
    border-bottom: 1px solid #eee;
  }
}
</style>