
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1567
 * 生成日期：Mon Mar 08 2021 10:22:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加业务流程节点
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  id:number    
}

export interface ResBody {
  code:string      
  status:string    
  msg:string       
  data:Data        
}

export interface ReqParams {
  businessFlowId:string    
}

export interface ReqBody {
  businessFlowNodeType:number     /**节点类型（1:开始；4:结束、2:任务）*/
  businessFlowNodeCode?:string    /**业务流程环节code*/
  businessFlowNodeName?:string    /**业务流程环节名称*/
  workFlowNodeIdsArray?:string    /**工作流节点id集合*/
  orderNum:number                 /**序号*/
  produceCycle?:number            /**生产周期*/
  warningCycle?:number            /**预警周期*/
  lastNodeId:number               /**上一节点id*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice-business-flow/node/add/{businessFlowId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}