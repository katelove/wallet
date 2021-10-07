<template lang="">
    <div class="my-[5px]">
        <p
            class="text-[18px]"
            :class="ticker.c > old.c ? 'text-bid' : 'text-ask'"
        >
            {{ ticker.c | dimension }}
        </p>
        <p class="text-lightGray0 text-[14px]">
            ${{ ticker.c | dimension }}
        </p>
    </div>
</template>
<script>
import Websocket from "@/helper/websocket";

export default {
    data() {
        return {
            ticker: {},
            old: {},
            ws: "",
            symbol: this.$route.params.symbol,
        };
    },
    created() {
        this.webSocketConnect();
    },
    activated() {
        if (this.symbol !== this.$route.params.symbol) {
            this.activatedInit();
            this.webSocketConnect();
        }
    },
    methods: {
        activatedInit() {
            this.ticker = {};
            this.old = {};
            this.symbol = this.$route.params.symbol;
            this.ws.unsubscribe();
        },
        webSocketConnect() {
            this.ws = new Websocket();

            this.ws.miniTickerWS(this.symbol, {
                message: (evt) => {
                    const data = JSON.parse(evt.data);

                    this.old = JSON.parse(JSON.stringify(this.ticker));
                    this.ticker = data;
                },
            });
        },
    },
};
</script>
