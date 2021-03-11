<template>
  <div>
    <s-form :model="form" label-width="0" @submit="save">

      <el-row class="lh40">
        <el-col :span="12">关联商品名称</el-col>
        <el-col :span="12">关联商品code</el-col>
      </el-row>

      <el-row v-for="(item,i) in form.relatedMappingList" :key="i">
        <el-col :span="10">
          <s-form-item :rules="[{required:true,message:'请填写关联商品名称',trigger: 'blur'}]" :prop="`relatedMappingList.${i}.relatedGoodsName`">
            <s-input clearable class="pct90" v-model="item.relatedGoodsName"></s-input>
          </s-form-item>
        </el-col>
        <el-col :span="10">
          <s-form-item :rules="[{required:true,message:'请填写关联商品名称',trigger: 'blur'}]" :prop="`relatedMappingList.${i}.relatedGoodsCode`">
            <s-input clearable class="pct90" v-model="item.relatedGoodsCode"></s-input>
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
import _save from '@/api/1508-post-production-config-service-product-related-mapping--batch'
import _getRelated from '@/api/1510-get-production-config-service-product-related-mapping-list'
import { Message } from 'element-ui'

export default defineComponent({
  props: {
    data: {
      type: Object,
    },
  },
  setup({ data }, { emit, root }) {
    const item = {
      relatedGoodsName: '',
      relatedGoodsCode: '',
    }

    let form = reactive({
      serviceProductId: data.id,
      relatedMappingList: [],
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
      form.relatedMappingList.push({ ...item })
    }
    const del = (i) => {
      form.relatedMappingList.splice(i, 1)
    }

    
    _getRelated({ serviceProductId: data.id }).then((response) => {
      form.relatedMappingList = response.data.map((v) => {
        return {
          relatedGoodsName: v.relatedGoodsName,
          relatedGoodsCode: v.relatedGoodsCode,
        }
      })

      if(response.data.length===0){
        add()
      }


    })
    return {
      add,
      del,
      save,
      form,
    }
  },
})
</script>