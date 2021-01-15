
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/582
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：业绩预测-修改挑战任务-王金峰
 */
export interface ResBody {
  status:string    //101为成功
  msg:string       
  data:string      
}

export interface ReqQuery {
  empId:string            //登录人id
  requestParams:string    //id:列表页某条记录的id   baseTask:基本任务     challengeTask：挑战任务
  exception:string        
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/hierarchicalOperation/updateChallengeTask',
        method:'GET',
        params:params
    })
}