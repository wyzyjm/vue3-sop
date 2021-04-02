
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2525
 * 生成日期：Fri Apr 02 2021 16:24:12 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：复制客户呈现配置
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:boolean     
}

export interface ReqQuery {
  configId:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/copy',
        method:'GET',
        params:params
    })
}