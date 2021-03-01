
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1316
 * 生成日期：Mon Mar 01 2021 11:02:48 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加组织
 * 创建人：付兵浩
 */
export interface ResBody {
  code:string      /**SYS000表示请求成功*/
  status:string    
  msg:string       
  data:boolean     /**true表示成功，false表示失败*/
}

export interface ReqBody {
  orgId:string       /**组织code*/
  orgName:string     /**组织名称*/
  remark:string      /**描述*/
  status:string      /**1启用0禁用*/
  parentId:string    /**一级节点的parentId为0*/
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/service-provider-org/add',
        method:'POST',
        data:params
    })
}