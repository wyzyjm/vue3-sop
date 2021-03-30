
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/2429
 * 生成日期：Tue Mar 30 2021 09:57:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：员工批量授权
 * 创建人：肖晓华
 */
export interface ResBody {
  code:null        
  data:null        
  msg:null         
  status:number    
}

export interface ReqBody {
  employeeId:string    
  roleIds:any[]        
  sourceType:number    
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params[])=> { 
    return request({
        url:'/common-service/employee/role/save',
        method:'POST',
        data:params
    })
}