
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1547
 * 生成日期：Wed Feb 24 2021 10:44:30 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：编辑业务流程信息
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:string    
  msg:string       
}

export interface ReqParams {
  id:string    /**业务流程定义id*/
}

export interface ReqBody {
  businessFlowName:string    /**业务流程名称*/
  flowWorkDefId:string       /**工作流程定义id*/
  flowWorkDefName:string     /**工作流程定义名称*/
  describe:string            /**描述*/
}

interface _Params extends ReqParams,ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/{id}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}