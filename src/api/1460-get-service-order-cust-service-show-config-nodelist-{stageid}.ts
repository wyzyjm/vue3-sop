
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1460
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：阶段节点列表
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  status:number    
  code:string      
  data:any[]       
}

export interface ReqParams {
  stageId:string    /**阶段id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/nodeList/{stageId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp = typeof params[$1] === 'undefined' ? '' : params[$1]
        // delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}