
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/560
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：线索池-总监分配系统线索给部门、商务-王金峰
 */
export interface Data {
  message:string    //用于成功后展示多少个成功，多少个失败
}

export interface ResBody {
  status:number    //状态码 101为成功
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            //员工id
  requestParams:string    //missionName：任务名称     entIds：entId（多个用逗号分割）     deptId：部门id     salerId：商务id
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/cluecustomerapp/majorSysclueAssign',
        method:'GET',
        params:params
    })
}