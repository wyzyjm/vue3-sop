<template>
  <div>
    <div class="service-progress">
      <div
        :class="{
          'wrap-item': true,
          first: i===0
        }"
        v-for="(item,i) in list" 
        :key="i">
        <div
          :class="{
            item: true,
            finished: (item.nodeStatus == 1|| item.nodeStatus == 3)
          }">
        </div>
        <div class="tip-con" v-if="item.nodeStatus == 1">
          <div class="tip-title">{{item.nodeName}}</div>
        </div>
        <div
          :class="{
            item: true,
            finished: item.nodeStatus == 3,
            last: list.length == i+1
          }">
            <el-popover 
              placement="top" 
              :title="item.statusName" 
              width="200" 
              trigger="hover" 
              :content="item.nodeName?`${item.nodeName}`:''">
              <span class="dot" slot="reference" />
            </el-popover>

            <span class="node-detail">
              <span class="node-name">{{item.nodeName}}</span>
              <!-- <span class="executor mt10">{{item.nodeCode}}</span> -->
              <span class="completeTime mt5">{{item.nodeEndTime}}</span>
            </span>
        </div>
      </div>
    </div>
    <div class="service-desc">
      <p class="desc-active">{{currData.nodeShowTerm}}</p>
      <p>如有任何疑问，请电话或邮件联系您的专属设计师</p>
      <div class="desc-btn" v-if="currData.buttonList&&currData.buttonList.length">
        <s-button 
          type="primary" 
          v-for="(o, i) in currData.buttonList" 
          :key="i"
          :disabled="!!o.buttonDisabled"
          @click="flowButton(o)">
            {{o.buttonName}}
        </s-button>
      </div>
      <div class="desc-explain">
        <div class="desc-explain-row" v-if="type == 'demand_stage'">
          <span>需求说明 ：</span>
          <p>{{demandData.demandContent || '--'}}</p>
        </div>
        <div class="desc-explain-row" v-if="type == 'demand_stage'&&demandData.annexFileShowUrl">
          <span>需求资料 ：</span>
          <p>
            <el-link class="mr10" :href="demandData.annexFileShowUrl"  target="_blank" type="primary">
              {{demandData.annexFileName}}
              <i class="iconfont">&#xe646;</i>
            </el-link>
            {{demandData.uploadTime}}
          </p>
        </div>
        <div class="desc-explain-row" v-if="type == 'demand_stage'&&demandData.orderConsumeInfo&&demandData.orderConsumeInfo.length">
          <span>单品消耗 ：</span>
          <p>
            <el-table
              :data="demandData.orderConsumeInfo"
              style="width: 100%">
              <el-table-column
                prop="accountText"
                label="名称">
              </el-table-column>
              <el-table-column
                prop="consumeNum"
                label="消耗量">
              </el-table-column>
              <el-table-column
                prop="totalNum"
                label="总量">
              </el-table-column>
            </el-table>
          </p>
        </div>
        <!-- 写死 设计确认node006展示 -->
        <div class="desc-explain-row exp-img" v-if="type == 'produce_stage' && currData.nodeCode == 'node006'">
          <el-image 
            v-if="designUrl"
            style="width: 400px; height: 220px"
            :src="designUrl" 
            :preview-src-list="designList"
            lazy>
          </el-image>
        </div>
        <div class="desc-explain-row exp-decode" v-if="type == 'deliver_stage'">
          <div class="decode-col" v-for="(p, i) of previewList" :key="i">
            <i class="iconfont col-icon" v-if="p.type">&#xe63c;</i>
            <i class="iconfont col-icon" v-else>&#xe623;</i>
            <p>{{p.languageVersion || '--'}}  -（{{p.statusName}}）</p>
            <el-popover
              placement="top"
              width="160"
              trigger="hover"
              v-if="p.type">
              <div class="exp-qrcode">
                <vue-qrcode v-if="p.type==1&&p.url" :value='p.url' />
                <el-image v-else>
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </div>
              <el-button type="success" slot="reference" plain>
                <i class="iconfont">&#xe648;</i>
                二维码
              </el-button>
            </el-popover>
            <el-button v-else type="success" @click="previewSee(p)" plain>
              <i class="iconfont">&#xeb47;</i>
              预览
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <s-dialog v-bind="dialog" @close="dialog.close" />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import axios from 'axios'
import { Message } from 'element-ui'
import VueQrcode from 'vue-qrcode'
import useDialog from '@/hooks/use-dialog';
import getDemand from '@/api/2315-get-service-order-interface-api-demand'
import getDesign from '@/api/2321-get-service-order-interface-api-design'
import getPreviews from '@/api/2381-get-service-order-interface-api-preview_url'
export default defineComponent({
  props: {
    index: {
      type: Number,
      require: 1
    },
    type: {
      type: String,
      require: ''
    },
    orderCode: {
      type: String,
      required: ''
    },
    list: {
      type: Array,
      required: []
    },
  },
  components: { VueQrcode },
  setup({ orderCode, list, type }, { emit }) {
    let progressData = reactive({
      currData: {},
      demandData: {},
      designUrl: '',
      designList: [],
      previewList: []
    })

    let currStatu = list.find((v) => v.nodeStatus == 1)
    if (!currStatu) {
      currStatu = list[list.length-1];  
    }

    progressData.currData = currStatu;

    const dialog = useDialog({
      uid: 'stage-evaluate',
      dynamicTitle: () => '服务评价',
      width: '500px',
      component: require('../dialog/dialog-evaluate'),
    })

    switch (type) {
      case 'demand_stage':
        getDemand({orderCode})
        .then(({ data }) => {
          progressData.demandData = data || {};
        })
        break;
      case 'produce_stage':
        getDesign({orderCode})
        .then(({ data }) => {
          if (data.annexFileShowUrl) {
            progressData.designUrl = data.annexFileShowUrl;
            progressData.designList.push(data.annexFileShowUrl);
          }
        })
        break;
      case 'deliver_stage':
        getPreviews({orderCode})
        .then(({ data }) => {
          progressData.previewList = data || [];
        })
        break;
      default:
        console.error("超出流程类型！")
        break;
    }

    const flowButton = (o) => {
      switch(o.buttonType) {
        case 1:
          o.buttonUrl&&axios.request({
            url: `${process.env.VUE_APP_API_BASE_URL}${o.buttonUrl}`,
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              orderCode
            }
          }).then(({ data }) => {
            if (data.code == 'SYS0000') {
              emit('update');
              Message({
                type: 'success',
                message: '确认成功！',
              })
            } else {
              Message({
                type: 'error',
                message: data.msg || ''
              })
            }
          })
          
        break;
        case 2:
          dialog.open()
        break;
        default:
          console.error(o.nodeName+'按钮类型配置错误');
        break;
      }
    }

    const previewSee = (p) => {
      if (p.url) {
        var link = document.createElement('a')
        link.href   = p.url;
        link.target = "_blank";
        link.click()
      }
    }

    return {
      dialog,
      flowButton,
      previewSee,
      ...toRefs(progressData)
    }
  }
})
</script>
<style lang="scss" scoped>
  .service-progress {
    display: flex;
    .wrap-item {
      display: flex;
      flex: 1;
      &.first {
        flex: none;
        width: 12px;
        .item {
          border: none;
          .node-detail {
            width: 100px;
            text-align: center;
            transform: translate(-30%);
          }
        }
        .dot {
          left: 0;
        }
      }
      .item {
        flex: 1;
        border-top: 2px solid #d9d9d9;
        position: relative;
        &.finished {
          border-color: #18b398;
        }
        .dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 6px;
          background: #18b398;
          right: -6px;
          top: -6px;
          z-index: 99;
        }
        .node-detail {
          color: #666666;
          display:inline-block;
          margin-top: 20px;
          font-size: 12px;
          transform: translate(50%);
          .executor,
          .completeTime {
            font-size: 12px;
            color: #999;
            display: block;
          }
        }
      }
      .tip-popover {
        position:relative;
      }
      .tip-con {
        position: relative;
        width: 0px;
        height: 0px;
        .tip-title {
          position: absolute;
          left: -66px;
          top: -66px;
          background: $sop-color-white;
          width: 100px;
          border: 1px solid #EBEEF5;
          border-radius: 4px;
          z-index: 200;
          line-height: 1.4;
          text-align: justify;
          font-size: 14px;
          box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
          word-break: break-all;
          padding: 18px 20px;
        }
      }
    }
  }
  .service-desc {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    p {
      margin: 0;
      padding-bottom: 10px;
    }
    .desc-active {
      color: $sop-color-theme;
      font-weight: bold;
    }
    .desc-btn {
      margin-bottom: 20px;
    }
    .desc-explain {
      width: 100%;
      margin-bottom: 10px;
      &-row{
        display: flex;
        margin-bottom: 10px;
        // justify-content: center;
        span {
          width: 90px;
          min-width: 90px;
          display: inline-block;
        }
        p {
          width: 80%;
          max-width: 80%;
          margin: 0;
          display: inline-block;
          word-wrap:break-word;
        }
        &.exp-decode {
          flex-wrap: wrap;
          justify-content: center;
        }
        .decode-col{
          width: 180px;
          height: 180px;
          padding: 30px 12px;
          background: #FFFFFF;
          border: 1px solid #EBEBEB;
          border-radius: 6px;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin:0 30px 30px 0;
          .col-icon {
            font-size: 50px;
            margin-bottom: 30px;
            color: $sop-color-theme;
          }
          p {
            margin-bottom: 20px;
          }
        }
        &.exp-img {
          justify-content: center;
        }
        .exp-qrcode {
          width: 160px;
          height: 160px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
      }
    }
  }
</style>
