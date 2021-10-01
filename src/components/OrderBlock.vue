<template lang="">
    <div
        v-bind="$attrs"
        class="bg-white boxShadow rounded-12px text-black w-344px h-132px mb-[8px]"
    >
        <div class="flex justify-between pt-2 pl-4 pr-4">
            <div
                class="text-greenWord text-xs"
                :class="side === 'buy' ? 'bid' : 'ask'"
            >
                限價{{ side === "buy" ? "买入" : "卖出" }}({{ progress }}%)
            </div>
            <div class="text-xs text-lightGray">
                {{ transactTime | formateToDateTimeSecond }}
            </div>
        </div>
        <div class="sliderContainer flex items-center mt-1">
            <input
                type="range"
                min="0"
                max="100"
                :value="progress"
                class="pt-1 ht-1"
                :style="{background: changeProgress}"
            >
        </div>
        <div class="pt-2 pl-4 pr-4">
            <div class="flex justify-between">
                <h1>{{ symbol }}</h1>
                <div class="flex justify-center items-center">
                    <h1
                        class="text-orangeWord text-xs pr-2"
                        @click="cancelOrderHanlder"
                    >
                        撤單
                    </h1>
                </div>
            </div>
            <div class="flex justify-between mt-4">
                <h1 class="text-xs">
                    數量
                </h1>
                <h1 class="text-xs">
                    {{ origQty | dimension }} BTC
                </h1>
            </div>
            <div class="flex justify-between mt-2">
                <h1 class="text-xs">
                    掛單金額
                </h1>
                <h1 class="text-xs">
                    {{ price | dimension }} USDT
                </h1>
            </div>
        </div>
    </div>
</template>
<script>
import {cancelOrder} from "@/api";

export default {
    name: "OrderBlock",
    props: {
        side: {
            type: String,
            default: "BUY",
        },
        transactTime: {
            type: Number,
            default: 0,
        },
        symbol: {
            type: String,
            default: "",
        },
        origQty: {
            type: String,
            default: "",
        },
        accumulate: {
            type: String,
            default: "",
        },
        price: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            progress: 0,
        };
    },
    computed: {
        changeProgress() {
            const progress = this.progress;
            return `linear-gradient( to right, ${this.side === "BUY" ? "#46DF4C" : "#FF8E8E"} ${progress}%, #f4f4f4 ${progress}%)`;
        },
    },
    methods: {
        cancelOrderHanlder() {
            cancelOrder(this.symbol.toLowerCase()).then(() => {
                this.$toasted.show("撤單成功");
            });
        },
    },
};
</script>

<style scoped>
.boxShadow {
    box-shadow: 0px 0px 16px #e8e8e8;
}
.sliderContainer input {
    -webkit-appearance: none;
    -moz-apperance: none;
    height: 2px;
    width: 100%;
    outline: none;
    border-radius: 0;
    overflow: hidden;
    cursor: pointer;
}

/* 拖曳扭 */
input[type="range"]::-webkit-slider-thumb {
    display: none;
}
</style>
