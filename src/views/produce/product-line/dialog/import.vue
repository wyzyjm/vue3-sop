<template>
  <div>
    <el-steps :active="active" simple>
      <el-step title="上传文件"></el-step>
      <el-step title="导入数据"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <div v-show="active===0">
      <el-alert class="mt20" title="导入的数据将增量补充到现有的数据中" type="info" show-icon :closable="false" />
      <p>1、请按照模板格式准备需要导入的数据</p>
      <el-link class="ml20" :href="downloadURL" type="primary">下载账号数据导入模版</el-link>
      <p>2、请选择需要导入的文件</p>
      <s-form :model="form">
        <s-form-item prop="upload">
          <s-upload :action="url" v-model="form.upload" :files.sync="fileList" @success="uploadSuccess" @error="uploadError" :auto-upload="false" ref="uploadRef" accept="xls,xlsx" class="ml20">
            <el-button size="mini" type="primary">选择附件</el-button>
            支持xls、xlsx文件，单个文件不得大于2M
          </s-upload>
        </s-form-item>
        <s-form-item class="tc mt20">
          <s-button type="primary" @click="uploadSubmit">开始导入</s-button>
          <s-button @click="$emit('close')">取消</s-button>
        </s-form-item>
      </s-form>
    </div>

    <div v-show="active===1">
      <div class="tc mt40">
        正在导入数据...
      </div>
    </div>

    <div v-show="active===2">
      <p>导入完成，共导入 {{fileState.success+fileState.error}} 条 <span v-if="fileState.error">，失败 <span class="red">{{fileState.error}}</span> 条</span> </p>
      <p>{{fileState.errorMessage}}</p>
      <s-button class="mt20" @click="$emit('close')">关闭</s-button>
    </div>

  </div>
</template>
<script>
import { defineComponent, reactive, ref } from '@vue/composition-api'
import { Message } from 'element-ui'
export default defineComponent({
  setup() {
    const active = ref(0)

    const fileState = reactive({
      total: 0,
      success: 0,
      error: 0,
      errorMessage: '',
    })

    const form = reactive({
      upload: '',
    })

    const url = ref(
      `${process.env.VUE_APP_API_BASE_URL}/production-config/product-line/import`
    )

    const downloadURL = ref(
      `${process.env.VUE_APP_API_BASE_URL}//production-config/download/product-line/excel`
    )

    const uploadRef = ref(null)
    const fileList = ref([])
    const uploadSubmit = () => {
      if (uploadRef.value.$refs.upload.uploadFiles.length === 0) {
        Message({
          type: 'error',
          message: '请先选择文件！',
        })
        return
      }
      uploadRef.value.$refs.upload.submit()
      active.value = 1
    }

    const uploadSuccess = (fileList) => {
      active.value = 2
      fileState.success = fileList.length
    }

    const uploadError = (msg) => {
      active.value = 2
      fileState.error = fileList.value.length
      fileState.errorMessage = msg
    }

    return {
      form,
      fileState,
      fileList,
      uploadRef,
      uploadSuccess,
      uploadError,
      uploadSubmit,
      active,
      url,
      downloadURL,
    }
  },
})
</script>