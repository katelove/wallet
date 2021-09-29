<template lang="">
<div class="my-[5px]">
    <p
        class="text-[18px]"
        :class="ticker.c > old.c ? 'text-bid' : 'text-ask'"
    >
        {{ ticker.c | dimension }}
    </p>
    <p class="text-textGray text-[14px]">
        ${{ ticker.c | dimension }}
    </p>
</div>
</template>
<script>
import Websocket from '@/helper/websocket';

export default {
    data() {
        return {
            ticker: {},
            old: {}
        };
    },
    created() {
        const ws = new Websocket();

        ws.miniTickerWS(this.$route.params.symbol, {
            message: evt => {
                const data = JSON.parse(evt.data);

                this.old = JSON.parse(JSON.stringify(this.ticker));
                this.ticker = data;
            }
        });
    },
};
</script>
