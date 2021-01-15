
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/600
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-跟进中商机-商机详情-王志军
 */
export interface SjIntentInfoVo {
  custId:string             //客户ID
  custName:string           //客户名称
  sjCode:string             //商机单号
  createTime:number         //创建时间
  linkmanName:string        //联系人名称
  sex:string                //性别 1男2女
  sexLabel:string           //性别 
  position:string           //职位
  mobile:string             //手机
  tel:string                //座机
  mail:string               //邮箱
  provinceCode:string       //省code
  cityCode:string           //市code
  districtCode:string       //区code
  address:string            //地址
  qq:string                 //qq
  wechat:string             //微信
  industryOneCode:string    //一级行业
  industryTwoCode:string    //二级行业
  custrequirement:string    //客户需求
  remark:string             //备注
  createrName:string        //创建人
  createrOrgName:null       //创建组织
  busiOpporLabel:string     //商机标签
  sjSource:number           //商机来源 1市场部 2管家
  sjSourceLabel:string      //商机来源
  industryLabel:string      //客户行业
  custRegion:string         //客户地区
  annexList:array           
  products:array            
  promoteTitle:string       //活动
  channelTitle:string       //渠道
  sourceLabel:string        //来源
}

export interface Data {
  sjIntentInfoVo:SjIntentInfoVo    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  requestParams:string    
  empId:string            
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/sjcust/sjDetail',
        method:'GET',
        params:params
    })
}