import router from "../router";

/**
 * 用来添加路由 
 * @param {String} name 路由名字
 * @param {Object} config 配置对象
 * @returns 路由配置对象
 */
function addRouter(name, config) {
    name = name.toLowerCase();
    const Name = name.substr(0, 1).toUpperCase() + name.substr(1)
    return {
        path: `/${name}`,
        name: `${Name}`,
        component: () => import(`@/views/${Name}.vue`),
        meta: {

        },
        ...config,
    }
}

// 所有路由
const routers = [];

const user = addRouter('user', {
    meta: {
        token: false
    }
})
routers.push(user)


export default routers;