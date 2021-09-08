import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const RouteView = {
	name: 'RouteView',
	render: h => h('router-view')
}
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home"),
    },
	{
		path: "/withdraw",
		component: RouteView,
		children: [
			{
				path: '/',
				component: () => import("@/views/Withdraw")
			},
			{
				path: '/withdraw/:crypto',
				component: () => import("@/views/Withdraw/CryptoWithdraw.vue")
			},
		]
	}
];

const router = new VueRouter({
  routes,
  mode: 'history',
});


export default router;
