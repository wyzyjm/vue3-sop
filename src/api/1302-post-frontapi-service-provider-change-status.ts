
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1302
 * 生成日期：Sun Feb 07 2021 15:27:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：改变服务商状态
 */
export interface ResBody {
  status:string    
  code:string      
  data:string      /**true表示成功，false表示失败*/
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider/change-status',
        method:'POST',
        data:params
    })
}