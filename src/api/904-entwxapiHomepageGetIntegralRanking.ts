
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/904
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：首页-CEO积分排行榜-详情-潘昭
 */
export interface Data {
  list:array    //数据集合
}

export interface ResBody {
  status:number    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回结果集
}

export interface ReqQuery {
  empId:string            //登录员工的ID
  requestParams:string    //type：1个人，2部门；
areaId：区域ID；
subcompanyId：分公司ID；
deptId：部门ID；
currentPage：页码；
pageSize：每页大小。
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/homepage/getIntegralRanking',
        method:'GET',
        params:params
    })
}