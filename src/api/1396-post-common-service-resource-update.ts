
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1396
 * 生成日期：Tue Mar 09 2021 13:47:48 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：资源修改
 * 创建人：肖晓华
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
        url:'/common-service/resource/update',
        method:'POST',
        data:params
    })
}