<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="(item,i) in list" :key="i">
        <el-select ref="save" v-model="item.providerId" filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="search.remoteMethod" :loading="search.loading">
          <el-option v-for="item in search.options" :key="item.id" :label="item.basicName" :value="item.id">
          </el-option>
        </el-select>
        <el-tree :data="item.data" show-checkbox node-key="id" :default-checked-keys="item.defaultChecked" :props="item.defaultProps">
        </el-tree>
      </el-col>
      <el-col>
        <s-button type="primary" icon="el-icon-circle-plus" @click="add">继续添加</s-button>
      </el-col>
    </el-row>

    <div class="mt20">
      <s-button @click="$emit('close')">取消</s-button>
      <s-button type="primary" @click="save">确定</s-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
// import getTree from '@/api/1326-get-frontapi-service-provider-org-get-org-partner'
import _search from '@/api/1660-get-frontapi-service-provider-list-by-name'
// import _save from '@/api/1328-post-frontapi-service-provider-org-add-org-partner'
// import { Message } from 'element-ui'

export default defineComponent({
  props: {
    data: {
      required: true,
    },
  },
  setup() {
    const item = reactive({
      sourceId: '',
      sourceType: '',
      treeRef: ref(null),
      data: [],
      defaultChecked: [],
      defaultProps: {
        children: 'children',
        label: 'orgName',
      },
    })



    // getTree({ providerId: data.sourceId, id: data.id }).then((response) => {
    //   tree.defaultChecked = response.data.partnerIdList
    //   tree.data = response.data.providerOrgDTOList
    // })

    const search = reactive({
      options: [],
      value: '',
      list: [],
      remoteMethod(query) {
        if (query !== '') {
          search.loading = true
          setTimeout(() => {
            search.loading = false

            _search({ name: query }).then((response) => {
              search.options = response.data
            })
          }, 200)
        } else {
          search.options = []
        }
      },
    })

    const list = ref([])

    const add = () => {
      list.value.push(item)
    }

    add()

    const save = () => {
      console.log(11, list.value)

      // return _save({
      //   sourceId: data.id,
      //   partnerIds: treeRef.value.getCheckedKeys(),
      // }).then(() => {
      //   Message({
      //     message: '保存成功！',
      //     type: 'success',
      //   })
      //   emit('close')
      //   emit('updateTable')
      // })
    }

    return {
      save,
      search,
      list,
      add,
    }
  },
})
</script>