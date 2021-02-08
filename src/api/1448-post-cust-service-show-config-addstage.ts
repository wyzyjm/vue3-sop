
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1448
 * 生成日期：Sun Feb 07 2021 15:27:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：添加阶段
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
}

export interface ReqBody {
  stageName:string       /**阶段名称*/
  stageCode:string       /**阶段code*/
  orderSort:number       /**序号*/
  noStartTerm:string     /**未开始术语*/
  progressTerm:string    /**进行中术语*/
  finishedTerm:string    /**已完成术语*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config/addStage',
        method:'POST',
        data:params
    })
}