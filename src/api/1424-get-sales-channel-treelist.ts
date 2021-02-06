
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1424
 * 生成日期：Sat Feb 06 2021 15:26:33 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：树形列表
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sales-channel/treelist',
        method:'GET',
        params:params
    })
}