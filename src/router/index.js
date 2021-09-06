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
        path: "/about",
        name: "About",
        component: () => import("@/views/About.vue"),
    },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});


export default router;
