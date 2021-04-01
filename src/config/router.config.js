/**
 * 用来添加路由 
 * @param {String} name 路由名字
 * @param {Object} config 配置对象
 * @returns 路由配置对象
 */
function addRouter(name, config) {
    return {
        path: `/${name}`,
        components: {
            component: () => import(`@/views/${name}/index.vue`)
        },
        ...config
    }
}

const routers = [];
routers.push(addRouter('user', {
    meta: {
        token: false
    }
}));


export default routers;