
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/584
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-分页查询挑战任务-王金峰
 */
export interface Data {
  totalCount:number     //记录总条数
  pageSize:number       //每页条数
  list:array            
  currentPage:number    
}

export interface ResBody {
  status:number    //状态码   101为成功
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //salerMonth：商务月    areaId：区域ID    subcompanyId：分司id
deptId：部门id    salerId：商务id
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/hierarchicalOperation/getChallengeTaskPage',
        method:'GET',
        params:params
    })
}