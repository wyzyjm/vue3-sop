"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var element_ui_1 = require("element-ui");
function isEnable(config) {
    var WHITE_LIST = ['ceboss.cn', '300.cn'];
    var BLACK_LIST = [];
    var url = (config.baseURL || '') + config.url;
    return BLACK_LIST.every(function (v) { return !url.includes(v); }) && WHITE_LIST.some(function (v) { return url.includes(v); });
}
var instance = axios_1["default"].create({
    baseURL: process.env.VUE_APP_API_BASE_URL
});
// cas request
instance.interceptors.request.use(function (config) {
    if (isEnable(config)) {
        config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        config.withCredentials = true;
    }
    return config;
});
//cas response
instance.interceptors.response.use(function (response) {
    if (isEnable(response.config)) {
        if (+response.data.status === 999) {
            var _location = decodeURIComponent(response.data.location);
            var len = _location.split('?').length;
            var connectSymbol = len > 2 ? '&backurl=' : '?backurl=';
            try {
                window.location.href = response.data.location + encodeURIComponent(connectSymbol + encodeURIComponent(window.location.href));
            }
            catch (error) {
                return Promise.reject(new Error(error));
            }
        }
    }
    return response;
});
// error
instance.interceptors.response.use(function (response) {
    if (response.data.code !== 'SYS0000' && response.data.code !== '10001') {
        element_ui_1.Message({
            type: 'error',
            message: response.data.msg
        });
        throw new Error(response.data);
    }
    return response.data;
});
exports["default"] = instance;
