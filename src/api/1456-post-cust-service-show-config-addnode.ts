
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1456
 * 生成日期：Sun Feb 07 2021 15:27:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：添加阶段节点
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqBody {
  custShowConfigId:number      /**展示流程定义id*/
  stageId:number               /**阶段id*/
  nodeName:string              /**节点名称*/
  nodeCode:string              /**节点code*/
  noStartRetm:string           /**未开始术语*/
  progressTerm:string          /**进行中术语*/
  progressStatusName:string    /**进行中状态名称*/
  finishedTerm:string          /**已完成术语*/
  finishedStatusName:string    /**已完成状态名称*/
  businessNodeIds:string       /**业务流程节点id集合*/
  orderSort:number             /**序号*/
  showContentCode:string       /**显示内容（表单code）*/
  showDocumentFileId:number    /**显示文档*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config/addNode',
        method:'POST',
        data:params
    })
}