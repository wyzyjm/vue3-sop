
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1607
 * 生成日期：Mon Mar 01 2021 15:39:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：保存所有业务节点
 * 创建人：wuzongle@300.cn
 */
export interface ReqParams {
  businessFlowId:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/node/saveAll/{businessFlowId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'POST',
        data:params
    })
}