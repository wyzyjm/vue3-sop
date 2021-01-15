
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/562
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：竞争对手-列表-潘昭
 */
export interface Data {
  totalCount:number     //总条数
  pageSize:number       //每页大小
  currentPage:number    //当前页码
  totalPages:number     //总页数
  list:array            //数据列表
}

export interface ResBody {
  status:number    //接口请求成功返回101
  msg:string       //消息描述
  data:Data        //结果集
}

export interface RequestParams {
  name:?string            //名称
  currentPage:?number     //当前页码
  pageSize:?number        //每页数据条数
  status:?number          //状态
  notVerifiedF:?number    //只显示“待核实”的，选择就传1，不选择就不传
}

export interface ReqBody {
  empId:string                   //登录员工的ID
  requestParams:RequestParams    //传参的对象，没有则{}
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/competitor/getCompetitors',
        method:'POST',
        data:params
    })
}