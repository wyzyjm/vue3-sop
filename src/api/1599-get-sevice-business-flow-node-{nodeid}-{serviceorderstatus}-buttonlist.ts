
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1599
 * 生成日期：Wed Feb 24 2021 10:44:30 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：按钮列表
 * 创建人：wuzongle@300.cn
 */
export interface ReqParams {
  nodeId:string                
  serviceOrderStatus:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/sevice-business-flow/node/{nodeId}/{serviceOrderStatus}/buttonlist'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}