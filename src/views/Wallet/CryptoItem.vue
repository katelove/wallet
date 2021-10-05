<template lang="">
    <div class="mt-[15px] px-[12px]">
        <div class="flex justify-between text-12px pl-[4px] px-[7px] mx-[12px] shadow-small">
            <div class="flex flex-row mt-[7px] mb-[7px] ml-[22px]">
                <div class="mr-[15px]">
                    <img
                        class="w-[24px] h-[24px]"
                        :src="getCryptoImgUrl(symbol.toLowerCase())"
                    >
                </div>
                <div class="flex flex-col justify-evenly items-end text-[14px]">
                    <p class="text-[16px]">
                        {{ symbol }}
                    </p>
                    <p class="text-[#767778]">
                        可用
                    </p>
                    <p>
                        {{ free | dimension }}
                    </p>
                </div>
            </div>
            <div class="flex flex-col justify-evenly items-end mt-[7px] mb-[7px] mr-[4px] text-[14px]">
                <p class="text-[16px]">
                    {{ amount | dimension }}
                </p>
                <p class="text-[#767778]">
                    凍結
                </p>
                <p>
                    {{ locked | dimension }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import {getCryptoImgUrl} from "@/utlis";
import Big from "big.js";
export default {
    props: {
        symbol: {
            required: true,
            type: String,
        },
        free: {
            required: true,
            type: String,
        },
        locked: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            amount: "",
        };
    },
    created() {
        this.amount = Big(this.free).plus(this.locked).toFixed(8);
    },
    methods: {
        getCryptoImgUrl,
    },
};
</script>
