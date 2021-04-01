// 配置axios
import axios from 'axios';
import env from './env.config'
import router from '../router/index'

// 请求拦截器函数
function requestInterceptors(config) {
    // 需要token
    if (router.options.meta.token) {
        const token = localStorage.getItem('token');
            //发送token 
        if (token) {
            config.headers['token', token]
        } else {
            return
        }
    } else {}
    return config;
}

// 响应拦截器函数
function responseInterceptors(response) {
    // ...
    return response;
}

// 请求拦截器
axios.interceptors.request = requestInterceptors;
// 响应拦截器
axios.interceptors.response = responseInterceptors;
// 前缀路径
const baseUrl = process.env.NODE_ENV == 'production' ? env.prod.baseUrl : env.dev.baseUrl;
// 配置axios实例
const instance = axios.create({
    baseUrl,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },

});

export default instance;