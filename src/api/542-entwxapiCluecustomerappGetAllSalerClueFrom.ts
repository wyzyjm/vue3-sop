
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/542
 * 生成日期：Fri Jan 15 2021 14:16:14 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：跟进中线索-来源筛选项-王金峰
 */
export interface Data {
  list:array    
}

export interface ResBody {
  status:number    //状态码 101为成功
  msg:string       //消息
  data:Data        
}

export interface ReqQuery {
  empId:string        //登录人Id
  exception:string    
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/cluecustomerapp/getAllSalerClueFrom',
        method:'GET',
        params:params
    })
}