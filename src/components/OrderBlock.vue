<template lang="">
    <div
        v-bind="$attrs"
        class="bg-white boxShadow rounded-12px text-black w-344px h-132px"
    >
        <div class="flex justify-between pt-2 pl-4 pr-4">
            <div
                v-if="side === 'BUY'"
                class="text-greenWord text-xs"
            >
                限價買入({{ progress }}%)
            </div>
            <div
                v-else
                class="text-redWord text-xs"
            >
                限價賣出({{ progress }}%)
            </div>
            <div class="text-xs text-lightGray">
                2021/04/10 15:06:06
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
                <h1>BTC/USDT</h1>
                <div class="flex justify-center items-center">
                    <h1 class="text-orangeWord text-xs pr-2">
                        撤單
                    </h1>
                </div>
            </div>
            <div class="flex justify-between mt-4">
                <h1 class="text-xs">
                    數量
                </h1>
                <h1 class="text-xs">
                    0.00048 BTC
                </h1>
            </div>
            <div class="flex justify-between mt-2">
                <h1 class="text-xs">
                    掛單金額
                </h1>
                <h1 class="text-xs">
                    304.82 USDT
                </h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "OrderBlock",
    props: {
        side: {
            type: String,
            default: "BUY",
        },
        progress: {
            type: String,
            default: "10",
        },
    },
    computed: {
        changeProgress() {
            if (this.side === "BUY") {
                return `linear-gradient( to right, #46DF4C ${this.progress}%, #f4f4f4 10%)`;
            } else {
                return `linear-gradient( to right, #FF8E8E ${this.progress}%, #f4f4f4 10%)`;
            }
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
