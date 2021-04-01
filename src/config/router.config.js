/**
 * 用来添加路由 
 * @param {String} name 路由名字
 * @param {Object} config 配置对象
 * @returns 路由配置对象
 */
function addRouter(name, config) {
    const n = name.substr(0, 1).toUpperCase + name.substr(1)
    return {
        path: `/${name}`,
        name: `${n}`,
        components: {
            component: () => import(`@/views/${n}.vue`)
        },
        ...config
    }
}

// 所有路由
const routers = [];
// 添加路由
routers.push(addRouter('user', {
    meta: {
        token: false
    }
}));


export default routers;