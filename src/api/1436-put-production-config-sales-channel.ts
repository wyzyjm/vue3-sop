
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1436
 * 生成日期：Mon Mar 01 2021 15:39:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：更新
 * 创建人：杨一点
 */
export interface Data {
  id:number               
  createTime:string       
  updateTime:string       
  deleteStatus:boolean    
  name:string             
  code:string             
  parentId:number         
  status:number           
  description:string      
  allParentIds:string     
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
  code?:string    
  name?:string    
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/sales-channel',
        method:'PUT',
        data:params
    })
}