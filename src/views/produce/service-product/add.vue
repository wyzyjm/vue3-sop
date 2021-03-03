<template>
  <div class="service-one-phase-information">
    <s-form :model="form" label-width="130px" @submit="save">
      <div class="box">
        <h2>基本信息</h2>
        <s-form-item label="服务产品名称" prop="name" :rules="['required']" />
        <s-form-item label="服务产品编号" prop="code" :rules="['required']">
          <el-radio-group v-model="form.code">
            <el-radio label="0">随机生成</el-radio>
            <el-radio label="1">自定义编号
              <el-input v-model="form.code"></el-input>
            </el-radio>
          </el-radio-group>
        </s-form-item>
        <s-form-item label="服务产品类型" prop="type" :rules="['required']" component="s-group" :data="options.type" />
        <s-form-item label="单位" prop="unit" :rules="['required']" component="s-group" :data="options.unit" />
        <s-form-item label="优先级" prop="name" :rules="['required']" />
        <s-form-item label="业务类型" prop="type" component="s-group" :data="options.businessType" />
        <s-form-item label="服务内容" prop="name" type="textarea" />
      </div>
      <div class="box mt20">
        <h2>属性信息</h2>
        <div>
          <s-button type="text" @click="addOtherProp">新增其他属性</s-button>
          <s-button type="text" @click="selectOtherProp">选择其他属性</s-button>
        </div>

        <div v-for="item in form.propertyList" :key="item.id">
          <s-form-item :label="item.name" v-model="item.value" component="s-group" :data="item.options" />
        </div>
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
import useOptions from './hooks/use-options'
import _save from '@/api/1412-post-production-config-product-line'
import _update from '@/api/1492-put-production-config-service-product'
import request from '@/api/1496-get-production-config-service-product'
export default defineComponent({
  props: {
    id: {
      default: '',
    },
  },
  setup({ id }) {
    let form = reactive({
      description: '',
      id: undefined,
      code: '',
      name: '',
      status: 1,
      parentId: '',
      propertyList: [],
    })

    const save = (form) => {
      return (id ? _update(form) : _save(form)).then(({ msg }) => {
        console.log(msg)
      })
    }

    const addOtherProp = () => {}
    const selectOtherProp = () => {}

    if (id) {
      request({ id }).then((response) => {
        Object.keys(form).forEach((v) => {
          if (v === 'propertyList') {
            let arr = []
            response.propertyList.forEach((v) => {
              const current = arr.find((c) => c.name === v.name)
              if (current) {
                current.value.push(v.value)
                current.options.push({
                  label: v.name,
                  value: v.value,
                })
              } else {
                arr.push({
                  label: v.name,
                  value: [v.value],
                  options: [
                    {
                      label: v.name,
                      value: v.value,
                    },
                  ],
                })
              }
            })
            form[v] = arr
          } else {
            form[v] = response[v]
          }
        })
      })
    }

    const options = useOptions()

    return {
      save,
      form,
      options,
      addOtherProp,
      selectOtherProp,
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