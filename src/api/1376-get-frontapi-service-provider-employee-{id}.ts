
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1376
 * 生成日期：Sun Feb 07 2021 15:27:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：员工详细接口
 */
export interface RoleMap {
  1:string    /**key为角色id，value为角色名称*/
}

export interface ResBody {
  createBy:string         /**创建人*/
  createTimeStr:string    /**创建时间*/
  employeeId:string       /**员工id*/
  employeeName:string     /**姓名*/
  id:number               /**员工唯一标识*/
  isSuper:number          /**是否超管*/
  mobile:string           /**手机*/
  officePhone:string      /**座机*/
  orgId:string            /**组织id*/
  orgName:string          /**组织名称*/
  position:string         /**岗位*/
  roleMap:RoleMap         /**角色map*/
  sourceId:number         /**服务商id*/
  sourceName:string       /**服务商名称*/
  sourceType:number       /**1：hr，2：服务商*/
  state:number            /**状态，启用，停用*/
  stateName:string        
  updateBy:string         
  updateTimeStr:string    /**更新时间*/
  workMail:string         /**邮箱*/
}

export interface ReqParams {
  id:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider-employee/{id}'.replace(/{([^}]+)}/g, (r, $1) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}