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
});


export default router;
