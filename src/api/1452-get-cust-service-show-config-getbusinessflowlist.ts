
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1452
 * 生成日期：Sat Feb 06 2021 16:35:53 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：获取业务流程列表
 */
export interface ResBody {
  status:number    
  code:string      
  data:any[]       
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    const url = '/cust-service-show-config/getBusinessFlowList'.replace(/{([^}]+)}/g, (r, $1) => {
        return params[$1] || ''
    })
    return request({
        url,
        method:'GET',
        params:params
    })
}