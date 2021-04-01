// 引入axios
import axios from '../config/http.config.js'
import env from '../config/env.config'
const requests = {};
/**
 * 添加axios请求函数
 * @param {String} apiUrl 请求地址 格式: /api/product/getById
 * @param {String} method 请求方式 get/post
 * @returns {Object} 返回一个promise实例
 */
function addApi(apiUrl, method = 'get') {
    // 请求函数名
    const requestName = apiUrl.replace(/\//g, '_');

    requests[requestName] = function (data) {
        return new Promise((resolve, reject) => {
            // 发起axios请求
            axios.request({
                timeout: 1000,
                // 前缀路径
                baseURL: process.env.NODE_ENV == 'production' ? env.prod.baseUrl : env.dev.baseUrl,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                url: apiUrl,
                method: method === 'get' ? 'get' : 'post',
                ...{
                    [method === 'get' ? 'params' : 'data']: data,
                }
            }).then(result => {
                // 请求成功
                if (result.data.code == 200) {
                    resolve(result);
                } else
                if (result.data.code == 900) {
                    reject('错误...')
                } else {
                    reject(`未知错误${JSON.stringify(result)}`)
                }
                // 失败
            }).catch(err => {
                reject(err)
            }).finally(() => {
                // ...
            });
        });
    }
}

addApi('/api/product/getListByCon');

export default requests;