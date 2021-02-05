<!-- 上传 -->
<template>
    <!--身份证上传-->
    <div class="file-box" v-if="type == 'idcard'">
        <div class="item-upload">
            <div v-if="!form.businessLicenceUrl">
            <input
                @change="uploadImg($event,'businessLicenceUrl')"
                id="businessLicenceUrl"
                type="file"
                accept="image/*"
                class="hide_input"
            >
            <i class="el-icon-plus icon"></i>
            <span>上传</span>
            </div>
            <div v-else>
            <img :src="form.businessLicenceUrl" class="upload_img">
            <i
                class="el-icon-error close"
                @click.stop.prevent="deletePic('businessLicenceUrl')"
            ></i>
            </div>
        </div>
        <div class="item-upload">
            <div v-if="!form.businessLicenceUrl">
            <input
                @change="uploadImg($event,'businessLicenceUrl')"
                id="businessLicenceUrl"
                type="file"
                accept="image/*"
                class="hide_input"
            >
            <i class="el-icon-plus icon"></i>
            <span>上传</span>
            </div>
            <div v-else>
            <img :src="form.businessLicenceUrl" class="upload_img">
            <i
                class="el-icon-error close"
                @click.stop.prevent="deletePic('businessLicenceUrl')"
            ></i>
            </div>
        </div>
        <div class="item-exp">
            <i class="iconfont iconcredentials_icon icon1"></i>
            <span>示例图</span>
            <i class="iconfont iconfangdajing icon2"></i>
        </div>
        <p style="width:100%;height:1px;clear:both;"></p>
        <p class="item-tips">
              <span class="span1">正面（人像面）</span>
              <span class="span2">反面（国徽面）</span>
        </p>
    </div>
    <!--单张-->
    <div class="file-box" v-else>
        <div class="item-upload">
            <div v-if="!form.businessLicenceUrl">
            <input
                @change="uploadImg($event,'businessLicenceUrl')"
                id="businessLicenceUrl"
                type="file"
                accept="image/*"
                class="hide_input"
            >
            <i class="el-icon-plus icon"></i>
            <span>上传</span>
            </div>
            <div v-else>
            <img :src="form.businessLicenceUrl" class="upload_img">
            <i
                class="el-icon-error close"
                @click.stop.prevent="deletePic('businessLicenceUrl')"
            ></i>
            </div>
        </div>
        <div class="item-exp">
            <i class="iconfont iconcredentials_icon icon1"></i>
            <span>示例图</span>
            <i class="iconfont iconfangdajing icon2"></i>
        </div>
        <p style="width:100%;height:1px;clear:both;"></p>
        <p class="item-tips">只支持jpeg，jpg，png格式，最大为5MB</p>
    </div>    
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
props: ['type'],
components: {},
data() {
//这里存放数据
return {
    form: {
        businessLicenceUrl: ''
    }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
        .file-box{
            width:100%;
            height:120px;
            margin-top:10px;
            font-size:12px;
            // background: #0f0;
            .item-exp{
                width:90px;
                height:90px;
                border-radius: 3px;
                border: 1px solid #fbfbfb;
                background: #f8f8f8;
                border: 1px solid #e1e1e1;
                float:left;
                color:#e1e1e1;
                .icon1{
                    font-size: 60px;
                    display:block;
                    margin:15px 0 0 9px;
                    
                }
                span{
                    color:#666666;
                    margin:2px 0 0 20px;
                    display: block;
                    float: left;
                }
                .icon2{
                    font-size: 15px;
                    float: left;
                    font-weight: bold;
                    margin:0px 0 0 5px;
                    cursor: pointer;
                }
            }
            .item-upload{
                width:90px;
                height:90px;
                float: left;
                margin-right:16px;
                background: #f8f8f8;
                position: relative;
                border: 1px solid #e1e1e1;
                border-radius: 3px;
                cursor: pointer;
                .icon{
                    font-size: 18px;
                    color:rgba(0,0,0,0.45);
                    margin:26px 0 25px 36px;
                }
                span{
                    color: rgba(0,0,0,0.65);
                    display: block;
                    text-align: center;
                    line-height: 0;
                }
                .hide_input{
                    width:100%;
                    height:100%;
                    opacity:0;
                    position:absolute;
                    left:0;top:0;
                    cursor: pointer;
                }
            }
            .item-tips{
                // clear: both;
                margin-top:-10px;
                color: rgba(0,0,0,0.45);
                .span1{
                    margin-left:10px;
                }
                .span2{
                    margin-left:23px;
                }
            }
        }
    
</style>