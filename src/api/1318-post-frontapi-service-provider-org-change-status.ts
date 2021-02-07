
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1318
 * 生成日期：Sun Feb 07 2021 11:03:02 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：修改组织状态
 */
export interface ResBody {
  data:string      
  code:string      
  status:string    
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider-org/change-status',
        method:'POST',
        data:params
    })
}