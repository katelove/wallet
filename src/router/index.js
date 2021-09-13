import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
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
      path: "/login-wallet/phone",
      name: "PhoneWalletPage",
      component: () => import("@/views/Login/Wallet/PhoneWalletPage.vue"),
    },
    {
      path: '/login-wallet/mail',
      name: "MailWalletPage",
      component: () => import("@/views/Login/Wallet/MailWalletPage.vue"),
    },
    {
      path: '/login-wallet/name',
      name: "NameWalletPage",
      component: () => import("@/views/Login/Wallet/NameWalletPage.vue"),
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
});


export default router;
