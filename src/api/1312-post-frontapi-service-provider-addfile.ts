
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1312
 * 生成日期：Sun Feb 07 2021 15:27:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.1
 * 接口名称：添加服务商的服务协议文档
 */
export interface ResBody {
  code:string      /**SYS000表示成功*/
  status:number    
  data:boolean     /**true表示成功，false表示失败*/
}

export interface ReqBody {
  providerId:string    
  stopTime:string      
  fileList:any[]       
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider/addfile',
        method:'POST',
        data:params
    })
}