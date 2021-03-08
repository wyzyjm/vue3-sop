
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1480
 * 生成日期：Mon Mar 08 2021 10:15:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：编辑客户呈现阶段节点
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
}

export interface ReqParams {
  nodeId:string    /**节点id*/
}

export interface ReqBody {
  id?:number                    /**节点id*/
  custShowConfigId?:number      /**配置id*/
  stageId?:number               /**阶段id*/
  nodeName?:string              /**环节名称*/
  nodeCode?:string              /**环节code*/
  noStartRetm?:string           /**未开始术语*/
  progressTerm?:string          /**进行中术语*/
  progressStatusName?:string    /**进行中状态名称*/
  finishedTerm?:string          /**已完成术语*/
  finishedStatusName?:string    /**已完成状态名称*/
  businessNodeIds?:string       /**业务流程节点id集合*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/node/{nodeId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1]  
        delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}