
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1492
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：更新
 * 创建人：杨一点
 */
export interface Data {
  id:number                  
  createTime:string          
  updateTime:string          
  name:string                
  code:string                
  type:string                
  unit:string                
  businessTypeId:number      
  businessTypeName:string    
  serviceContent:string      
  status:number              
  createBy:string            
  updateBy:string            
  priority:number            
  propertyList:any[]         
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
  type?:string              
  unit?:string              
  priority?:number          
  businessTypeId?:number    
  serviceContent?:string    
  status?:number            
  propertyList?:any[]       
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/service-product',
        method:'PUT',
        data:params
    })
}