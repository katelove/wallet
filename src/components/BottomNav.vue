<template lang="">
    <div class="flex justify-around shadow-bottom fixed bottom-0 w-full h-[80px] bg-white">
        <div
            v-for="item in nav"
            :key="item.name"
            class="text-center py-12px"
            :class="[$route.name === item.routerName ? 'text-mainColor' : '']"
            @click="jumpto(item.url)"
        >
            <img
                :src="$route.name === item.routerName ? item.selectedIcon : item.icon"
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
                    routerName: "Home",
                },
                {
                    name: "行情",
                    icon: require("@/assets/icon/market.png"),
                    selectedIcon: require("@/assets/icon/market_active.png"),
                    url: "/market",
                    routerName: "Market",
                },
                {
                    name: "交易",
                    icon: require("@/assets/icon/trade.png"),
                    selectedIcon: require("@/assets/icon/trade_active.png"),
                    url: `/trade`,
                    routerName: "Trade",
                },
                {
                    name: "资产",
                    icon: require("@/assets/icon/wallet.png"),
                    selectedIcon: require("@/assets/icon/wallet_active.png"),
                    url: "/wallet",
                    routerName: "Wallet",
                },
            ],
        };
    },
    methods: {
        jumpto: function (url) {
            const path = this.$route.path;
            if (url === "/" || !path.includes(url)) {
                if (url === "/trade") {
                    this.$router.push(`/trade/${localStorage.getItem("defaultTrade")}`);
                } else {
                    this.$router.push(url);
                }
            }
        },
    },
};
</script>
