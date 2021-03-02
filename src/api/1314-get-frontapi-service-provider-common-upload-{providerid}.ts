
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1314
 * 生成日期：Tue Mar 02 2021 10:40:41 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：获取服务商服务协议文档
 * 创建人：付兵浩
 */
export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:any[]       
}

export interface ReqParams {
  providerId:string    /**服务商id*/
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider/common-upload/{providerId}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}