
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1096
 * 生成日期：Fri Jan 15 2021 14:16:13 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：由产品查客户-状态筛选项-潘昭
 */
export interface Data {
  list:array    //返回数据对象的集合
}

export interface ResBody {
  status:string    //状态码，返回101成功
  msg:string       //返回信息
  data:Data        //返回数据
}

interface Params extends  {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/productInstance/getInstanceStates',
        method:'GET',
        params:params
    })
}