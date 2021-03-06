
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2333
 * 生成日期：Tue Mar 23 2021 16:19:25 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：资质确认
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:boolean     
}

export interface ReqQuery {
  orderCode:string    /**服务单号*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/customer_confirm_qualification',
        method:'GET',
        params:params
    })
}