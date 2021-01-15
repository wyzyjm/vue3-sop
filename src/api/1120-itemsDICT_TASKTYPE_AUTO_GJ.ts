
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1120
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：回访统计-任务类型筛选项-潘昭
 */
export interface ResBody {
  status:string    //接口请求成功返回101
  msg:string       //消息描述
  data:array       //结果集
}

interface Params extends  {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/items/DICT_TASKTYPE_AUTO_GJ',
        method:'GET',
        params:params
    })
}