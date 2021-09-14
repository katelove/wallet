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
    },
    {
      path: "/login",
      name: "LoginPage",
      component: () => import("@/views/Login/LoginPage.vue"),
    },
    {
    path: "/reset",
    name: "ResetPage",
    component: () => import("@/views/Login/Reset/ResetPage.vue"),
    },
    {
      path: "/register/phone",
      name: "PhoneRegisterPage",
      component: () => import("@/views/Login/Register/PhoneRegisterPage.vue"),
    },
    {
      path: '/register/mail',
      name: "MailRegisterPage",
      component: () => import("@/views/Login/Register/MailRegisterPage.vue"),
    },
    {
      path: '/register/name',
      name: "NameRegisterPage",
      component: () => import("@/views/Login/Register/NameRegisterPage.vue"),
    },
    {
      path: '/safeCenter',
      name: "SafeCenter",
      component: () => import("@/views/Login/SafeCenter/SafeCenter.vue"),
    },
    {
      path: '/safeCenter/modifyPwd',
      name: "ModifyLoginPwd",
      component: () => import("@/views/Login/SafeCenter/ModifyLoginPwd.vue"),
    },
    {
      path: '/safeCenter/modifySecondPwd',
      name: "ModifyLoginSecondPwd",
      component: () => import("@/views/Login/SafeCenter/ModifyLoginSecondPwd.vue"),
    },
    {
      path: '/safeCenter/setSecondPwd',
      name: "SetSecondPwd",
      component: () => import("@/views/Login/SafeCenter/SetSecondPwd.vue"),
    },
    {
      path: '/safeCenter/bindPhone',
      name: "BindPhone",
      component: () => import("@/views/Login/SafeCenter/BindPhone.vue"),
    },
    {
      path: '/safeCenter/bindGoogle',
      name: "BindGooglePage",
      component: () => import("@/views/Login/SafeCenter/BindGooglePage.vue"),
    },
];

const router = new VueRouter({
  routes,
  mode: 'history',
//   base: "/frontend",
});


export default router;
