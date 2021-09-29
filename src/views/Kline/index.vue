<template lang="">
    <div id="tradingview_7fe28" />
</template>
<script>
export default {
    mounted() {
        // eslint-disable-next-line no-undef
        const chart = new TradingView.widget({
            "width": "100%",
            "height": 286,
            "symbol": `BINANCE:${this.$route.params.symbol}`,
            "interval": "D",
            "timezone": "Asia/Taipei",
            "theme": "dark",
            "style": "1",
            "locale": "zh_TW",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "withdateranges": true,
            "hide_side_toolbar": true,
            "allow_symbol_change": true,
            "save_image": false,
            "container_id": "tradingview_7fe28"
        });
        return chart;
    }
};
</script>
