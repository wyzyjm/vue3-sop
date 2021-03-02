
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1348
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：角色列表查询
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
    return request({
        url:'/role/list',
        method:'GET',
        params:params
    })
}