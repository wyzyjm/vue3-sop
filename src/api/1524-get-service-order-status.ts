
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1524
 * 生成日期：Mon Feb 08 2021 10:23:11 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：根据id查询
 * 创建人：杨一点
 */
export interface Data {
  id:number               
  createTime:string       
  updateTime:string       
  deleteStatus:boolean    
  name:string             
  code:string             
  status:number           
  description:string      
  createBy:string         
  updateBy:string         
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
        url:'/service-order-status',
        method:'GET',
        params:params
    })
}