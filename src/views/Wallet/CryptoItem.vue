<template lang="">
    <div class="pt-37px px-9px rounded-10px border border-melancholyBlue">
        <div class="flex justify-between text-12px px-13px py-6px mb-32px rounded-10px shadow-normal">
            <div>
                <div class="flex items-center mb-6px">
                    <img
                        class="mr-8px w-[36px] h-[36px]"
                        :src="getCryptoImgUrl(symbol.toLowerCase())"
                    >
                    <p>{{ symbol }}</p>
                </div>
                <div class="flex text-yewLime mb-3px text-10px">
                    <p class="mr-20px">
                        可用
                    </p>
                    <p>冻结</p>
                </div>
                <div class="flex text-yewLime mb-3px text-10px">
                    <p class="mr-20px">
                        {{ free | dimension }}
                    </p>
                    <p>{{ locked | dimension }}</p>
                </div>
            </div>
            <div>
                <p class="h-36px flex items-center">
                    {{ free | dimension }}
                </p>
                <p class="mt-6px mb-3px text-yewLime">
                    折合
                </p>
                <p class="text-yewLime">
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
