// 配置axios
import axios from 'axios';
import router from '../router/index'

// 请求拦截器函数
function requestInterceptors(config) {
    // 需要token
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['token', token]
    } else {
        return config;
    }
    return config;
}

// 响应拦截器函数
function responseInterceptors(response) {
    if (response.status == 200) {
        return response;
    }
    // ...
    return response;
}

// 请求拦截器
axios.interceptors.request.use(requestInterceptors);
// // 响应拦截器
axios.interceptors.response.use(responseInterceptors);


export default axios;