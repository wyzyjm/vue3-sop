
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1710
 * 生成日期：Thu Mar 11 2021 13:17:12 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务详情-客户信息
 * 创建人：肖晓华
 */
export interface Data {
  custLinkmanInfoList:any[]    
  custName:string              /**客户名称*/
  memberCode:string            /**会员账号*/
  memberLinkmanPhone:string    /**会员联系方式*/
  saleChannel:string           /**售卖渠道*/
  salerName:string             /**保护商务*/
  salerPhone:string            /**商务联系方式*/
}

export interface ResBody {
  code:string      
  data:Data        
  msg:string       
  status:number    
}

export interface ReqParams {
  serviceOrderId:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/order/info/get/cust/info/{serviceOrderId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}