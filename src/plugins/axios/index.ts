import axios, { AxiosRequestConfig } from 'axios'
import { Message } from 'element-ui'


function isEnable(config: AxiosRequestConfig) {
    const WHITE_LIST: string[] = ['ceboss.cn', '300.cn']
    const BLACK_LIST: string[] = []
    const url = (config.baseURL || '') + config.url
    return BLACK_LIST.every(v => !url.includes(v)) && WHITE_LIST.some(v => url.includes(v))
}

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
})

// cas request
instance.interceptors.request.use(
    config => {
        if (isEnable(config)) {
            config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
            config.withCredentials = true
        }
        return config
    }
)

//cas response
instance.interceptors.response.use(
    response => {
        if (isEnable(response.config)) {
            if (+response.data.status === 999) {
                const _location = decodeURIComponent(response.data.location)
                const len = _location.split('?').length
                const connectSymbol = len > 2 ? '&backurl=' : '?backurl='

                try {
                    window.location.href = response.data.location + encodeURIComponent(connectSymbol + encodeURIComponent(window.location.href))

                } catch (error) {
                    return Promise.reject(new Error(error))
                }
            }
        }
        return response
    }
)


// error
instance.interceptors.response.use(response => {
    if (response.data.code !== 'SYS0000' && response.data.code !== '10001') {
        Message({
            type: 'error',
            message: response.data.msg
        })
        throw new Error(response.data)
    }
    return response.data
}, error => {
    Message({
        type: 'error',
        message: error
    })
    return Promise.reject(new Error(error))
})


export default instance