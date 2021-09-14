<template lang="">
    <div class="pt-37px px-9px rounded-10px border border-melancholyBlue">
        <div
            v-for="(value, symbol) in spot"
            :key="symbol"
            class="flex justify-between text-12px px-13px py-6px mb-32px rounded-10px shadow-normal"
        >
            <div>
                <div class="flex items-center mb-6px">
                    <img class="mr-8px" :src="value.image" style="width: 36px;height: 36px"/>
                    <p>{{value.name}}</p>
                </div>
                <div class="flex text-yewLime mb-3px text-10px">
                    <p class="mr-20px">可用</p>
                    <p>冻结</p>
                </div>
                <div class="flex text-yewLime mb-3px text-10px">
                    <p class="mr-20px">{{value.balance}}</p>
                    <p>0.00</p>
                </div>
            </div>
            <div>
                <p class="h-36px flex items-center">{{value.balance}}</p>
                <p class="mt-6px mb-3px text-yewLime">折合</p>
                <p class="text-yewLime">0.00</p>
            </div>
        </div>
    </div>
</template>
<script>
import { getBalance } from "@/api"
export default {
    created() {
        getBalance()
        .then(data => {
            data.wallets.forEach(({ coin, balance }) => {
                this.$set(this.spot[coin], 'balance', balance)
            });
        })
    },
    data() {
        return {
            spot: {
                usdt: {
                    image: require("@/assets/crypto/usdt.png"),
                    name: "USDT"
                },
                halo: {
                    image: require("@/assets/crypto/halo.png"),
                    name: "HALO"
                },
            },
        }
    }
}
</script>
