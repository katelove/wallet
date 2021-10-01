/* eslint-disable no-debugger */
<template lang="">
    <div>
        <div class="flex mb-[16px]">
            <div
                class="mr-[16px] cursor-pointer"
                :class="side === 'BUY' && 'sideBuy'"
                @click="side = 'BUY'"
            >
                买入
            </div>
            <div
                class="cursor-pointer"
                :class="side === 'SELL' && 'sideSell'"
                @click="side = 'SELL'"
            >
                卖出
            </div>
        </div>
        <div class="flex justify-between mb-[8px]">
            <Button
                class="border text-[14px] bg-transparent px-[16px] py-[9px] rounded-[8px] w-[48%]"
                :class="type === 'LIMIT' ? 'typeMarket' : 'typeLimit'"
                @click="type = 'LIMIT'"
            >
                限價
            </Button>
            <Button
                class="border text-[14px] bg-transparent px-[16px] py-[9px] rounded-[8px] w-[48%]"
                :class="type === 'MARKET' ? 'typeMarket' : 'typeLimit'"
                @click="type = 'MARKET'"
            >
                市價
            </Button>
        </div>

        <input
            v-show="type === 'LIMIT'"
            v-model="price"
            class="formInput"
            placeholder="價格(USDT)"
        >
        <input
            v-show="type === 'LIMIT'"
            v-model="quantity"
            class="formInput"
            placeholder="數量(BTC)"
        >
        <VueSlider
            v-model="rangeOfTotal"
            :adsorb="true"
            :interval="25"
            @change="calculateQty"
        />
        <input
            v-model="quoteOrderQty"
            class="formInput"
            placeholder="總額(USDT)"
        >
        <div class="flex justify-between text-[12px] mb-[16px]">
            <p>餘額可用</p>
            <p>{{ balance.free }} USDT</p>
        </div>
        <Button
            class="rounded-[8px] w-full py-[11px]"
            :class="[canSubmit]"
            @click="['bg-bid', 'bg-ask'].includes(canSubmit) && newOrderHanlder()"
        >
            買入
        </Button>
    </div>
</template>
<script>
import {newOrder, getBalance} from "@/api";
import Button from "@/components/Button.vue";
import Big from "big.js";
import VueSlider from "vue-slider-component";
import "@/css/slider.css";

export default {
    components: {
        Button,
        VueSlider,
    },
    data() {
        return {
            symbol: this.$route.params.symbol.toUpperCase(),
            side: this.$route.params.side || "BUY",
            type: "LIMIT",
            quantity: "",
            price: "48000",
            quoteOrderQty: "0",
            rangeOfTotal: "0",
            balance: {},
        };
    },
    computed: {
        canSubmit() {
            const quantity = parseFloat(this.quantity);
            const price = parseFloat(this.price);
            const quoteOrderQty = parseFloat(this.quoteOrderQty);
            const type = this.type;
            const side = this.side;
            let check = false;
            if (type === "LIMIT") {
                check = quantity && price;
            } else {
                check = quoteOrderQty;
            }

            let bg;
            if (!check) {
                bg = "bg-[#E8E8E8]";
            } else if (side === "BUY") {
                bg = "bg-bid";
            } else if (side === "SELL") {
                bg = "bg-ask";
            }
            return bg;
        },
    },
    watch: {
        price(newV) {
            const bigPrice = Big(newV || 0);
            const bigQuantity = Big(this.quantity || 0);
            const bigFree = Big(this.balance.free || 0);
            const quoteOrderQty = bigPrice.times(bigQuantity);
            this.quoteOrderQty = quoteOrderQty.toFixed(3);
            this.rangeOfTotal = quoteOrderQty.div(bigFree).times(100).toFixed(0);
        },
        quantity(newV) {
            const bigQuantity = Big(newV || 0);
            const bigPrice = Big(this.price || 0);
            const bigFree = Big(this.balance.free || 0);
            const quoteOrderQty = bigQuantity.times(bigPrice);
            this.quoteOrderQty = quoteOrderQty.toFixed(3);
            this.rangeOfTotal = quoteOrderQty.div(bigFree).times(100).toFixed(0);
        },
    },
    created() {
        getBalance().then((rep) => {
            const {balances} = rep.data;
            const balance = balances.find((e) => e.asset === "USDT");
            balance.free = Big(balance.free).toFixed(2);
            this.balance = balance;
        });
    },
    methods: {
        newOrderHanlder() {
            const data = {
                symbol: this.symbol,
                side: this.side,
                type: this.type,
            };
            if (data.type === "LIMIT") {
                data.quantity = this.quantity;
                data.price = this.price;
            } else {
                data.quoteOrderQty = this.quoteOrderQty;
            }
            newOrder(JSON.stringify(data))
                .then(() => {
                    this.$toasted.show("下单成功");
                })
                .catch((error) => {
                    this.$toasted.show(error?.response?.data?.code || "下单失败请在试一次", {
                        type: "error",
                    });
                });
        },
        calculateQty() {
            const bigPrice = Big(this.price || 0);
            const bigFree = Big(this.balance.free || 0);
            this.quantity = bigFree.times(this.rangeOfTotal).div(100).div(bigPrice).toFixed(5);
        },
    },
};
</script>

<style lang="postcss" scoped>
.formInput {
    @apply rounded-[8px] bg-[#F4F4F4] w-full px-[16px] py-[8px] mb-[8px];
}
.typeMarket {
    @apply border-mainColor text-mainColor;
}
.typeLimit {
    @apply border-[#E8E8E8] text-[#E8E8E8];
}
.sideSell {
    @apply text-ask border-b-[2px] border-ask;
}
.sideBuy {
    @apply text-bid border-b-[2px] border-bid;
}
</style>
