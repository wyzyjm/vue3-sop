<template>
  <div>
    <s-form :model="form">
      <s-panel title="创建信息" border>
        <el-row>
          <el-col :span="12">
            <s-form-item label="创建人" component="s-text" :content="form.createBy" />
          </el-col>
          <el-col :span="12">
            <s-form-item label="创建时间" component="s-text" :content="form.createTime" />
          </el-col>
        </el-row>
      </s-panel>
      <s-panel title="基本信息" border>
        <el-row>
          <el-col :span="12">
            <s-form-item label="产品名称" component="s-text" :content="form.name" />
          </el-col>
          <el-col :span="12">
            <s-form-item label="产品编码" component="s-text" :content="form.code" />
          </el-col>
          <el-col :span="12">
            <s-form-item label="业务类型" component="s-text" :content="form.businessTypeName" />
          </el-col>
          <el-col :span="12">
            <s-form-item label="状态" component="s-text" :content="form.status" />
          </el-col>
          <el-col :span="12">
            <s-form-item label="售卖渠道" component="s-text" :content="form.salesChannelName" />
          </el-col>
        </el-row>
      </s-panel>
    </s-form>

    <div class="tc">
      <s-button @click="$router.go(-1)">关闭</s-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
export default defineComponent({
  props: {
    data: {
      type: String,
    },
  },
  setup({ data }) {
    let form = reactive({})
    try {
      form = reactive(JSON.parse(data))
    } catch (error) {
      console.log(error)
    }
    return {
      form,
    }
  },
})
</script>