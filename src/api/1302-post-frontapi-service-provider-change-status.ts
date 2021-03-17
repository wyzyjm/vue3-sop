
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1302
 * 生成日期：Wed Mar 17 2021 11:31:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：改变服务商状态
 * 创建人：付兵浩
 */
export interface ResBody {
  status:string    
  code:string      
  data:string      /**true表示成功，false表示失败*/
}

export interface ReqBody {
  basicStatus?:number    /**0:服务中，1:暂停，2：清退，3：关闭*/
  id?:number             
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider/change-status',
        method:'POST',
        data:params
    })
}