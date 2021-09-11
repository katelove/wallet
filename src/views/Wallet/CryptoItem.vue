<template lang="">
    <div class="pt-37px px-9px rounded-10px border border-melancholyBlue">
        <div
            v-for="(value, symbol) in spot"
            :key="symbol"
            class="flex justify-between text-12px px-13px py-6px mb-32px rounded-10px shadow-normal"
        >
            <div>
                <div class="flex items-center mb-2px">
                    <img class="mr-8px" :src="value.image" />
                    <p>{{value.name}}</p>
                </div>
                <div class="flex text-yewLime mb-3px text-10px">
                    <p class="mr-20px">可用</p>
                    <p>冻结</p>
                </div>
                <div class="flex text-yewLime mb-3px text-10px">
                    <p class="mr-20px">0.00</p>
                    <p>0.00</p>
                </div>
            </div>
            <div>
                <p>0.00</p>
                <p class="mt-6px mb-3px text-yewLime">折合</p>
                <p class="text-yewLime">0.00</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            spot: {
                btc: {
                    image: require("@/assets/crypto/btc.svg"),
                    name: "Bitcoin"
                },
                eth: {
                    image: require("@/assets/crypto/eth.svg"),
                    name: "Ethereum"
                },
                busd: {
                    image: require("@/assets/crypto/busd.svg"),
                    name: "BUSD"
                },
                bnb: {
                    image: require("@/assets/crypto/bnb.svg"),
                    name: "BNB"
                },
            },
        }
    }
}
</script>
