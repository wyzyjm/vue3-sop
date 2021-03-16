<!-- 详情 -->
<template>
<div class='box'>
    
    <div class='module-box'>
        <div class="title-box">服务单进度</div>
        <p class="clear"></p>
        <div class="progress_box">
            <ServiceProgress :serviceOrderId="4"></ServiceProgress>
            <p class="mb40"></p>
            <btn :code="$route.params.code"></btn>
        </div>
    </div>


    <div class='module-box' v-for="(item, idx) in formCustInfo" :key="idx">
        <div class="title-box">{{item.title}}</div>
        <p class="clear"></p>
        <el-row :gutter="20" class="row-box">
            <el-col :span="8" v-for="(value, key, index) in item.keys" :key="index">
                <div class="item-col">
                    <div class="col-title">{{value}}：</div>
                    <div class="col-txt" v-if="key == 'linkmanMail' || key == 'linkmanName' || key == 'linkmanPhone'">{{servicesInfo['custLinkmanInfoList'] ? servicesInfo['custLinkmanInfoList'][key] : '------'}}</div>
                    <div class="col-txt" v-else>{{servicesInfo[key] || '------'}}</div>
                </div>
            </el-col>        
        </el-row>
    </div>

    <div class='module-box'>
        <div class="title-box">服务内容</div>
        <!-- <p class="clear"></p> -->
        <div v-for="(item, idx) in servicesContent.serviceProductList" :key="idx">
            <p style="margin:40px 0 10px 30px;font-size:14px;">{{item.name || '------'}}</p>
            <el-row :gutter="20" class="row-box" style="margin:0 auto 25px; border-bottom:1px solid #ebebeb;padding-bottom:10px">
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">购买版本：</div>
                        <div class="col-txt">{{'------'}}</div>
                    </div>
                </el-col>    
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">业务类型：</div>
                        <div class="col-txt">{{'------'}}</div>
                    </div>
                </el-col>    
                <el-col :span="8">
                    <div class="item-col"></div>
                </el-col>    
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">购买套餐：</div>
                        <div class="col-txt">{{'------'}}</div>
                    </div>
                </el-col>    
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">购买功能：</div>
                        <div class="col-txt">{{'------'}}</div>
                    </div>
                </el-col>    
                <el-col :span="8">
                    <div class="item-col"></div>
                </el-col>  
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">消耗单品：</div>
                        <div class="col-txt">{{'------'}}</div>
                    </div>
                </el-col>    
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">服务说明：</div>
                        <div class="col-txt">{{'------'}}</div>
                    </div>
                </el-col> 
                <el-col :span="8">
                    <div class="item-col"></div>
                </el-col>  
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">产品实例号：</div>
                        <div class="col-txt">{{servicesContent.productInstanceCode || '------'}}</div>
                    </div>
                </el-col>    
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">产品标识：</div>
                        <div class="col-txt">{{servicesContent.productDomain || '------'}}</div>
                    </div>
                </el-col> 
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">文本序号：</div>
                        <div class="col-txt">{{servicesContent.contractTextCode || '------'}}</div>
                    </div>
                </el-col>  
            </el-row>
        </div>
        <p style="margin:40px 0 10px 30px;font-size:14px;" v-if="productFile.length > 0">生产资料</p>
        <div v-for="(item, idx) in productFile" :key="idx">
            <el-row :gutter="20" class="row-box" style="margin:0 auto 25px; border-bottom:1px solid #ebebeb;padding-bottom:10px">
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">生产资料{{idx + 1}}：</div>
                        <div class="col-txt">
                            <a :href="item.annexShowUrl">{{item.annexName}}</a>
                            {{item.uploadTime}}</div>
                    </div>
                </el-col>   
            </el-row>
        </div>
        <p style="margin:40px 0 10px 30px;font-size:14px;" v-if="designFile.length > 0">设计稿</p>
        <div  v-for="(item, idx) in designFile" :key="idx">
            <el-row :gutter="20" class="row-box" style="margin:0 auto 25px;">
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">设计稿{{idx + 1}}：</div>
                        <div class="col-txt">
                            <a :href="item.annexShowUrl">{{item.annexName}}</a>
                            {{item.uploadTime}}</div>
                    </div>
                </el-col>    
                <el-col :span="8">
                    <div class="item-col">
                        <div class="col-title">业务类型：</div>
                        <div class="col-txt">{{'------'}}</div>
                    </div>
                </el-col>    
            </el-row>
        </div>
    </div>


    <div class='module-box'>
        <div class="title-box">服务团队</div>
        <!-- <p class="clear"></p> -->
        <p style="margin:40px 0 10px 30px;font-size:14px;">担责团队</p>
        <el-row :gutter="20" class="row-box" style="margin:0 auto 25px; border-bottom:1px solid #ebebeb;padding-bottom:10px">
            <el-col :span="24">
                <div class="item-col">
                    <div class="col-title" style="width:auto;margin-left:22px;">
                        {{servicesTeam.liabilityAreaName || '---'}}/{{servicesTeam.liabilitySubName || '---'}}/{{servicesTeam.liabilityDeptName || '---'}}
                        <el-button type="primary" size="small" style="margin-left:20px">更换团队</el-button>
                    </div>
                </div>
            </el-col>    
        </el-row>
        <p style="margin:40px 0 10px 30px;font-size:14px;">服务人员</p>
        <el-row :gutter="20" class="row-box" style="margin:0 auto 25px; border-bottom:1px solid #ebebeb;padding-bottom:10px">
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">设计师：</div>
                    <div class="col-txt">{{servicesTeam.designerEmpName || '------'}}</div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">联系方式：</div>
                    <div class="col-txt">{{servicesTeam.designerPhone || '------'}}</div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">设计师团队：</div>
                    <div class="col-txt">
                        {{servicesTeam.designerServiceName || '---'}}/{{servicesTeam.desigberAreaName || '---'}}/{{servicesTeam.designerSubName || '---'}}/{{servicesTeam.designerDeptName || '---'}}
                    </div>
                </div>
            </el-col>     
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">制作员：</div>
                    <div class="col-txt">{{servicesTeam.makerEmpName || '------'}}</div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">联系方式：</div>
                    <div class="col-txt">{{servicesTeam.makerPhone || '------'}}</div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">制作员团队：</div>
                    <div class="col-txt">
                        {{servicesTeam.makerServiceName || '---'}}/{{servicesTeam.makerAreaName || '---'}}/{{servicesTeam.makerSubName || '---'}}/{{servicesTeam.makerDeptName || '---'}}
                    </div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">设计助理：</div>
                    <div class="col-txt">{{servicesTeam.entryEmpName || '------'}}</div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">联系方式：</div>
                    <div class="col-txt">{{servicesTeam.entryPhone || '------'}}</div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">设计助理团队：</div>
                    <div class="col-txt">
                        {{servicesTeam.entryServiceName || '---'}}/{{servicesTeam.entryAreaName || '---'}}/{{servicesTeam.entrySubName || '---'}}/{{servicesTeam.entryDeptName || '---'}}
                    </div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">质检员：</div>
                    <div class="col-txt">{{servicesTeam.qualityInspectorName || '------'}}</div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">联系方式：</div>
                    <div class="col-txt">{{servicesTeam.qualityInspectorPhone || '------'}}</div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">质检员团队：</div>
                    <div class="col-txt">
                        {{servicesTeam.qualityInspectorOrgFullName || '------'}}
                    </div>
                </div>
            </el-col>   
        </el-row>
        <p style="margin:40px 0 10px 30px;font-size:14px;">服务管家</p>
        <el-row :gutter="20" class="row-box" style="margin:0 auto 25px;">
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">管家：</div>
                    <div class="col-txt">{{servicesTeam.butlerName || '------'}}</div>
                </div>
            </el-col>    
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">联系方式：</div>
                    <div class="col-txt">{{servicesTeam.butlerPhone || '------'}}</div>
                </div>
            </el-col>   
            <el-col :span="8">
                <div class="item-col">
                    <div class="col-title">工作邮箱：</div>
                    <div class="col-txt">{{servicesTeam.butlerMail || '------'}}</div>
                </div>
            </el-col>    
        </el-row>
    </div>

    <div class="footer-box">
        <el-button @click="cancel">关闭</el-button>
    </div> 
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import getServicesInfo from '@/api/1710-get-service-order-sevice-order-info-get-cust-info-{serviceorderid}'
import getServicesContent from '@/api/1811-get-service-order-sevice-order-info-get-service-sontent-{serviceorderid}'
import getServicesTeam from '@/api/1817-get-service-order-sevice-order-info-get-service-team-{serviceorderid}'
// import getServicesProgress from '@/api/1823-get-service-order-sevice-order-info-get-service-order-progress-{serviceorderid}'
import ServiceProgress from './components/service-progress'
import btn from './components/btns'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    btn,
    ServiceProgress
},
data() {
//这里存放数据
return {
    // 服务商类型 1个人 2企业
    formCustInfo: [
        {
            title: '客户信息', keys: {custName: '客户名称', memberCode: '会员账号', memberLinkmanPhone: '会员联系方式', 
            saleChannel: '售卖渠道', salerName: '保护商务',
            salerPhone: '商务联系方式', linkmanName: '负责人',
            linkmanMail: '负责人邮箱', linkmanPhone: '负责人联系方式'}
        }
        
    ],
    servicesInfo: {},
    servicesContent: {},
    servicesTeam: {},
    productFile: [],
    designFile: [],
    btns: []
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    cancel () {}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log(this.$route.params.code, 98890)
    // 客户信息
    getServicesInfo({serviceOrderId: this.$route.params.id}).then(res => {
        this.servicesInfo = res.data || {}
    })
    // 服务内容
    getServicesContent({serviceOrderId: this.$route.params.id}).then(res => {
        this.servicesContent = res.data || {}
        this.productFile = res.data.serviceAnnexList['1'] || []
        this.designFile = res.data.serviceAnnexList['2'] || []
    })
    // 服务团队
    getServicesTeam({serviceOrderId: this.$route.params.id}).then(res => {
        this.servicesTeam = res.data || {}
    })
    // 服务进度
    // getServicesProgress().then(res => {
    //     console.log(res.data, 9999)
    // })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
@import url("../system-setting/provider/style.scss");
.row-box{
    margin:25px auto;
}
.progress_box{
    width:calc(100% - 60px);
    margin: 100px auto 30px;
}
.pro_box{
    width:100%;
    height:70px;
    border-top:1px solid #ebebeb;
    border-bottom:1px solid #ebebeb;
    margin:0 auto;
}
.item-col{
    clear: both;
    // background: #0f0;
    height:44px;
    line-height: 44px;
    font-size:12px;
    .clear{
        clear: both;
    }
    .col-title{
        width:100px;
        text-align: right;
        float:left;
        margin:0;
        color:#999;
    }
    .col-txt{
        width:calc(100% - 110px);
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        float: left;
    }
}
</style>