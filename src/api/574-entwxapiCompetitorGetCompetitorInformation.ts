
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/574
 * 生成日期：Fri Jan 15 2021 14:02:20 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：竞争对手-情报的列表-潘昭
 */
export interface List {
  id:string                //情报ID
  competitorId:string      //竞争对手ID
  name:string              //名称
  content:string           //内容
  status:number            //状态（0：待核实；1：已核实）
  statusStr:string         //状态（展示字符）
  createAreaId:string      //创建人区域ID
  createAreaName:string    //创建人区域名称
  createSubId:string       //创建人分公司ID
  createSubName:string     //创建人分公司名称
  createDeptId:string      //创建人部门ID
  createDeptName:string    //创建人部门名称
  createTime:number        //创建时间
  createTimeStr:string     //创建时间（展示字符）
  createUser:string        //创建人
  createUserName:string    //创建人名称
  updateTime:number        //修改时间
  updateUser:string        //修改人
}

export interface Data {
  totalCount:number     //总条数
  totalPages:number     //总页数
  currentPage:number    //当前页码
  pageSize:string       //每页大小
  list:List             //数据列表
}

export interface ResBody {
  status:number    //接口请求成功返回101
  msg:string       //消息描述
  data:Data        //结果集
}

export interface RequestParams {
  currentPage:number     //当前页码
  pageSize:number        //每页数据条数
  competitorId:string    //竞争对手ID（竞争对手列表中返回的ID）
  status:?number         //状态（0：待核实；1：已核实）
}

export interface ReqBody {
  empId:string                   //登录员工的ID
  requestParams:RequestParams    //传参的对象，没有则{}
}

interface Params extends ReqBody {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/competitor/getCompetitorInformation',
        method:'POST',
        data:params
    })
}