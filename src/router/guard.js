// 全局路由守卫
import store from 'vuex'

export default function (router) {
	// 带有meta.fromUrlStop的路由，若从url进入(name为null)则跳到home(防止用户从url直接进入需要特殊参数数据的页面)
	router.beforeEach((to, from, next) => {
		if (to.meta.fromUrlStop && from.name === null) {
			next({
				name: 'index'
			});
		}
		next();
	});

	return router;
}