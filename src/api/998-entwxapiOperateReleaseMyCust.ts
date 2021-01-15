
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/998
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：经理释放意向线索-王志军
 */
export interface ResBody {
  status:number    
  msg:string       
}

export interface ReqQuery {
  empId:string            
  requestParams:string    //释放原因通过这个接口获取：
http://10.12.52.224:3000/project/59/interface/api/728
参数传DICT_RELEASE_REASON
}

interface Params extends ReqQuery {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/entwxapi/operate/releaseMyCust',
        method:'GET',
        params:params
    })
}