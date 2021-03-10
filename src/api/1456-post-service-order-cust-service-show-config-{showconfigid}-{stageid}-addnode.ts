
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1456
 * 生成日期：Tue Mar 09 2021 13:47:48 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加阶段节点
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqParams {
  showConfigId:string    
  stageId:string         
}

export interface ReqBody {
  nodeName:string                /**节点名称*/
  nodeCode:string                /**节点code*/
  noStartRetm:string             /**未开始术语*/
  progressTerm:string            /**进行中术语*/
  progressStatusName:string      /**进行中状态名称*/
  finishedTerm:string            /**已完成术语*/
  finishedStatusName:string      /**已完成状态名称*/
  businessNodeIdsArray:string    /**业务流程节点id集合*/
  orderSort:number               /**序号*/
  showContentCode:string         /**显示内容（表单code）*/
  showDocumentFileId:number      /**显示文档*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/{showConfigId}/{stageId}/addNode'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}