
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1332
 * 生成日期：Mon Mar 08 2021 10:15:06 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：添加员工
 * 创建人：付兵浩
 */
export interface ResBody {
  data:boolean     /**true表示成功，其它失败*/
  code:string      
  status:string    /**200表示请求成功*/
}

export interface RoleMap {
  field_43:string    /**key为角色id，value为角色名称*/
}

export interface ReqBody {
  employeeName:string    /**员工姓名*/
  orgId:string           /**机构id*/
  workMail:string        /**邮箱*/
  officePhone:string     /**办公电话*/
  mobile:string          /**手机*/
  position:string        /**岗位*/
  sourceId:string        /**服务商id*/
  password?:string       /**密码*/
  roleMap:RoleMap        
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-employee/add',
        method:'POST',
        data:params
    })
}