
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1480
 * 生成日期：Sun Feb 07 2021 10:34:35 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：编辑客户呈现阶段节点
 */
export interface ReqParams {
  nodeId:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config/node/{nodeId}'.replace(/{([^}]+)}/g, (r, $1) => {
        return params[$1] || ''
    }),
        method:'POST',
        data:params
    })
}