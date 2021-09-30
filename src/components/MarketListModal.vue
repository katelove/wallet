<template lang="">
    <div
        class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[#32333466] z-[10]"
        @click.self="$emit('onClose')"
    >
        <div class="flex bg-white h-[400px] rounded-[12px] w-full py-[9px] px-[16px] flex-col">
            <div class="flex mb-[13px] text-[18px] font-bold">
                <p
                    class="mr-[16px]"
                    :class="tab === 'favorite' && 'selectedTab'"
                    @click="tab = 'favorite'"
                >
                    自选
                </p>
                <p
                    :class="tab === 'usdt' && 'selectedTab'"
                    @click="tab = 'usdt'"
                >
                    USDT
                </p>
            </div>
            <div class="flex text-[12px] py-[10px] border-b border-[#F4F4F4]">
                <div class="flex flex-grow-[2]">
                    交易对
                    <img
                        src="@/assets/icon/sort.png"
                        class="sortImg"
                    >
                </div>
                <div class="flex flex-grow-[2]">
                    最新价
                    <img
                        src="@/assets/icon/sort.png"
                        class="sortImg"
                    >
                </div>
                <div class="flex">
                    24小時漲跌
                    <img
                        src="@/assets/icon/sort.png"
                        class="sortImg"
                    >
                </div>
            </div>
            <div
                v-for="item in symbolList"
                :key="item.name"
                class="flex py-[15px] items-center"
                @click="jumpto(item.symbol)"
            >
                <div class="flex">
                    <Icon
                        class="w-[24px] h-[24px] mr-[16px]"
                        :src="item.icon"
                    />
                    <p class="w-[95px]">
                        {{ item.name }}
                    </p>
                </div>
                <p class="ml-[16px] flex-grow-[1]">
                    {{ ticker[item.symbol].c | dimension }}
                </p>
                <PercentPriceBulb :percent-price="ticker[item.symbol].P" />
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import PercentPriceBulb from "@/components/PercentPriceBulb.vue";
import Websocket from "@/helper/websocket";

export default {
    components: {
        Icon,
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
            ],
            ticker: {
                BTCUSDT: {},
                BNBUSDT: {},
            },
            tab: "favorite",
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
        ws.combinedStreams(["btcusdt@ticker", "bnbusdt@ticker"], callbacks);
    },
    methods: {
        jumpto(symbol) {
            location.href = `/trade/${symbol}`;
            this.$emit("onClose");
        },
    },
};
</script>

<style lang="postcss" scoped>
.sortImg {
    @apply w-[16px] h-[16px] ml-[8px];
}
.selectedTab {
    @apply border-b-[4px] border-[#FEC36B];
}
</style>
