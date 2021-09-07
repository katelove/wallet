import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home"),
    },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});


export default router;
