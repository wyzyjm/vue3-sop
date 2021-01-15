
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/540
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：获取企业微信签名接口--营销平台后台使用-付兵浩
 */
export interface Data {
  timestamp:string    //时间戳
  nonceStr:string     //随机串
  signature:string    //签名
}

export interface ResBody {
  status:number    //101表示成功，其它异常
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  url:string    
}

export interface ReqParams {
  companyId:string    
  appId:string        
}

interface Params extends ReqQuery,ReqParams {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/backApi/api-enterprise-wx/get-signature/{companyId}/{appId}',
        method:'GET',
        params:params
    })
}