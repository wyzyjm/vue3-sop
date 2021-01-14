import request from '../../plugins/request'


export interface TableListItem {
    key: number;
    disabled?: boolean;
    href: string;
    avatar: string;
    name: string;
    owner: string;
    desc: string;
    callNo: number;
    status: number;
    updatedAt: Date;
    createdAt: Date;
    progress: number;
}


export async function queryRule(params?: TableListItem) {
    return request('/api/rule', {
        params,
    })
}