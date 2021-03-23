<template>
  <div>
    <s-form class="service-one-phase-information" :model="form" label-width="130px" @submit="save">
      <div class="box">
        <h2>基本信息</h2>
        <s-form-item label="服务产品名称" prop="name" clearable :rules="['required']" />
        <s-form-item v-if="!isEdit" label="服务产品编号" clearable prop="codeGenerateType" :rules="['required:number']">
          <el-radio-group v-model="form.codeGenerateType">
            <el-radio :label="1">随机生成</el-radio>
            <el-radio :label="2">自定义编号
              <el-input v-model="form.code"></el-input>
            </el-radio>
          </el-radio-group>
        </s-form-item>
        <s-form-item v-else component="s-text" :content="form.code" />
        <s-form-item clearable label="服务产品类型" prop="type" :rules="['required']" component="s-group" :data="options.type" />
        <s-form-item clearable label="单位" prop="unit" :rules="['required']" component="s-group" :data="options.unit" />
        <s-form-item clearable label="优先级" :min="0" component="el-input-number" prop="priority" :rules="['required:number']" />
        <s-form-item clearable label="业务类型" prop="businessTypeId" component="s-group"  :data="options.businessType" />
        <s-form-item clearable label="服务内容" autosize prop="serviceContent" type="textarea" />
      </div>
      <div class="box mt20">
        <h2>属性信息</h2>
        <s-form-item>
          <s-button type="text" @click="addOtherPropDialog.open">新增其他属性</s-button>
          <s-button type="text" @click="selectOtherPropDialog.open({data:otherProps})">选择其他属性</s-button>
        </s-form-item>

        <div v-for="(item,i) in otherProps" :key="i">
          <s-form-item :label="item.name">
            <div v-if="item.code==='associatedAccountType'">
              <el-row v-for="(child,i) in item.valueList" :key="i">
                <el-input @input="()=>child.code=child.value" @blur="()=>item.checked=[child.code]" v-model="child.value"></el-input>
                <el-input class="dn" v-model="child.code"></el-input>
              </el-row>
            </div>

            <el-cascader v-model="proudctLineChecked" v-if="item.code==='productLine'" @change="change1" :props="{ multiple: true }" :options="options1" filterable></el-cascader>
            <s-group v-if="item.code!=='associatedAccountType'&&item.code!=='productLine'" multiple v-model="item.checked" component="s-group" :props="{label:'value',value:'code'}" :data="item.valueList"></s-group>
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
import _getProductConfig from '@/api/1609-get-production-config-product-list'

export default defineComponent({
  props: {
    id: {
      default: '',
    },
  },
  setup({ id }, { root }) {
    // 归属产品线
    const options1 = ref([])

    const proudctLineChecked = ref([])

    const change1 = (val) => {
      form.belongsToProductLine = val.map((v) => {
        const o1 = options1.value.find((c) => c.value === v[0])
        const o2 = o1.children.find((c) => c.value === v[1])
        return {
          name: o1.label,
          version: o2.label,
          code: o1.code,
        }
      })
    }

    const initProductLine = () => {
      return _getProductConfig().then((response) => {
        const arr = []
        response.data.forEach((v) => {
          const current = arr.find((c) => c.code === v.code)
          if (current) {
            current.children.push({
              label: v.version,
              value: v.id,
            })
          } else {
            const o = {
              label: v.name,
              value: v.id,
              code: v.code,
              children: [
                {
                  label: v.version,
                  value: v.id,
                },
              ],
            }
            arr.push(o)
          }
        })

        options1.value = arr
      })
    }

    // 归属产品线结束
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


      form.propertyList = otherProps.value
        .map((v) => {
          v.valueList = v.valueList.filter((c) => v.checked.includes(c.code))
          return v
        })
        // .filter((v) => v.name !== '归属产品线')
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
        if (v.code === 'productLine') {
          initProductLine()
        }
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
                  code:
                    v.name === '归属产品线'
                      ? 'productLine'
                      : v.name === '关联账号类型'
                      ? 'associatedAccountType'
                      : undefined,
                  valueList: [v],
                })
              }
            })

            selectOtherPropChange(arr)

            // 单独处理归属产品线
            const productLine = arr.find((v) => v.name === '归属产品线')
            if (productLine) {
              initProductLine().then(() => {
                productLine.valueList.forEach((v) => {
                  const code = parseInt(v.code)
                  const current = options1.value.find((c) => c.code === code)
                  const id1 = current.value
                  const id2 = current.children.find(
                    (c) => c.label === v.value.split('/')[1]
                  ).value
                  proudctLineChecked.value.push([id1, id2])
                })
              })
            }
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
      options1,
      change1,
      proudctLineChecked,
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