
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1386
 * 生成日期：Sat Feb 06 2021 16:35:53 GMT+0800 (GMT+08:00)
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
    const url = '/role/state'.replace(/{([^}]+)}/g, (r, $1) => {
        return params[$1] || ''
    })
    return request({
        url,
        method:'POST',
        data:params
    })
}