
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/590
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-下属明细（全角色）-王金峰
 */
export interface Data {
  list:array    
}

export interface ResBody {
  status:number    
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //salerMonth：商务月    areaId：区域id    subcompanyId：分司id
deptId：部门id
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/hierarchicalOperation/getAchivementForecastList',
        method:'GET',
        params:params
    })
}