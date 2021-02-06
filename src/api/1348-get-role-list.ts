
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1348
 * 生成日期：Sat Feb 06 2021 16:35:53 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：角色列表查询
 */
export interface Data {
  currentPage:number    
  list:any[]            
  pageSize:number       
  total:number          
  totalPage:number      
}

export interface ResBody {
  code:string      /**code值*/
  data:Data        /**数据*/
  msg:string       /**消息说明*/
  status:number    /**状态值*/
}

export interface ReqQuery {
  roleName?:string       /**角色名称*/
  state?:string          /**状态*/
  roleGroupId?:string    /**角色组id*/
  isSpVisible?:string    /**是否服务商可见*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    const url = '/role/list'.replace(/{([^}]+)}/g, (r, $1) => {
        return params[$1] || ''
    })
    return request({
        url,
        method:'GET',
        params:params
    })
}