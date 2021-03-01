
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1454
 * 生成日期：Mon Mar 01 2021 12:29:29 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：校验客户呈现阶段编码是否唯一
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  msg:string       
}

export interface ReqQuery {
  stageCode:string    
}

export interface ReqParams {
  showConfigId:string    /**客户呈现配置id*/
}

interface _Params extends ReqQuery,ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/cust-service-show-config/checkStageCode/{showConfigId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}