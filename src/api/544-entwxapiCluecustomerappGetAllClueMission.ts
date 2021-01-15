
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/544
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：跟进中线索-任务筛选项-王金峰
 */
export interface Data {
  clueMissionList:array    
}

export interface ResBody {
  status:number    //状态码 101为成功
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string        //员工id
  exception:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/cluecustomerapp/getAllClueMission',
        method:'GET',
        params:params
    })
}