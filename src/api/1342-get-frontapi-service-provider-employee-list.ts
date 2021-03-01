
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1342
 * 生成日期：Mon Mar 01 2021 11:02:48 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：员工列表
 * 创建人：付兵浩
 */
export interface Data {
  records:any[]          /**结果集*/
  total:number           /**总条数*/
  size:number            /**每页大小*/
  current:number         /**当前页*/
  orders:any[]           
  searchCount:boolean    
  pages:number           /**总页数*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

export interface ReqQuery {
  workMail:string      /**邮箱*/
  name:string          /**姓名*/
  state:string         /**状态*/
  providerId:string    /**服务商id*/
  orgId:string         /**组织id*/
  roleId:string        /**角色id*/
  pageNum:string       /**当前页码*/
  pageSize:string      /**每页大小*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider-employee/list',
        method:'GET',
        params:params
    })
}