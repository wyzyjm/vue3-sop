
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1444
 * 生成日期：Tue Mar 09 2021 13:47:48 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加呈现配置
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
}

export interface ReqBody {
  flowShowName:string         /**服务单呈现名称*/
  flowShowCode:string         /**名称编码*/
  businessFlowDefId:number    /**服务流程名称*/
  stageGroupDTOList:any[]     
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/addConfig',
        method:'POST',
        data:params
    })
}