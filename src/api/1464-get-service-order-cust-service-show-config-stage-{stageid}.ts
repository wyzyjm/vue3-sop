
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1464
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：通过id查询客户呈现阶段
 * 创建人：wuzongle@300.cn
 */
export interface Data {
  id:number              /**主键*/
  stageCode:string       /**阶段code*/
  stageName:string       /**阶段名称*/
  orderSort:number       /**排序*/
  noStartTerm:string     /**未开始术语*/
  progressTerm:string    /**进行中术语*/
  finishedTerm:string    /**已完成术语*/
}

export interface ResBody {
  code:string      
  status:number    
  msg:string       
  data:Data        
}

export interface ReqParams {
  stageId:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/stage/{stageId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}