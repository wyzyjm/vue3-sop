
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1384
 * 生成日期：Mon Mar 08 2021 10:15:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：角色修改
 * 创建人：肖晓华
 */
export interface ResBody {
  code:null        
  data:null        
  msg:null         
  status:number    
}

export interface ReqBody {
  id?:string              
  roleName?:string        
  roleGroupId?:string     
  isSpVisible?:string     
  qtDesignerId?:string    
  remark?:string          
  state?:string           
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/role/update',
        method:'POST',
        data:params
    })
}