
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1528
 * 生成日期：Fri Feb 19 2021 10:31:51 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：批量更新
 * 创建人：杨一点
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:null        
}

export interface ReqBody {
  id:number                          
  baseCycle?:number                  /**基准*/
  sameStyleTimeLimit?:number         /**同风格*/
  differentStyleTimeLimit?:number    /**不同风格*/
  blueWarningCycle?:number           /**蓝色*/
  yellowWarningCycle?:number         /**黄色*/
  orangeWarningCycle?:number         /**橙色*/
  redWarningCycle?:number            /**红色*/
  dateType?:number                   /**0自然日, 1工作日*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params[])=> { 
    return request({
        url:'/service-product/production-cycle/batch',
        method:'PUT',
        data:params
    })
}