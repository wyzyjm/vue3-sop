
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1420
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：生产组织授权-组织树
 * 创建人：肖晓华
 */
export interface ResBody {
  code:string      
  data:any[]       
  msg:string       
  status:number    
}

export interface ReqQuery {
  sourceId:string      
  sourceType:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/org/list/tree',
        method:'GET',
        params:params
    })
}