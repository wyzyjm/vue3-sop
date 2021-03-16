<template>
  <div>
    <s-form :model="form" label-width="140px" @submit="save">
      <div class="start-serve">
        <div class="serve-title">客户信息</div>
        <div class="serve-form">
          <s-form-item label="客户名称" :disabled="true" :rules="['required']" prop="value" />
          <s-form-item label="联系人" prop="contactUserName" :rules="['required']" />
          <s-form-item label="联系方式" prop="contactUserTel" :rules="['required', 'mobile']" />
          <s-form-item label="联系邮箱" prop="contactUserEmail" :rules="['required', 'email']" />
        </div>
      </div>
      <el-divider style="margin-top:none"></el-divider>
      <div class="start-serve">
        <div class="serve-title">服务信息{{id}}</div>
        <div class="serve-form">
          <s-form-item label="服务内容" prop="serviceTeamId" :rules="['required']" v-if="id == 1">
            <template v-if="teamList.length">
              <el-radio v-model="form.serviceTeamId" v-for="(info, inx) of teamList" :label="info.orgName" :key="inx">{{info.orgName}}</el-radio>
            </template>
            <template v-else>暂无团队</template>
          </s-form-item>
          <s-form-item label="服务内容" prop="sInfo" :rules="['required:array']" v-else>
            <el-checkbox-group v-model="form.sInfo" size="mini">
              <el-checkbox-button v-for="(info, inx) of canList" :label="inx" :key="inx" @change="serviceChange($event, info, inx)">
                {{info.instanceDefName}}
              </el-checkbox-button>
            </el-checkbox-group>
          </s-form-item>
          <s-form-item label="服务说明" prop="serviceDesc" type="textarea" />
          <s-form-item label="资料上传" prop="uploadId">
            <el-upload
              action=""
              class="service-uploader"
              :show-file-list="false"
              :on-success="uploadSuccess"
              :http-request="httpRequest"
              ref="uploadRef"
              accept="docx,rar,zip,doc,pdf,jpg">
                <img v-if="form.fileUrl" :src="form.fileUrl" class="avatar">
                <i v-else class="el-icon-plus service-uploader-icon"></i>  
            </el-upload>
            支持格式为: .rar .zip .doc .docx .pdf .jpg
          </s-form-item>
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
import { defineComponent, reactive, toRefs, ref } from '@vue/composition-api'
// import { Message } from 'element-ui'
import uploadFile from '@/api/1308-post-frontapi-common-upload-upload'
import addService from '@/api/1889-post-service-order-user-service-api-add'
import getTeams from '@/api/1895-get-service-order-user-service-api-get-org-by-custid'

export default defineComponent({
  props: {
    id: {
      type: Number,
      default: 1
    },
    info: {
      type: Object,
    },
    canList: {
      type: Array
    }
  },
  setup({ id, info }, {root, emit}) {
    const serviceData = reactive({
      serveInfo: {},
      teamList: []
    })

    let form = reactive({
      fileUrl: '',
      uploadId: '',
      serviceTeamId: '',
      sInfo: [],
      serviceType: id
    })

    form = { ...form, ...info }

    getTeams({custId: form.custId}).then(({data}) => { serviceData.teamList = data || []})

    const httpRequest = (upload) => {
      // let file = upload.file;
      const formData = new FormData()
      formData.append('file', upload.file)
      uploadFile(formData).then(response => {
        upload.onSuccess(response.data);
      })
    }

    const uploadSuccess = (fileData, file) => {
      form.fileUrl  = fileData.fileUrl || '';
      form.uploadId = fileData.id || '';
      // console.log("上传成功=", fileData)
    }

    const serviceChange = (isSelect, info, index) => {
      if (isSelect) {
        serviceData.serveInfo[index] = info
      } else {
        delete serviceData.serveInfo[index];
      }
    }

    const save = () => {
      let serveInfo = [];
      for (const key in serviceData.serveInfo) {
        if (Object.hasOwnProperty.call(serviceData.serveInfo, key)) {
          let currInfo = serviceData.serveInfo[key];
          serveInfo.push({
            accountId: currInfo.id,
            contentId: currInfo.instanceDefId
          });
        }
      }
      
      addService({serveInfo, ...form})
      .then(res => {
        Message({
          type: 'success',
          message: '添加成功！',
        })
        emit('close')
        console.log("addService=", res)
      })
    }

    return {
      save,
      form,
      uploadSuccess,
      httpRequest,
      serviceChange,
      ...toRefs(serviceData)
    }
  },
})
</script>
<style lang="scss" scoped>
 .start-serve {
   display: flex;
   line-height: 36px;
   margin-bottom: -22px;
   .serve-title {
     font-weight: bold;
     padding-right: 20px;
   }
   .serve-form {
     width: 80%;
   }
 }
  
</style>