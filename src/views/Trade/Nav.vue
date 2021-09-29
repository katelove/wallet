<template lang="">
    <div class="flex py-[13px] justify-between">
        <div class="flex items-center">
            <Icon
                :src="require('@/assets/icon/nav.png')"
                class="w-[24px] h-[24px]"
            />

            <p class="ml-[11px] mr-[8px]">{{ symbol }}</p>

            <div
                class="px-[8px] py-[4px] text-white rounded-full text-[12px]"
                :class="ticker.c > old.c ? 'bg-bid' : 'bg-ask'"
            >
                {{ ticker.P }}%
            </div>
        </div>

        <div class="flex items-center">
            <Icon
                :src="require('@/assets/icon/kline.png')"
                class="mr-[8px] w-[24px] h-[24px]"
            />
            <Icon
                :src="require(`@/assets/icon/${favorite.includes(symbol) ? 'isFavorite' : 'noFavorite'}.png`)"
                class="w-[24px] h-[24px]"
                @click="toggleFavorite"
            />
        </div>
    </div>
</template>

<script>
import Icon from "@/components/Icon.vue"
import Websocket from '@/helper/websocket';

export default {
    components: {
        Icon
    },
    data() {
        return {
            symbol: this.$route.params.symbol.toUpperCase(),
            ticker: {},
            old: {},
            favorite: JSON.parse(localStorage.getItem('favorite')) || []
        }
    },
    created() {
        const ws = new Websocket();

        ws.tickerWS(this.$route.params.symbol, {
            message: evt => {
                const data = JSON.parse(evt.data);

                this.old = JSON.parse(JSON.stringify(this.ticker));
                this.ticker = data;
            }
        });
    },
    methods: {
        toggleFavorite() {
            let favorite = this.favorite;
            const symbol = this.symbol;
            const index = favorite.indexOf(symbol)
            if (index === -1) {
                favorite.push(symbol)
            } else {
                favorite.splice(index, 1)
            }
            localStorage.setItem('favorite', JSON.stringify(favorite))
        }
    },
}
</script>
