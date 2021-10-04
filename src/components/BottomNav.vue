<template lang="">
    <div class="flex justify-around shadow-bottom fixed bottom-0 w-full h-[80px] bg-white">
        <div
            v-for="item in nav"
            :key="item.name"
            class="text-center py-12px"
            :class="[sameOrigin === item.url ? 'text-mainColor' : '']"
            @click="jumpto(item.url)"
        >
            <img
                :src="sameOrigin === item.url ? item.selectedIcon : item.icon"
                class="mb-6px h-27px w-27px"
            >
            <p>
                {{ item.name }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nav: [
                {
                    name: "首页",
                    icon: require("@/assets/icon/home.png"),
                    selectedIcon: require("@/assets/icon/home_active.png"),
                    url: "/",
                },
                {
                    name: "行情",
                    icon: require("@/assets/icon/market.png"),
                    selectedIcon: require("@/assets/icon/market_active.png"),
                    url: "/market",
                },
                {
                    name: "交易",
                    icon: require("@/assets/icon/trade.png"),
                    selectedIcon: require("@/assets/icon/trade_active.png"),
                    url: `/trade/${localStorage.getItem("defaultTrade") || "BTCUSDT"}`,
                },
                {
                    name: "资产",
                    icon: require("@/assets/icon/wallet.png"),
                    selectedIcon: require("@/assets/icon/wallet_active.png"),
                    url: "/wallet",
                },
            ],
        };
    },
    computed: {
        sameOrigin: function () {
            const path = this.$route.path;
            if (path === "/") {
                return "/";
            } else {
                const route = this.nav.find(({url}) => {
                    return path.startsWith(url) && url !== "/";
                });
                return route?.url || "";
            }
        },
    },
    methods: {
        jumpto: function (url) {
            const path = this.$route.path;
            if (url === "/" || !path.includes(url)) {
                this.$router.push(url);
            }
        },
    },
};
</script>
