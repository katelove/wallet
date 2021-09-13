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
      component: () => import("@/views/LoginPage.vue"),
    },
    {
    path: "/reset",
    name: "ResetPage",
    component: () => import("@/views/ResetPage.vue"),
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

];

const router = new VueRouter({
  routes,
  mode: 'history',
});


export default router;
