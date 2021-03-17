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
          }" :data="options.serviceProvider" v-model="item.serviceProviderId" @change="serviceProviderChange(item,$event)"></s-group>
          </s-form-item>
        </el-col>
        <el-col :span="8">
          <s-form-item>
            <el-cascader :props="{
            label:'orgName',
            value:'id',
          }" v-model="item.productionOrganizationId" :show-all-levels="false" @change="productionOrganizationChange(item,$event)" :options="item.org"></el-cascader>
          </s-form-item>
        </el-col>
        <el-col :span="8">
          <s-form-item>
            <el-input-number :precision="0" :min="1" class="pct90" v-model="item.shareRatio"></el-input-number>
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
import getOrg from '@/api/1320-get-frontapi-service-provider-org-get-by-providerid'
import _getDetail from '@/api/2009-get-production-config-product-line-production-setting-product-line-list'
import useOptions from '../hooks/use-options'
import { Message } from 'element-ui'

function filterEmptyArray(arr) {
  if (!Array.isArray(arr)) return
  arr.forEach(function (v) {
    if (v.children.length === 0) {
      v.children = null
    } else {
      filterEmptyArray(v.children)
    }
  })
}
export default defineComponent({
  props: {
    data: {
      type: Array,
    },
  },
  setup({ data }, { emit, root }) {
    const options = useOptions()

    const item = {
      serviceProviderId: '',
      serviceProvider: '',
      productionOrganizationId: [],
      productionOrganization: '',
      shareRatio: '',
      org: [],
    }

    let form = reactive({
      productLineIdList: [],
      list: [],
    })

    const findAllPath = (data, lastPathId, arr = []) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === lastPathId) {
          arr.push(data[i].id)
          return arr
        } else {
          if (data[i].children && data[i].children.length) {
            arr.push(data[i].id)
            const result= findAllPath(data[i].children, lastPathId, arr)
            if(result) {
              return result
            }else{
              arr.length=arr.length-1
            }
          }
        }
      }
    }

    const serviceProviderChange = (
      item,
      providerId,
      productionOrganizationId
    ) => {
      // 清空生产组织
      item.productionOrganizationId = []
      item.org = []
      //赋值服务商名称
      item.serviceProvider = options.serviceProvider.find(
        (v) => v.id === providerId
      ).basicName
      getOrg({ providerId }).then((response) => {
        filterEmptyArray(response.data.children)
        item.org = [response.data]
        if (productionOrganizationId) {
          item.productionOrganizationId = findAllPath(
            item.org,
            parseInt(productionOrganizationId)
          )
          productionOrganizationChange(item, item.productionOrganizationId)
        }
      })
    }

    const findProductionOrganizationName = (arr, id) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          return arr[i].orgName
        }

        if (arr[i].children && arr[i].children.length) {
          const result= findProductionOrganizationName(arr[i].children, id)
          if(result) return result
        }
      }
    }

    const productionOrganizationChange = (item, id) => {
      item.productionOrganization = findProductionOrganizationName(
        item.org,
        id[id.length - 1]
      )
    }

    const save = (form) => {
      const params = JSON.parse(JSON.stringify(form))

      params.list.forEach((v) => {
        delete v.org
        v.productionOrganizationId =
          v.productionOrganizationId[v.productionOrganizationId.length - 1]
      })

      return _save(params).then(() => {
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

    form.productLineIdList = data.map((v) => v.id)

    if (Array.isArray(data) && data.length === 1) {
      _getDetail({ productLineId: data[0].id }).then((response) => {
        if(response.data.length===0){
          add()
          return 
        }

        response.data.forEach((v) => {
          v = { ...item, ...v }

          form.list.push(v)
          serviceProviderChange(
            v,
            v.serviceProviderId,
            v.productionOrganizationId
          )
        })
      })
    } else {
      add()
    }

    return {
      add,
      save,
      form,
      options,
      serviceProviderChange,
      productionOrganizationChange,
    }
  },
})
</script>