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
                :style="{'background-image': calcGradientPercent('ask', item[3])}"
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
                :style="{'background-image': calcGradientPercent('bid', item[3])}"
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
                askCount: 0,
                bidCount: 0,
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
            const count = this.orderBook[`${type}Count`];
            if (count > 0) {
                const weight = num.div(count).times(100).toFixed(0);
                return `linear-gradient(to left, ${type === "bid" ? "#c8eedc" : "#fd595940"} ${weight}%, rgba(0, 0, 0, 0) ${weight}%)`;
            }
            return "";
        },
    },
};
</script>

<style scoped></style>
