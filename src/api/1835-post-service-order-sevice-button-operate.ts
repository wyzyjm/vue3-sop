
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1835
 * 生成日期：Wed Mar 10 2021 17:24:03 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：服务按钮
 * 创建人：ceone
 */
export interface ResBody {
}

export interface ReqBody {
  annexList?:any[]          /**附件ID集合*/
  buttonType:string         /**按钮类型*/
  configId?:number          /**配置ID*/
  demandContent?:string     /**需求*/
  deptId?:string            /**部门ID*/
  empId?:string             /**员工ID*/
  personScoreJson?:any[]    /**评分结果*/
  reason?:string            /**原因*/
  serviceCode:string        /**服务单号*/
  serviceId?:number         /**服务商ID*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice/button/operate',
        method:'POST',
        data:params
    })
}