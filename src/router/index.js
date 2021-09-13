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
        path: "/transaction_history/:crypto",
        name: "TransactionHistory",
		component: () => import("@/views/TransactionHistory"),
		meta: {
			showGoback: true,
			hideBottomNav: true
		}
	},
	{
        path: "/wallet",
        name: "Wallet",
		component: () => import("@/views/Wallet"),
	},
	{
		path: "/crypto/:action/:crypto",
		component: RouteView,
		children: [
			{
				path: '/crypto/:action',
				component: () => import("@/views/CryptoList"),
				meta: {
					showGoback: true
				}
			},
			{
				path: '/crypto/deposit/:crypto',
				component: () => import("@/views/Deposit"),
				meta: {
					showGoback: true,
					showHistory: true
				}
			},
			{
				path: '/crypto/withdraw/:crypto',
				component: () => import("@/views/Withdraw"),
				meta: {
					showGoback: true,
					showHistory: true
				}
			},
		]
	}
];

const router = new VueRouter({
  routes,
  mode: 'history',
//   base: "/frontend",
});


export default router;
