<template lang="">
    <div class="flex py-[13px] justify-between">
        <div class="flex items-center">
            <Icon
                :src="require('@/assets/icon/nav.png')"
                class="w-[24px] h-[24px]"
                @click="showMarketModal = true"
            />

            <p class="ml-[11px] mr-[8px]">
                {{ symbol }}
            </p>

            <PercentPriceBulb :percent-price="ticker.P" />
        </div>

        <div class="flex items-center">
            <Icon
                :src="require('@/assets/icon/kline.png')"
                class="mr-[8px] w-[24px] h-[24px]"
                @click="$router.push(`/kline/${symbol}`)"
            />
            <Icon
                :src="require(`@/assets/icon/${favorite.includes(symbol) ? 'isFavorite' : 'noFavorite'}.png`)"
                class="w-[24px] h-[24px]"
                @click="toggleFavorite"
            />
        </div>
        <MarketListModal
            v-show="showMarketModal"
            @onClose="showMarketModal = false"
        />
    </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
import Websocket from "@/helper/websocket";
import MarketListModal from "@/components/MarketListModal.vue";
import PercentPriceBulb from "@/components/PercentPriceBulb.vue";

export default {
    components: {
        Icon,
        MarketListModal,
        PercentPriceBulb,
    },
    data() {
        return {
            showMarketModal: false,
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
