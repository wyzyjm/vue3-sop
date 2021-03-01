
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1440
 * 生成日期：Mon Mar 01 2021 14:58:08 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：客户呈现配置列表
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:number      /**SYS0000("系统正常"),     SYS0001("系统错误"),     SYS0002("业务错误"),     SYS0003("认证失败");*/
  msg:string       /**返回信息*/
  data:any[]       
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