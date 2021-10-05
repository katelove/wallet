<template>
    <div>
        <p class="text-14px">
            幣幣行情
        </p>
        <SortableList
            :columns="columns"
            :source-data="Object.entries(symbolObj)"
        >
            <template
                v-slot:symbol="{column}"
                class="flex"
            >
                <div class="text-[12px]">
                    {{ column[1].base }}
                </div>
                <div class="text-[8px] text-lightGray0">
                    /{{ column[1].quote }}
                </div>
            </template>
            <template v-slot:c="{column}">
                <div
                    class="flex flex-grow-[1] justify-center"
                    :class="parseFloat(column[1].oldC) > column[1].c ? 'text-ask' : 'text-bid'"
                >
                    ${{ column[1].c | dimension }}
                </div>
            </template>

            <template v-slot:P="{column}">
                <PercentPriceBulb :percent-price="column[1].P" />
            </template>
        </SortableList>
    </div>
</template>

<script>
import Websocket from "@/helper/websocket";
import PercentPriceBulb from "@/components/PercentPriceBulb.vue";
import SortableList from "@/components/SortableList.vue";

export default {
    components: {
        PercentPriceBulb,
        SortableList,
    },
    data() {
        return {
            symbolObj: {},
            ws: "",
            columns: [
                {
                    title: "交易对",
                    dataSlot: "symbol",
                    sortKey: "symbol",
                    sortType: "string",
                },
                {
                    title: "最新价",
                    dataSlot: "c",
                    sortKey: "c",
                    sortType: "number",
                },
                {
                    title: "24h漲跌",
                    dataSlot: "P",
                    sortKey: "P",
                    sortType: "number",
                },
            ],
        };
    },
    created() {
        let symbolObj = {};
        // init要监听的交易对
        const symbolList = this.$store.getters.symbolList.map((e) => {
            symbolObj[e.symbol] = e;
            return `${e.symbol.toLowerCase()}@ticker`;
        });
        this.symbolObj = symbolObj;

        const ws = new Websocket();
        const callbacks = {
            open: () => console.log("open"),
            close: () => console.log("closed"),
            message: (evt) => {
                const {data} = JSON.parse(evt.data);
                let newSymbolObj = Object.assign({}, this.symbolObj);

                const symbol = newSymbolObj[data.s];
                symbol.oldC = symbol?.c || "0";
                symbol.c = data.c;
                symbol.P = data.P;
                this.symbolObj = newSymbolObj;
            },
        };
        ws.combinedStreams(symbolList, callbacks);
        this.ws = ws;
    },
    beforeDestroy() {
        this.ws.unsubscribe();
    },
};
</script>
