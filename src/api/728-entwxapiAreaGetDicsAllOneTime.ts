
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/728
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：通用获取字典值接口-王志军
 */
export interface SecList {
  code:string    
  mark:string    
  name:string    
}

export interface Items {
  code:string        
  mark:string        
  name:string        
  secList:SecList    
}

export interface Data {
  items:Items    
}

export interface ResBody {
  msg:string       
  status:number    
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/area/getDicsAllOneTime',
        method:'GET',
        params:params
    })
}