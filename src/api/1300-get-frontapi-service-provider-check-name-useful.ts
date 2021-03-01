
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1300
 * 生成日期：Mon Mar 01 2021 11:02:48 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：检查公司名称是否可用
 * 创建人：付兵浩
 */
export interface ResBody {
  code:string      
  status:string    
  data:boolean     /**true表示可以使用，false表示不可以使用*/
}

export interface ReqQuery {
  name:string    /**公司名称*/
  id?:string     /**服务商id*/
}

interface _Params extends ReqQuery {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider/check-name-useful',
        method:'GET',
        params:params
    })
}