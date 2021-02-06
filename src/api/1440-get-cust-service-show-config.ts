
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1440
 * 生成日期：Sat Feb 06 2021 15:26:33 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：客户呈现配置列表
 */
export interface Data {
  id:number                     
  flowShowName:string           /**服务单呈现名称*/
  flowShowCode:string           /**名称编码*/
  businessFlowDefId:number      /**业务流程定义id*/
  businessFlowDefName:string    /**对应服务流程*/
  version:string                /**版本*/
  status:number                 /**状态*/
  statusName:string             /**状态名称*/
  createTime:string             /**创建时间*/
  createBy:string               /**创建人*/
  createrName:string            /**创建人姓名*/
  updateTime:string             /**更新时间*/
  updateBy:string               /**更新人*/
  updaterName:string            /**更新人姓名*/
}

export interface ResBody {
  code:number      /**SYS0000("系统正常"),     SYS0001("系统错误"),     SYS0002("业务错误"),     SYS0003("认证失败");*/
  msg:string       /**返回信息*/
  data:Data        
  status:number    /**200为成功，非200非失败*/
}

export interface ReqQuery {
  flowShowName?:string           /**服务单名称*/
  status?:string                 /**状态（-1：停用，0：未启用，1：启用）*/
  businessFlowDefName?:string    /**流程名称*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config',
        method:'GET',
        params:params
    })
}