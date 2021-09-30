<template>
    <div class="bg-white p-4 w-344px h-88px rounded-xl boxShadow mb-[8px]">
        <div class="flex justify-start">
            <img
                :src="getCryptoImgUrl(symbol.toLowerCase())"
                style="width: 24px; height: 24px"
            >
            <h1 class="pl-2 text-base h-[22px]">
                {{ symbol }}
            </h1>
        </div>
        <div class="mt-4 flex justify-between">
            <h1 class="text-xs">
                可用數量
            </h1>
            <h1 class="text-xs">
                {{ free | dimension }} {{ symbol.toLowerCase() }}
            </h1>
        </div>
    </div>
</template>
<script>
import {getCryptoImgUrl} from "@/utlis";

export default {
    name: "MoneyBlock",
    props: {
        symbol: {
            type: String,
            default: "",
        },
        free: {
            type: String,
            default: "",
        },
    },
    methods: {
        getCryptoImgUrl,
    },
};
</script>
<style scoped>
.boxShadow {
    box-shadow: 0px 0px 16px #e8e8e8;
}
</style>
