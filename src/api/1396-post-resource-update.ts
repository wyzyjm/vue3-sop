
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1396
 * 生成日期：Sun Feb 07 2021 15:27:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：资源修改
 */
export interface ResBody {
  code:null        
  data:null        
  msg:null         
  status:number    
}

export interface ReqBody {
  parentId:number           
  resourceCode:string       
  resourceName:string       
  resourceType:string       
  resourceUrl:string        
  resourceUrlType:string    
  resourceIcon:string       
  resourceSort:string       
  state:string              
  id:number                 
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/resource/update',
        method:'POST',
        data:params
    })
}