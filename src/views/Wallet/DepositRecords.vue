<template lang="">
    <div class="pt-[16px] px-[12px] relative">
        <CryptoItem
            :symbol="crypto"
            :free="balances[crypto].free"
            :locked="balances[crypto].locked"
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
        <div class="absolute bottom-0 px-[18px]">
            <Button class="bg-mainColor text-white rounded-[8px] text-center w-[144px] h-[44px] mr-[15px]">
                收款
            </Button>
            <Button class="bg-mainColor text-white rounded-[8px] text-center w-[144px] h-[44px] ml-[15px]">
                轉帳
            </Button>
        </div>
    </div>
</template>
<script>
// import {getCryptoImgUrl} from "@/utlis";
import AssetsBlock from "@/components/AssetsBlock.vue";
import CryptoItem from "./CryptoItem.vue";
import Button from "@/components/Button.vue";
export default {
    components: {
        AssetsBlock,
        CryptoItem,
        Button,
    },
    data() {
        return {
            crypto: this.$route.params.crypto,
            assetsRecords: [],
        };
    },
    computed: {
        balances() {
            return this.$store.getters.balances;
        },
    },
};
</script>
