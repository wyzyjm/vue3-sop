
/**
 * 文档地址：http://10.12.52.224:3000/project/123/interface/api/1308
 * 生成日期：Mon Mar 01 2021 14:57:57 GMT+0800 (GMT+08:00)
 * 生成工具版本：ts-v0.0.2
 * 接口名称：文件上传接口
 * 创建人：付兵浩
 */
export interface Data {
  id:number               /**上传的文件id*/
  fileName:string         /**文件名称*/
  fileUrl:string          /**访问url*/
  fileType:string         /**文件类型*/
  createTimeStr:string    /**上传时间*/
  creatorId:null          /**上传人id*/
}

export interface ResBody {
  status:number    
  code:string      
  msg:string       
  data:Data        
}

interface _Params {}

import request from '../plugins/axios/index.js'
export default (params: _Params)=> { 
    return request({
        url:'/frontApi/common-upload/upload',
        method:'POST',
        data:params
    })
}