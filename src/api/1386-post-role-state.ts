
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1386
 * 生成日期：Tue Feb 02 2021 14:47:00 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：角色状态启用停用
 */
export interface ResBody {
  code:null        
  data:null        
  msg:null         
  status:number    
}

export interface ReqBody {
  id:string       
  state:string    
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/role/state',
        method:'POST',
        data:params
    })
}