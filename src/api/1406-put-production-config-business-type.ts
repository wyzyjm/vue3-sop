
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1406
 * 生成日期：Mon Mar 01 2021 12:29:29 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：更新业务类型
 * 创建人：杨一点
 */
export interface Data {
  id:number               
  createTime:string       
  updateTime:string       
  deleteStatus:boolean    
  name:string             
  code:string             
  description:string      
  status:number           
  priority:string         
  createBy:string         
  updateBy:string         
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqBody {
  id?:number        
  name?:string      
  code?:string      
  status?:number    
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/business-type',
        method:'PUT',
        data:params
    })
}