<template lang="">
    <BlueContainer :title="$route.params.action === 'deposit' ? '充值/收款' : '提領/轉帳'" class="mx-12px">
        <div
            v-if="$route.params.action === 'deposit'"
            class="flex h-65px text-25px justify-center items-center border-b border-melancholyBlue"
        >
            币种选择
        </div>
        <div
            class="flex mx-26px items-center mb-30px"
            :class="[$route.params.action === 'deposit' ? 'mt-18px' : 'mt-31px']"
            v-for="(value, symbol) in spot"
            :key="symbol"
            @click="goWithdraw(symbol)"
        >
            <img :src="value.image" class="w-36px h-36px mr-12px"/>
            <p class="flex-grow	">{{value.name}}</p>
            <Button bg="bg-grassGreen" rounded="rounded-10px" class="py-1 px-14px">数字货币</Button>
        </div>
    </BlueContainer>
</template>
<script>
import BlueContainer from "@/components/BlueContainer"
import Button from "@/components/Button"

export default {
    data() {
        return {
            spot: {
                // btc: {
                //     image: require("@/assets/crypto/btc.png"),
                //     name: "Bitcoin"
                // },
                // eth: {
                //     image: require("@/assets/crypto/eth.png"),
                //     name: "Ethereum"
                // },
                usdt: {
                    image: require("@/assets/crypto/usdt.png"),
                    name: "USDT"
                },
                halo: {
                    image: require("@/assets/crypto/halo.png"),
                    name: "Halo"
                },
                // snx: {
                //     image: require("@/assets/crypto/snx.png"),
                //     name: "SNX"
                // },
                // comp: {
                //     image: require("@/assets/crypto/comp.png"),
                //     name: "COMP"
                // },
                // xch: {
                //     image: require("@/assets/crypto/xch.png"),
                //     name: "XCH"
                // },
            },
        }
    },
	components: {
		BlueContainer,
        Button
	},
    methods: {
        goWithdraw: function(symbol) {
            this.$router.push(`/crypto/${this.$route.params.action}/${symbol}`)
        }
    }
}
</script>
