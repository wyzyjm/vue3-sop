
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1310
 * 生成日期：Mon Mar 01 2021 11:02:48 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：根据id获取上传文件的详细
 * 创建人：付兵浩
 */
export interface Data {
  id:string               
  fileName:string         /**文件名称*/
  fileUrl:string          /**文件url*/
  fileType:string         /**文件类型*/
  createTimeStr:string    /**上传时间*/
  creatorId:string        /**上传人id*/
}

export interface ResBody {
  code:string      
  status:string    
  data:Data        
}

export interface ReqParams {
  id:string    
}

interface _Params extends ReqParams {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/common-upload/{id}'.replace(/{([^}]+)}/g, (r: string, $1: string) => {
        const tmp=params[$1] || ''    
        delete params[$1]
        return tmp
    }),
        method:'GET',
        params:params
    })
}