
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1476
 * 生成日期：Mon Mar 01 2021 12:29:29 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：通过id查询客户呈现阶段节点
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  id:number                    /**节点id*/
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
}

export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:Data        
}

export interface ReqParams {
  nodeId:string    /**节点id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config/node/{nodeId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}