
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2351
 * 生成日期：Wed Mar 24 2021 09:05:59 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：需求确认
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:boolean     
}

export interface ReqBody {
  orderCode:string    /**服务单号*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/confirm_demand',
        method:'POST',
        data:params
    })
}