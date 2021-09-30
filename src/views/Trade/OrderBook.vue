<template lang="">
    <div class="text-[12px]">
        <div class="flex justify-between">
            <p>价格</p>
            <p>数量</p>
        </div>

        <div class="flex h-[110px] flex-col-reverse overflow-y-scroll">
            <div
                v-for="item in orderBook.ask"
                :key="item[0].toFixed()"
                class="flex justify-between"
            >
                <p class="text-ask">
                    {{ item[0] | dimension }}
                </p>
                <p>{{ item[1] }}</p>
            </div>
        </div>

        <PriceTicker />

        <div class="flex h-[110px] flex-col overflow-y-scroll">
            <div
                v-for="item in orderBook.bid"
                :key="item[0].toFixed()"
                class="flex justify-between"
            >
                <p class="text-bid">
                    {{ item[0] | dimension }}
                </p>
                <p>{{ item[1] }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Websocket from "@/helper/websocket";
import PriceTicker from "./PriceTicker";
import {orderbookUpdateFromWebsocket} from "@/helper/orderBookManager";

export default {
    components: {
        PriceTicker,
    },
    data() {
        return {
            orderBook: {
                symbol: this.$route.params.symbol.toLocaleUpperCase(),
                ask: [],
                bid: [],
                lastUpdateId: "",
            },
            ws: "",
        };
    },
    created() {
        this.ws = new Websocket();
        this.ws.partialBookDepth(this.orderBook.symbol, "", "1000ms", {
            message: (evt) => {
                const data = JSON.parse(evt.data);
                orderbookUpdateFromWebsocket(this.orderBook, data);
            },
        });
    },
    beforeDestroy() {
        this.ws.unsubscribe();
    },
    methods: {
        calcGradientPercent: function (type, num) {
            const total = this.streamData.depthTotal[type];
            const weight = parseFloat(((num / total) * 100).toFixed(2));
            return `linear-gradient(to left, rgba(2, 199, 122, 0.25) ${weight}%, rgba(0, 0, 0, 0) ${weight}%)`;
        },
    },
};
</script>

<style scoped></style>
