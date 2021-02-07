
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1460
 * 生成日期：Sun Feb 07 2021 15:27:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：阶段节点列表
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
        url:'/cust-service-show-config/nodeList/{stageId}'.replace(/{([^}]+)}/g, (r, $1) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}