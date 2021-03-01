
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1370
 * 生成日期：Mon Mar 01 2021 12:29:29 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：角色组修改
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
  roleGroupName?:string    
  remark?:string           
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/role/group/update',
        method:'POST',
        data:params
    })
}