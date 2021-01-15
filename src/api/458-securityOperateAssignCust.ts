
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/458
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：销售管理-代办任务-经理分配客户
 */
export interface ReqQuery {
  custIds:string             //逗号分隔
  assignToDeptId:?string     
  assignToSalerId:?string    
  isToMyself:string          //是否分配给自己
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/operate/assignCust',
        method:'GET',
        params:params
    })
}