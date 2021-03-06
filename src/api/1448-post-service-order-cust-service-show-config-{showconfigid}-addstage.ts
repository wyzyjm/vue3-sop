
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1448
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加阶段
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
}

export interface ReqParams {
  showConfigId:string    
}

export interface ReqBody {
  stageName:string       /**阶段名称*/
  stageCode:string       /**阶段code*/
  orderSort:number       /**序号*/
  noStartTerm:string     /**未开始术语*/
  progressTerm:string    /**进行中术语*/
  finishedTerm:string    /**已完成术语*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/{showConfigId}/addStage'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}