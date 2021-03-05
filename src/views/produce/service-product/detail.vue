<template>
  <s-form class="detal-page" :model="form">
    <s-panel title="创建信息" border>
      <s-form-item label="创建人" component="s-text" :content="form.createBy" />
      <s-form-item label="创建时间" component="s-text" :content="form.createTime" />
    </s-panel>
    <s-panel title="基本信息" border>
      <s-form-item label="服务产品名称" component="s-text" :content="form.name" />
      <s-form-item label="服务产品编码" component="s-text" :content="form.code" />
      <s-form-item label="服务产品类型" :props="{label:'name',value:'code'}" component="s-text" :content="form.type" :options="options.type" />
      <s-form-item label="单位" :props="{label:'name',value:'code'}" component="s-text" :content="form.unit" :options="options.unit" />
      <s-form-item label="优先级" component="s-text" :content="form.priority" />
      <s-form-item label="业务类型" component="s-text" :content="form.businessTypeName" />
      <s-form-item label="服务内容" component="s-text" :content="form.serviceContent" />
      <s-form-item label="状态" component="s-text" :content="`已${getStateText(form.status)}`" />
    </s-panel>
    <s-panel title="属性信息" border>
      <s-form-item v-for="(item,i) in otherProps" :key="i" :label="item.name" component="s-text" :content="item.valueList.map(v=>v.value)" />
    </s-panel>
    <s-form-item class="tc">
      <s-button @click="$router.go(-1)">关闭</s-button>
    </s-form-item>
  </s-form>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import request from '@/api/1496-get-production-config-service-product'
import useOptions from './hooks/use-options'
import useState from '@/hooks/use-state/shelves-state'

export default defineComponent({
  props: {
    id: {
      type: String,
    },
  },
  setup({ id }) {
    let form = reactive({
      id,
      code: '',
      name: '',
      type: '',
      unit: '',
      priority: '',
      status: 1,
      createTime: '',
      createBy: '',
      codeGenerateType: 1,
      businessTypeId: '',
      businessTypeName: '',
      serviceContent: '',
      accountType: '',
      propertyList: [],
      belongsToProductLine: [],
    })
    const { getStateText } = useState()
    const otherProps = ref([])

    const selectOtherPropChange = (arr) => {
      otherProps.value = arr.map((v) => {
        const c = JSON.parse(JSON.stringify(v))
        c.checked = c.valueList.map((v) => v.code)
        return c
      })
    }
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

    console.log(otherProps)
    return {
      form,
      options,
      getStateText,
      otherProps,
    }
  },
})
</script>
<style scoped>
.detal-page .el-form-item {
  width: 48%;
  display: inline-block;
}
</style>