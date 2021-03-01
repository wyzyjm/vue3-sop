
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1346
<<<<<<< HEAD
 * 生成日期：Mon Mar 01 2021 11:02:48 GMT+0800 (GMT+08:00)
=======
 * 生成日期：Mon Mar 01 2021 12:29:49 GMT+0800 (GMT+08:00)
>>>>>>> cab8698de2dcc885ae863e438a9297e97677c53e
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
        url:'/frontApi/service-provider-employee/import-person',
        method:'POST',
        data:params
    })
}