import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);
const RouteView = {
    name: 'RouteView',
    render: h => h('router-view')
};
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home"),
        meta: {
            hideTopNav: true
        }
    },
    {
        path: "/kline/:symbol",
        name: "kline",
        component: () => import("@/views/Kline"),
        meta: {
            showGoback: true,
            hideBottomNav: true,
            hideTopNav: true
        }
    },
    {
        path: "/market",
        name: "market",
        component: () => import("@/views/Market"),
    },
    {
        path: "/trade/:symbol/:side?",
        name: "Trade",
        component: () => import("@/views/Trade"),
        meta: {
            showGoback: true,
            title: '币币交易'
        }
    },
    {
        path: "/transaction_history/:crypto",
        name: "TransactionHistory",
        component: () => import("@/views/TransactionHistory"),
        meta: {
            showGoback: true,
        }
    },
    {
        path: "/wallet",
        name: "Wallet",
        component: () => import("@/views/Wallet"),
        meta: {
            title: '資產中心'
        }
    },
    {
        path: "/crypto/:action/:crypto",
        component: RouteView,
        children: [
            {
                path: '/crypto/:action',
                component: () => import("@/views/CryptoList"),
                meta: {
                    showGoback: true,
                    title: "幣種選擇"
                }
            },
            {
                path: '/crypto/deposit/:crypto',
                component: () => import("@/views/Deposit"),
                meta: {
                    showGoback: true,
                    showHistory: true,
                    hideBottomNav: true
                }
            },
            {
                path: '/crypto/withdraw/:crypto',
                component: () => import("@/views/Withdraw"),
                meta: {
                    showGoback: true,
                    showHistory: true,
                    hideBottomNav: true
                }
            },
        ]
    },
    {
        path: "/login",
        name: "LoginPage",
        component: () => import("@/views/Login/LoginPage.vue"),
        meta: {
            hideBottomNav: true
        }
    },
    {
        path: "/reset",
        name: "ResetPage",
        component: () => import("@/views/Login/Reset/ResetPage.vue"),
        meta: {
            hideBottomNav: true
        }
    },
    {
        path: "/register/phone",
        name: "PhoneRegisterPage",
        component: () => import("@/views/Login/Register/PhoneRegisterPage.vue"),
        meta: {
            hideBottomNav: true
        }
    },
    {
        path: '/register/mail',
        name: "MailRegisterPage",
        component: () => import("@/views/Login/Register/MailRegisterPage.vue"),
        meta: {
            hideBottomNav: true
        }
    },
    {
        path: '/register/name',
        name: "NameRegisterPage",
        component: () => import("@/views/Login/Register/NameRegisterPage.vue"),
        meta: {
            hideBottomNav: true
        }
    },
    {
        path: '/safeCenter',
        name: "SafeCenter",
        component: () => import("@/views/Login/SafeCenter/SafeCenter.vue"),
        meta: {
            showGoback: true,
            hideBottomNav: true
        }
    },
    {
        path: '/safeCenter/modifyPwd',
        name: "ModifyLoginPwd",
        component: () => import("@/views/Login/SafeCenter/ModifyLoginPwd.vue"),
        meta: {
            showGoback: true,
            hideBottomNav: true
        }
    },
    {
        path: '/safeCenter/modifySecondPwd',
        name: "ModifyLoginSecondPwd",
        component: () => import("@/views/Login/SafeCenter/ModifyLoginSecondPwd.vue"),
        meta: {
            showGoback: true,
            hideBottomNav: true
        }
    },
    {
        path: '/safeCenter/setSecondPwd',
        name: "SetSecondPwd",
        component: () => import("@/views/Login/SafeCenter/SetSecondPwd.vue"),
        meta: {
            showGoback: true,
            hideBottomNav: true
        }
    },
    {
        path: '/safeCenter/bindPhone',
        name: "BindPhone",
        component: () => import("@/views/Login/SafeCenter/BindPhone.vue"),
        meta: {
            showGoback: true,
            hideBottomNav: true
        }
    },
    {
        path: '/safeCenter/bindGoogle',
        name: "BindGooglePage",
        component: () => import("@/views/Login/SafeCenter/BindGooglePage.vue"),
        meta: {
            showGoback: true,
            hideBottomNav: true
        }
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior () {
        document.getElementById('mainContainer').scrollTo(0, 0);
    }
//   base: "/frontend",
});

// const withoutPermission = ['/login', '/register/phone', '/register/mail', '/register/name', '/reset', '/safeCenter', '/safeCenter/modifyPwd', 'modifySecondPwd', '/safeCenter/setSecondPwd', '/safeCenter/bindPhone', '/safeCenter/bindGoogle'];

// router.beforeEach((to, from, next) => {
//     const userId = localStorage.getItem('userId');
//     if (withoutPermission.includes(to.path)) {
//         next();
//     } else if(userId === '00001' || userId === '00002') {
//         next();
//     } else {
//         next({ path: '/login' });
//     }
// });

export default router;
