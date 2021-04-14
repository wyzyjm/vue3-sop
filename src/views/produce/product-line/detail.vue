<template>
  <s-form class="detal-page" :model="form">
    <s-panel title="创建信息" border>
      <s-form-item label="创建人" component="s-text" :content="form.createBy" />
      <s-form-item label="创建时间" component="s-text" :content="form.createTime" />
    </s-panel>
    <s-panel title="基本信息" border>
      <s-form-item label="产品名称" component="s-text" :content="form.name" />
      <s-form-item label="产品编码" component="s-text" :content="form.code" />
      <s-form-item label="业务类型" component="s-text" :content="form.businessTypeName" />
      <s-form-item label="状态" component="s-text" :content="getStateText(form.status)" />
      <s-form-item label="售卖渠道" component="s-text" :content="form.completeSalesChannelName" />
    </s-panel>
    <s-form-item>
      <s-button @click="$router.go(-1)">关闭</s-button>
    </s-form-item>
  </s-form>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import useSafeParams from '@/hooks/use-router-util/sale-params'
import useState from '@/hooks/use-state/disable-state'

export default defineComponent({
  props: {
    data: {
      type: String,
    },
  },
  setup({ data }) {
    const form = useSafeParams(data)

    const { getStateText}=useState()
    return {
      form,
      getStateText
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