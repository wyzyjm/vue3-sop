
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1466
 * 生成日期：Mon Mar 08 2021 10:22:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：编辑客户呈现配置
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:string    
  msg:string       
}

export interface ReqParams {
  id:string    /**主键id*/
}

export interface ReqBody {
  flowShowName:string         /**流程名称*/
  flowShowCode:string         /**名称编码*/
  businessFlowDefId:string    /**业务流程定义id*/
  stageGroupDTOList:any[]     
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/{id}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}