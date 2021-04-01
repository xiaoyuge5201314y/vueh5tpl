// 引入axios
import axios from '../config/http.config.js'

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
                url: apiUrl,
                method: method === 'get' ? 'get' : 'post',
                ...{
                    [method === 'get' ? params : data]: data,
                }
            }).then(result => {
                // 请求成功
                if (result.code == 200) {
                    resolve(result);
                } else
                if (result.code == 900) {
                    reject('错误...')
                } else {
                    reject(`未知错误${result}`)
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

addApi('/login');

export default requests;