
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1346
 * 生成日期：Tue Mar 02 2021 10:40:40 GMT+0800 (中国标准时间)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：导入人员
 * 创建人：付兵浩
 */
export interface Data {
  success:string        /**成功条数*/
  failure:string        /**失败条数*/
  errorAdress:string    /**导入失败人员下载地址*/
}

export interface ResBody {
  data:Data        
  status:string    
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-employee/import-person',
        method:'POST',
        data:params
    })
}