
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/852
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：线索池-经理分配-王金峰
 */
export interface ResBody {
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //salerId:商务id   entIds：entId，多个用逗号拼接
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/cluecustomerapp/managerSysclueAssign',
        method:'GET',
        params:params
    })
}