
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1392
 * 生成日期：Mon Mar 01 2021 14:58:09 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：资源树查询
 * 创建人：肖晓华
 */
export interface ResBody {
  code:string      
  data:any[]       
  msg:string       
  status:number    
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/resource/list/tree',
        method:'GET',
        params:params
    })
}