<template lang="">
    <div class="bg-[#323334] min-h-[100vh]">
        <div class="flex justify-between items-center pt-[13px] pb-[13px]">
            <div class="flex justify-start items-center pl-[23.5px]">
                <img
                    src="@/assets/icon/vector.png"
                    class="w-[9px] h-[10.5px] text-center mr-[15.5px]"
                    @click="$router.back()"
                >
                <h1 class="text-[16px] text-white">
                    {{ ticker.s }}
                </h1>
            </div>
            <div class="pr-[19px]">
                <Icon
                    :src="require(`@/assets/icon/${favorite.includes(symbol) ? 'isFavorite' : 'noFavorite'}.png`)"
                    class="w-[24px] h-[24px]"
                    @click="toggleFavorite"
                />
            </div>
        </div>
        <div class="flex justify-between items-center pl-[16px] pt-[15px] pb-[15px]">
            <div class="flex flex-col">
                <h1 class="text-[16px] text text-ask">
                    {{ ticker.c | dimension }}
                </h1>
                <div class="flex justify-start">
                    <h1 class="text-[10px] text text-white">
                        = {{ ticker.c | dimension }}
                    </h1>
                    <div class="bg-ask text-white text-[10px] rounded-[18px] w-[49px] h-[18px] text-center ml-[8px]">
                        {{ ticker.P | dimension }}%
                    </div>
                </div>
            </div>
            <div class="pr-[16px]">
                <div class="flex justify-between">
                    <h1 class="text-[#767778] text-[8px] pr-[100px]">
                        高
                    </h1>
                    <h1 class="text-white text-[8px]">
                        {{ ticker.h | dimension }}
                    </h1>
                </div>
                <div class="flex justify-between">
                    <h1 class="text-[#767778] text-[8px]">
                        低
                    </h1>
                    <h1 class="text-white text-[8px]">
                        {{ ticker.l | dimension }}
                    </h1>
                </div>
                <div class="flex justify-between">
                    <h1 class="text-[#767778] text-[8px]">
                        24H
                    </h1>
                    <h1 class="text-white text-[8px]">
                        {{ ticker.v | dimension }}
                    </h1>
                </div>
            </div>
        </div>
        <div id="tradingview_7fe28" />
        <div class="flex justify-between items-center pr-7 pl-7 pt-[101px]">
            <Button
                class="w-[152px] h-[44px] rounded-[8px] text-center bg-bid"
                @click="$router.push(`/trade/${symbol}/BUY`)"
            >
                買入
            </Button>
            <Button
                class="w-[152px] h-[44px] rounded-[8px] text-center bg-ask"
                @click="$router.push(`/trade/${symbol}/SELL`)"
            >
                賣出
            </Button>
        </div>
    </div>
</template>
<script>
import Icon from "@/components/Icon.vue";
import Button from "@/components/Button.vue";
import Websocket from "@/helper/websocket";
export default {
    components: {
        Button,
        Icon,
    },
    data() {
        return {
            symbol: this.$route.params.symbol.toUpperCase(),
            ticker: {},
            favorite: JSON.parse(localStorage.getItem("favorite")) || [],
        };
    },
    created() {
        const ws = new Websocket();

        ws.tickerWS(this.$route.params.symbol, {
            message: (evt) => {
                const data = JSON.parse(evt.data);
                this.ticker = data;
            },
        });
    },
    mounted() {
        // eslint-disable-next-line no-undef
        const chart = new TradingView.widget({
            width: "100%",
            height: 286,
            symbol: `BINANCE:${this.$route.params.symbol}`,
            interval: "D",
            timezone: "Asia/Taipei",
            theme: "dark",
            style: "1",
            locale: "zh_TW",
            // eslint-disable-next-line camelcase
            toolbar_bg: "#f1f3f6",
            // eslint-disable-next-line camelcase
            enable_publishing: false,
            withdateranges: true,
            // eslint-disable-next-line camelcase
            hide_side_toolbar: true,
            // eslint-disable-next-line camelcase
            allow_symbol_change: true,
            // eslint-disable-next-line camelcase
            save_image: false,
            // eslint-disable-next-line camelcase
            container_id: "tradingview_7fe28",
        });
        return chart;
    },
    methods: {
        toggleFavorite() {
            let favorite = this.favorite;
            const symbol = this.symbol;
            const index = favorite.indexOf(symbol);
            if (index === -1) {
                favorite.push(symbol);
            } else {
                favorite.splice(index, 1);
            }
            localStorage.setItem("favorite", JSON.stringify(favorite));
        },
    },
};
</script>
