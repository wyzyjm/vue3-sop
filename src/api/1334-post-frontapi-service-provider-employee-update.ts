
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1334
 * 生成日期：Tue Mar 09 2021 13:47:49 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：更新员工信息
 * 创建人：付兵浩
 */
export interface ResBody {
  data:boolean     /**true表示成功，其它失败*/
  code:string      
  status:string    
}

export interface RoleMap {
  field_56:string    /**key为角色id，value为角色名称*/
}

export interface ReqBody {
  id:string              /**唯一标识*/
  employeeId:string      /**员工id*/
  employeeName:string    /**员工姓名*/
  orgId:string           /**机构id*/
  workMail:string        /**邮箱*/
  officePhone:string     /**办公电话*/
  mobile:string          /**手机*/
  position:string        /**岗位*/
  sourceId:string        /**服务商id*/
  state:string           /**1启用0禁用*/
  roleMap:RoleMap        
}

interface _Params extends ReqBody {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/common-service/frontApi/service-provider-employee/update',
        method:'POST',
        data:params
    })
}