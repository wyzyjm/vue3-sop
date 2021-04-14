
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2435
 * 生成日期：Thu Apr 01 2021 17:11:52 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：接收上游服务单原始数据
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:boolean     
}

export interface ReqBody {
  subcompanyName?:string       /**公司名称*/
  linkManPhone?:string         /**联系人电话*/
  detail?:any[]                /**订单明细*/
  unikey?:string               /**会员唯一标识*/
  pushTime?:string             /**推送时间*/
  lang?:string                 /**语言版本*/
  areaId?:string               /**区域id*/
  businessVersion?:null        /**业务版本*/
  saler?:string                /**商务*/
  proVersion?:string           /**产品版本*/
  callbackUrl?:string          /**回调地址*/
  websiteStatus?:string        /**网站状态*/
  domain?:string               /**域名*/
  linkManMail?:string          /**联系人邮箱*/
  memberCode?:string           /**会员号*/
  custId?:string               /**客户id*/
  clientIpAddr?:string         /**产品端*/
  isSame?:string               /**是否同风格*/
  orderSource?:string          /**订单来源*/
  status?:string               /**订单状态*/
  businessType?:string         /**业务类型*/
  bossOrderList?:string        /**订单号*/
  companyName?:string          /**客户名称*/
  websiteCreateTime?:string    /**网站创建时间*/
  websiteCode?:string          /**网站号*/
  clientApp?:string            /**端*/
  productId?:string            /**产品id*/
  groupId?:string              /**分组id*/
  salerPhone?:string           /**商务电话*/
  linkManName?:string          /**联系人姓名*/
  saleOrderCode?:string        /**销售订单号*/
  businessCode?:string         /**业务编码*/
  subcompanyId?:string         /**分司id*/
  contractCode?:string         /**合同号*/
  addTime?:string              /**录单时间*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/push-sevice-order',
        method:'POST',
        data:params
    })
}