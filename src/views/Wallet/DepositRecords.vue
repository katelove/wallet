<template lang="">
    <div class="pt-[16px] px-[12px]">
        <CryptoItem
            :symbol="crypto.asset"
            :free="crypto.free"
            :locked="crypto.locked"
        />
        <div class="bg-[#E8E8E8] h-[10px] w-full mt-[12px]" />
        <div class="bg-white h-[34px]">
            <p class="mt-[8px] ml-[26px] text-[16px]">
                充提紀錄
            </p>
        </div>
        <div
            v-if="assetsRecords.length === 0"
            class="bg-[#F4F4F4]"
        >
            無交易
        </div>
        <div v-else>
            <AssetsBlock
                v-for="order in orders"
                :key="order.i"
                :side="order.side"
                :transact-time="order.time"
                :symbol="order.symbol"
                :orig-qty="order.origQty"
                :executed-qty="order.executedQty"
                :price="order.price"
            />
        </div>
        <!-- <div class="bg-lightGray3">
            <div class="flex flex-row">
                <router-link to="/crypto/deposit">
                    <img
                        :src="getCryptoImgUrl($route.params.crypto)"
                        class="w-[25px] h-[25px] mr-[7px]"
                    >
                </router-link>
                <p>{{ crypto.toUpperCase() }}</p>
            </div>
        </div> -->
    </div>
</template>
<script>
import {getCryptoImgUrl} from "@/utlis";
import AssetsBlock from "@/components/AssetsBlock.vue";
import CryptoItem from "./CryptoItem.vue";
export default {
    components: {
        AssetsBlock,
        CryptoItem,
    },
    data() {
        return {
            crypto: this.$route.params.crypto,
            assetsRecords: [],
        };
    },
    methods: {
        getCryptoImgUrl,
    },
};
</script>
