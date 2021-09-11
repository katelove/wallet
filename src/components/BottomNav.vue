<template lang="">
    <div
        v-if="!$route.metahideBottomNav"
        class="rounded-10px border-black border flex justify-evenly items-center text-10px my-4 mx-25px ">
        <div
            v-for="item in nav"
            :key="item.name"
            class="text-center py-12px"
            :class="[sameOrigin === item.url ? 'text-melancholyBlue' : '']"
            @click="jumpto(item.url)"
        >
            <img :src="sameOrigin === item.url ? item.blueIcon : item.icon" class="mb-6px h-27px"/>
            <p>
                {{item.name}}
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
                    icon: require('@/assets/icon/home.svg'),
                    blueIcon: require('@/assets/icon/home_blue.svg'),
                    url: '/'
                },
                {
                    name: "充值",
                    icon: require('@/assets/icon/deposit.svg'),
                    blueIcon: require('@/assets/icon/deposit_blue.svg'),
                    url: '/crypto/deposit'
                },
                {
                    name: "提领",
                    icon: require('@/assets/icon/withdraw.svg'),
                    blueIcon: require('@/assets/icon/withdraw_blue.svg'),
                    url: '/crypto/withdraw'
                },
                {
                    name: "资产",
                    icon: require('@/assets/icon/wallet.svg'),
                    blueIcon: require('@/assets/icon/wallet_blue.svg'),
                    url: '/wallet'
                },
            ]
        }
    },
    methods: {
        jumpto: function(url) {
            const path = this.$route.path;
            if (url === '/' || !path.includes(url)) {
                this.$router.push(url)
            }
        }
    },
    computed: {
        sameOrigin: function() {
            const path = this.$route.path;
            if (path === '/') {
                return '/'
            } else {
                const route = this.nav.find(({ url }) => {
                    return path.startsWith(url) && url !== '/'
                });
                return route.url
            }
        }
    }
}
</script>
