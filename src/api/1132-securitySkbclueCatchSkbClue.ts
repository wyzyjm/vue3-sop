
/**
 * 文档地址：http://10.12.52.224:3000/project/59/interface/api/1132
 * 生成日期：Fri Jan 15 2021 14:02:19 GMT+0800 (GMT+08:00)
 * 生成工具版本：node-v0.1
 * 接口名称：协同工具-搜客宝线索列表-获取-王志军
 */
export interface ResBody {
  status:number    //101为操作成功
  msg:string       //信息提示
}

interface Params extends  {}

import request from '../plugins/request'
export default (params: Params)=> { 
    return request({
        url:'/security/skbclue/catchSkbClue',
        method:'GET',
        params:params
    })
}