<template lang="">
    <div class="mt-[15px] px-[12px]">
        <div class="flex justify-between text-12px pl-[4px] px-[7px] mx-[12px] shadow-normal">
            <div class="flex flex-row mt-[7px] mb-[7px] ml-[22px]">
                <div class="mr-[15px]">
                    <img
                        class="w-[24px] h-[24px]"
                        :src="getCryptoImgUrl(symbol.toLowerCase())"
                    >
                </div>
                <div class="flex flex-col justify-evenly items-end">
                    <p class="text-[16px]">
                        {{ symbol }}
                    </p>
                    <p class="text-[#767778] text-[14px]">
                        可用
                    </p>
                    <p class="text-[14px]">
                        {{ locked | dimension }}
                    </p>
                </div>
            </div>
            <div class="flex flex-col justify-evenly items-end mt-[7px] mb-[7px] mr-[4px]">
                <p class="text-[16px]">
                    {{ free | dimension }}
                </p>
                <p class="text-[#767778] text-[14px]">
                    凍結
                </p>
                <p class="text-[14px]">
                    {{ locked | dimension }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import {getCryptoImgUrl} from "@/utlis";

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
    methods: {
        getCryptoImgUrl,
    },
};
</script>
