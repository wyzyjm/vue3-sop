
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2321
 * 生成日期：Tue Mar 23 2021 16:19:25 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：获取设计稿信息
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  annexFileName:string       /**附件名称*/
  annexFileShowUrl:string    /**附件预览地址*/
}

export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  orderCode:string    /**服务单号*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/design',
        method:'GET',
        params:params
    })
}