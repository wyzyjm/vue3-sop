export const btns = {
        fixList: {
            "operate_log": {
                value: 'operate_log',
                label: '操作日志',
                fileName: 'log',
                hideSubmit: true,
            },
            // "score_see": {
            //     value: 'score_see',
            //     label: '查看评分',
            //     fileName: 'score',
            //     hideSubmit: true,
            // },
            "evaluate_see": {
                value: 'evaluate_see',
                label: '查看评价',
                fileName: 'seeEvaluate',
                hideSubmit: true,
            },
            // "demand_see": {
            //     value: 'demand_see',
            //     label: '查看需求',
            //     fileName: 'demand',
            //     hideTitle: true,
            //     hideSubmit: true,
            // },
            // "programme_see": {
            //     value: 'programme_see',
            //     label: '查看方案',
            //     fileName: 'plan',
            //     hideTitle: true,
            //     hideSubmit: true,
            // },
            "web_preview": {
                value: 'web_preview',
                label: '网站预览',
                fileName: 'webPreview',
                hideSubmit: true,
            }
        },
        dynamicList: {
            "score_see": {
                value: 'score_see',
                label: '查看评分',
                width: '600px',
                fileName: 'score',
                hideSubmit: true,
            },
            "programme_see": {
                value: 'programme_see',
                label: '查看方案',
                fileName: 'plan',
                hideTitle: true,
                hideSubmit: true,
            },
            "programme_upload": {
                value: 'programme_upload',
                label: '上传方案',
                fileName: 'plan',
                // hideTitle: true
            },
            // "preview": {
            //     value: 'preview',
            //     label: '图片预览',
            //     fileName: 'preview'
            // },
            // "so_info": {
            //     value: 'so_info',
            //     label: '服务单详情'
            // },
            "make_tools": {
                value: 'make_tools',
                label: '制作工具',
                // openWindow: true
                fileName: 'log',
                hideSubmit: true
            },
            // "upload": {
            //     value: 'upload',
            //     label: '上传',
            //     fileName:'upload'
            // },
            // "download": {
            //     value: 'download',
            //     label: '下载'
            // },
            "assign_designers": {
                value: 'assign_designers',
                label: '分派设计师',
                fileName: 'allot',
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
            },
            "assign_make": {
                value: 'assign_make',
                label: '分派制作员',
                fileName: 'allot',
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
            },
            "assign_mh_adviser": {
                value: 'assign_mh_adviser',
                label: '分派门户营销顾问',
                fileName: 'allot',
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
            },
            "assign_ds_adviser": {
                value: 'assign_ds_adviser',
                label: '分派电商营销顾问',
                fileName: 'allot',
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
            },
            "change_mh_adviser": {
                value: 'change_mh_adviser',
                label: '更换门户营销顾问',
                fileName: 'allot',
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
            },
            "change_ds_adviser": {
                value: 'change_ds_adviser',
                label: '更换电商营销顾问',
                fileName: 'allot',
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
            },
            "assign_assistant": {
                value: 'assign_assistant',
                label: '分派助理',
                fileName: 'allot',
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
            },
            "change_designers": {
                value: 'change_designers',
                label: '更换设计师',
                fileName: 'allot',
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
            },
            "change_make": {
                value: 'change_make',
                label: '更换制作员',
                fileName: 'allot',
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
            },
            "change_assistant": {
                value: 'change_assistant',
                label: '更换助理',
                fileName: 'allot',
            },
            "change_liability": {
                value: 'change_liability',
                label: '更换担责',
                fileName: 'allot',
                isTerm: true,
                requiredParam: {
                    vaild: 'orgId',
                    errorMsg: '请选择团队'
                }
            },
            "to_designers": {
                value: 'to_designers',
                label: '转单设计',
                fileName: 'allot',
                isTerm: true,
                requiredParam: {
                    vaild: 'orgId',
                    errorMsg: '请选择团队'
                }
            },
            "to_make": {
                value: 'to_make',
                label: '转单制作',
                fileName: 'allot',
                isTerm: true,
                requiredParam: {
                    vaild: 'orgId',
                    errorMsg: '请选择团队'
                }
            },
            "to_ds_adviser": {
                value: 'to_ds_adviser',
                label: '转单电商运营顾问',
                fileName: 'allot',
                isTerm: true,
                requiredParam: {
                    vaild: 'orgId',
                    errorMsg: '请选择团队'
                }
            },
            "to_mh_adviser": {
                value: 'to_mh_adviser',
                label: '转单门户营销顾问',
                fileName: 'allot',
                isTerm: true,
                requiredParam: {
                    vaild: 'orgId',
                    errorMsg: '请选择团队'
                }
            },

            "assign_mh_adviser01": {
                value: 'assign_mh_adviser01',
                label: '转单分派门户营销顾问',
                fileName: 'allot',
                // isTerm: true,
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
                // requiredParam: {
                //     vaild: 'orgId',
                //     errorMsg: '请选择团队'
                // }
            },
            "assign_ds_adviser01": {
                value: 'assign_ds_adviser01',
                label: '转单分派电商运营顾问',
                fileName: 'allot',
                // isTerm: true,
                requiredParam: {
                    vaild: 'empId',
                    errorMsg: '请选择员工'
                }
                // requiredParam: {
                //     vaild: 'orgId',
                //     errorMsg: '请选择团队'
                // }
            },

            "to_assistant": {
                value: 'to_assistant',
                label: '转单助理',
                fileName: 'allot',
                isTerm: true,
                requiredParam: {
                    vaild: 'orgId',
                    errorMsg: '请选择团队'
                } 
            },
            "demand_write": {
                value: 'demand_write',
                label: '填写需求',
                fileName: 'demand',
                hideTitle: true
            },
            "demand_submit": {
                value: 'demand_submit',
                label: '提交需求',
                popover: true,
                visible: false,
            },
            "submit_adviser_verification": {
                value: 'submit_adviser_verification',
                label: '提交验收',
                popover: true,
                visible: false,
            },
            "confirm_programme": {
                value: 'confirm_programme',
                label: '确认方案',
                popover: true,
                visible: false,
            },
            "programme_submit": {
                value: 'programme_submit',
                label: '提交方案',
                popover: true,
                visible: false,
            },
            "programme_see_history": {
                value: 'programme_see_history',
                label: '历史方案',
                fileName: 'log',
                hideSubmit: true,
            },
            "demand_confirm": {
                value: 'demand_confirm',
                label: '确认需求',
                popover: true,
                visible: false,
            },
            "demand_back": {
                value: 'demand_back',
                label: '需求打回',
                popover: true,
                visible: false,
            },
            "design_submit": {
                value: 'design_submit',
                label: '提交设计稿',
                fileName:'upload',
                requiredParam: {
                    vaild: 'annexList',
                    errorMsg: '请先上传附件'
                }
            },
            "design_confirm": {
                value: 'design_confirm',
                label: '确认设计稿'
            },
            "design_back": {
                value: 'design_back',
                label: '设计稿打回'
            },
            "quality_submit": {
                value: 'quality_submit',
                label: '提交质检',
                fileName: 'editForm'
            },
            "quality_receive": {
                value: 'quality_receive',
                label: '质检领取',
                popover: true,
                visible: false,
            },
            "modified_completed": {
                value: 'modified_completed',
                label: '修改完成',
                popover: true,
                visible: false,
            },
            "quality_receive_back": {
                value: 'quality_receive_back',
                label: '退回领取',
                popover: true,
                visible: false,
            },
            "quality_pass": {
                value: 'quality_pass',
                label: '质检通过',
                popover: true,
                visible: false,
            },
            "quality_back": {
                value: 'quality_back',
                label: '质检打回',
                fileName: 'editForm',
                requiredParam: {
                    vaild: 'reason',
                    errorMsg: '请输入原因'
                }
            },
            "quality_remark": {
                value: 'quality_remark',
                label: '质检备注',
                fileName: 'log',
                hideSubmit: true,
            },
            "quality_confirm_pass": {
                value: 'quality_confirm_pass',
                label: '确认验收',
                popover: true,
                visible: false,
            },
            "apply_completed": {
                value: 'apply_completed',
                label: '申请完成',
                popover: true,
                visible: false,
            },
            "comfirm_completed": {
                value: 'comfirm_completed',
                label: '确认完成',
                popover: true,
                visible: false,
            },
            "verificate_pass": {
                value: 'verificate_pass',
                label: '核验通过',
                popover: true,
                visible: false,
            },

            "not_need_assist": {
                value: 'not_need_assist',
                label: '不要协助',
                popover: true,
                visible: false,
            },
            "verificate_back": {
                value: 'verificate_back',
                label: '核验打回',
                popover: true,
                visible: false,
            },

            "quality_confirm_back": {
                value: 'quality_confirm_back',
                label: '验收打回',
                popover: true,
                visible: false,
            },
            "evaluate_write": {
                value: 'evaluate_write',
                label: '评价'
            },
            // "score_config": {
            //     value: 'score_config',
            //     label: '获取评分配置'
            // },
            "score": {
                value: 'score',
                label: '评分',
                width: '600px',
                fileName: 'score'
            },
    
            "pass": {
                value: 'pass',
                label: '通过',
                popover: true,
                visible: false,
            },
            "back": {
                value: 'back',
                label: '打回',
                popover: true,
                visible: false,
            },
            "input_completed": {
                value: 'input_completed',
                label: '录入完成',
                popover: true,
                visible: false,
            },
            // "unit_consumption": {
            //     value: 'unit_consumption',
            //     label: '单品消耗'
            // },
        },
        likeList: {
            "pass*": {
                value: 'pass',
                label: '通过*',
                popover: true,
                visible: false,
            },
            "back*": {
                value: 'back',
                label: '打回*',
                popover: true,
                visible: false,
            },
        }
}