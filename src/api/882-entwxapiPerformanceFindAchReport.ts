
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/882
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-业绩看板-净现金到账-汇总-潘昭
 */
export interface OrgMonthReportVo {
  areaMonthAchList:string    
  subMonthAchList:string     
  deptMonthAchList:array     
  empMonthAchList:array      
}

export interface Data {
  orgMonthReportVo:OrgMonthReportVo    //返回数据对象
}

export interface ResBody {
  status:number    //返回状态码101成功
  msg:string       //返回信息
  data:Data        //结果
}

export interface ReqQuery {
  empId:string            //员工ID
  requestParams:string    //businessMonth：商务月，格式yyyy-MM；

}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/performance/findAchReport',
        method:'GET',
        params:params
    })
}