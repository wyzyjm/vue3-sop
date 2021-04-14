<!--服务商类型-->
<template>
  <div class="box">
      <div class="title-box">选择服务商类型</div>
      <div class="flex-box">
          <div class="item-flex" 
          :class="(curId == item.value) ? 'active' : ''"
          v-for="(item, idx) in list" :key="idx"
          @click="handleType(item.value)">
              <i class="icon iconfont" :class="item.icon"></i>
              <p class="title">{{item.label}}</p>
              <span class="desc">{{item.desc}}</span>
              <i class="iconfont iconxuanzhongjiaobiao check" v-show="curId == item.value"></i>
          </div>
      </div>
      <el-button type="primary" class="btn" @click="save">确定</el-button>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                curId: 1,
                list: [
                    {value: 1, label: '个人', desc: '务了包括制造、服务、IT互联网、建筑与房地产、外贸、物流、零售等14个主流行业近百个细分行业120万+企业客户', icon: 'iconiconfontzhizuobiaozhun023104'},
                    {value: 2, label: '企业', desc: '务了包括制造、服务、IT互联网、建筑与房地产、外贸、物流、零售等14个主流行业近百个细分行业120万+企业客户', icon: 'iconqiye'}
                ]
            }
        },
        methods: {
            handleType (type) {
                this.curId = type
            },
            save () {
                this.$emit('changeStatus', this.curId)
            }
        }
    }
</script>
<style lang='scss' scoped>
@import url("../style.scss");
    .box{
        width:100%;
        height:700px;
        background: #fff;
        border: 1px solid #EBEBEB;
        border-radius: 6px;
        .btn{
            width:120px;
            margin:80px auto;
            display: block;
        }
        .flex-box{
            display: flex;
            align-items:center;
            justify-content:space-around;
            margin-top:100px;
            .active{
                border:1px solid #19B298 !important
            }
            .item-flex{
                width:330px;
                height:350px;
                background: #fff;
                text-align: center;
                border: 1px solid #e1e1e1;
                border-radius: 6px;
                box-shadow: 0px 5px 5px 0px rgba(245, 245, 245, 0.5);
                position: relative;
                cursor: pointer;
                .icon{
                    width:100%;
                    font-size: 80px;
                    color:#19B298;
                    display: block;
                    padding-top:50px;
                }
                .title{
                    font-size: 14px;
                    color: #333;
                    margin:20px 0;
                }
                .desc{
                    display: block;
                    width:calc(100% - 78px);
                    max-height: 100px;
                    margin-left:35px;
                    overflow: hidden;
                    // background: #0f0;
                    color:#666;
                    font-size: 12px;
                    line-height: 24px;
                    opacity: 0.8;
                }
                .check{
                    color:#19B298;
                    font-size: 60px;
                    position: absolute;
                    right:0;
                    bottom: 0;
                }
            }
        }
    }
</style>