<template>
  <div>
    <s-form :model="form" label-width="0" @submit="save">

      <el-row class="lh40">
        <el-col :span="12">关联商品名称</el-col>
        <el-col :span="12">关联商品code</el-col>
      </el-row>

      <el-row v-for="(item,i) in form.relatedMappingList" :key="i">
        <el-col :span="12">
          <s-form-item>
            <s-group class="pct90" :data="options" v-model="item.serviceProviderId"></s-group>
          </s-form-item>
        </el-col>
        <el-col :span="12">
          <s-form-item>
            <s-group class="pct90" :data="options" v-model="item.productionOrganizationId"></s-group>
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
import useState from '@/hooks/use-state/disable-state'
import _save from '@/api/1508-post-service-product-related-mapping--batch'
export default defineComponent({
  props: {
    isEdit: {
      default: false,
    },
    data: {
      type: Object,
    },
  },
  setup({ isEdit, data },{emit}) {
    const item = {
      relatedGoodsName: '',
      relatedGoodsCode: '',
    }

    let form = reactive({
      serviceProductId: isEdit ? data.id : undefined,
      relatedMappingList: [],
    })

    const save = (form) => {
      return _save(form).then(({ msg }) => {
        console.log(msg)
        emit('close')
        
      })
    }

    const add = () => {
      form.relatedMappingList.push({ ...item })
    }

    if (isEdit) {
      form = { ...form, ...data }
    } else {
      add() //默认值
    }

    const { options } = useState()

    return {
      add,
      save,
      form,
      options,
    }
  },
})
</script>