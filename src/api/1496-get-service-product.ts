
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1496
 * 生成日期：Sun Feb 07 2021 15:27:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：根据id查询
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

export interface ReqQuery {
  id:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-product',
        method:'GET',
        params:params
    })
}