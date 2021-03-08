
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1599
 * 生成日期：Mon Mar 08 2021 10:22:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：按钮列表
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:string    
  msg:string       
  data:any[]       
}

export interface ReqParams {
  nodeId:string                /**业务节点id*/
  serviceOrderStatus:string    /**服务单状态*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/sevice-business-flow/node/{nodeId}/{serviceOrderStatus}/buttonlist'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}