<template>
    <div class="bg-lightGray3">
        <div class="tabContainer flex px-[16px] py-[11px] items-center bg-white">
            <p
                v-for="tab in tabs"
                :key="tab.key"
                class="text-[18px] font-bold mr-[16px]"
                :class="tab.key === selectedTab ? 'text-drak0 border-b-[4px] border-b-mainColor' : 'text-lightGray0'"
                @click="selectedTab = tab.key"
            >
                {{ tab.name }}
            </p>
        </div>
        <SortableList
            :columns="columns"
            :source-data="filterList"
            class="rounded-none px-[15px] mt-[8px]"
        >
            <template v-slot:symbol="{column}">
                <div class="flex flex-col">
                    <div class="flex">
                        <div class="text-[12px]">
                            {{ column[1].base }}
                        </div>
                        <div class="text-[8px] text-lightGray0">
                            /{{ column[1].quote }}
                        </div>
                    </div>
                    <div class="flex text-lightGray0 text-[11px]">
                        <div class="text-[12px]">
                            {{ column[1].baseChinese }}
                        </div>
                        <div class="text-[8px]">
                            /{{ column[1].quoteChinese }}
                        </div>
                    </div>
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
            selectedTab: "favorite",
            tabs: [
                {
                    key: "favorite",
                    name: "自選",
                },
                {
                    key: "usdt",
                    name: "USDT",
                },
            ],
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
            favorite: JSON.parse(localStorage.getItem("favorite")) || [],
        };
    },
    computed: {
        filterList() {
            const favorite = this.favorite;
            const symbolObj = this.symbolObj;
            const selectedTab = this.selectedTab;
            if (selectedTab === "favorite") {
                if (favorite.length === 0) {
                    return Object.entries(symbolObj);
                } else {
                    let favoriteObj = {};
                    favorite.forEach((symbol) => {
                        favoriteObj[symbol] = symbolObj[symbol];
                    });
                    return Object.entries(favoriteObj);
                }
            } else {
                return Object.entries(symbolObj);
            }
        },
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
