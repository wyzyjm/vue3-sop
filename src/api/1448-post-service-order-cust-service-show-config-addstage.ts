
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1448
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加阶段
 * 创建人：wuzongle@300.cn
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
        url:'/service-order/cust-service-show-config/addStage',
        method:'POST',
        data:params
    })
}