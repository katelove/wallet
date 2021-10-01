<template lang="">
    <div class="rounded-10px border border-melancholyBlue mb-[10px]">
        <div class="flex py-2 px-22px text-12px border-b border-melancholyBlue">
            <p class="flex flex-grow-[2]">
                名称
            </p>
            <p class="flex flex-grow-[1]">
                最新价
            </p>
            <p>24小時漲跌</p>
        </div>
        <div class="my-2">
            <div
                v-for="(item, index) in symbolList"
                :key="item.name"
                class="flex px-22px text-12px items-center"
                :class="index !== symbolList.length - 1 && 'mb-[21px]'"
                @click="$router.push(`/trade/${item.symbol}`)"
            >
                <img
                    :src="item.icon"
                    class="w-[25px] h-[25px] mr-[8px]"
                    style="width: 25px; height: 25px"
                >
                <p>
                    {{ item.symbol }}
                </p>
                <p class="flex flex-grow-[1] justify-center">
                    ${{ ticker[item.symbol].c | dimension }}
                </p>
                <PercentPriceBulb :percent-price="ticker[item.symbol].P" />
            </div>
        </div>
    </div>
</template>

<script>
import Websocket from "@/helper/websocket";
import PercentPriceBulb from "@/components/PercentPriceBulb.vue";

export default {
    components: {
        PercentPriceBulb,
    },
    data() {
        return {
            symbolList: [
                {
                    name: "BTC/USDT",
                    symbol: "BTCUSDT",
                    icon: require("@/assets/crypto/btc.png"),
                },
                {
                    name: "BNB/USDT",
                    symbol: "BNBUSDT",
                    icon: require("@/assets/crypto/bnb.png"),
                },
                {
                    name: "ETH/USDT",
                    symbol: "ETHUSDT",
                    icon: require("@/assets/crypto/eth.png"),
                },
            ],
            ticker: {
                BTCUSDT: {},
                ETHUSDT: {},
                BNBUSDT: {},
            },
            ws: "",
        };
    },
    created() {
        const ws = new Websocket();

        const callbacks = {
            open: () => console.log("open"),
            close: () => console.log("closed"),
            message: (evt) => {
                const {data} = JSON.parse(evt.data);
                this.ticker[data.s] = data;
            },
        };
        ws.combinedStreams(["btcusdt@ticker", "bnbusdt@ticker", "ethusdt@ticker"], callbacks);
        this.ws = ws;
    },
    beforeDestroy() {
        this.ws.unsubscribe();
    },
};
</script>
