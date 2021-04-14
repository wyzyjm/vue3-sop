
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2165
 * 生成日期：Fri Mar 19 2021 09:32:45 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据code查询单个产品
 * 创建人：杨一点
 */
export interface Data {
  id:number              
  createTime:string      
  updateTime:string      
  deleteStatus:number    
  name:string            
  code:number            
  version:string         
  createBy:null          
  updateBy:null          
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  code:string    
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/production-config/product/code',
        method:'GET',
        params:params
    })
}