
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/558
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：线索池-列表（全角色）-王金峰
 */
export interface Data {
  totalCount:number     //总条数
  pageSize:number       //每页条数
  list:array            
  currentPage:number    //当前页码
}

export interface ResBody {
  status:number    //状态码  101为成功
  msg:string       
  data:Data        
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //currentPage：页码    pageSize：每页条数    entName：客户名称    marketType：市场类型         provinceCode：省编码    cityCode：市编码
dictrictCode：区县编码    operationalReccomend：运营推荐编码
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/cluecustomerapp/getSystemClue',
        method:'GET',
        params:params
    })
}