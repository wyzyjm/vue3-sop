
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1472
 * 生成日期：Mon Mar 01 2021 15:39:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：编辑客户呈现阶段
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqParams {
  stageId:string    /**阶段id*/
}

export interface ReqBody {
  stageCode:string           /**阶段code*/
  stageName:string           /**阶段名称*/
  custShowConfigId:number    /**客户呈现配置id*/
  orderSort:string           /**排序*/
  noStartTerm:string         /**未开始术语*/
  progressTerm:string        /**进行中术语*/
  finishedTerm:string        /**已完成术语*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config/stage/{stageId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}