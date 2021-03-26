
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2381
 * 生成日期：Fri Mar 26 2021 10:21:10 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：获取预览地址
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqQuery {
  orderCode:string    /**服务单号*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/interface/api/preview_url',
        method:'GET',
        params:params
    })
}