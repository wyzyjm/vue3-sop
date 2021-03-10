
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1414
 * 生成日期：Mon Mar 08 2021 10:22:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：启用/停用
 * 创建人：杨一点
 */
export interface Data {
  id:number                          
  createBy:string                    
  createTime:string                  
  updateTime:string                  
  deleteStatus:boolean               
  name:string                        
  code:string                        
  businessTypeId:number              
  businessTypeName:string            
  salesChannelId:number              
  salesChannelName:null              
  completeSalesChannelName:string    
  status:number                      
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqBody {
  id:number        
  status:number    
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/product-line/status',
        method:'PUT',
        data:params
    })
}