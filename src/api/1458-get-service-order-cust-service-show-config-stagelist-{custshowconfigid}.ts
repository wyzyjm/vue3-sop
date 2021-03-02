
/**
 * 文档地址：http://10.12.52.224:3000/project/119/interface/api/1458
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：阶段列表
 * 创建人：wuzongle@300.cn
 */
export interface ResBody {
  code:string      
  status:number    
  data:any[]       
}

export interface ReqParams {
  custShowConfigId:string    /**客户呈现配置id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/service-order/cust-service-show-config/stageList/{custShowConfigId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}