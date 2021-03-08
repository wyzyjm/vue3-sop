
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1366
 * 生成日期：Mon Mar 08 2021 10:22:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：角色组列表查询
 * 创建人：肖晓华
 */
export interface Data {
  currentPage:number    
  list:any[]            
  pageSize:number       
  total:number          
  totalPage:number      
}

export interface ResBody {
  code:string      
  data:Data        
  msg:string       
  status:number    
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/role/group/list',
        method:'GET',
        params:params
    })
}