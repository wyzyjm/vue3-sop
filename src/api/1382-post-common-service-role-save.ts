
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1382
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：角色添加
 * 创建人：肖晓华
 */
export interface ResBody {
  code:null        
  data:null        
  msg:null         
  status:number    
}

export interface ReqBody {
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
        url:'/common-service/role/save',
        method:'POST',
        data:params
    })
}