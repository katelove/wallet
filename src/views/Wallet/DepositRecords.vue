<template lang="">
    <div class="pt-[16px] relative h-[75vh]">
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
            class="bg-[#F4F4F4] h-[40vh] flex items-center justify-center"
        >
            無交易
        </div>
        <div
            v-else
            class="px-[16px]"
        >
            <AssetsBlock />
        </div>
        <div class="absolute bottom-0 m-auto right-0 left-0 text-center">
            <Button class="bg-mainColor text-white rounded-[8px] text-center w-[144px] h-[44px] mr-[16px]">
                收款
            </Button>
            <Button class="bg-mainColor text-white rounded-[8px] text-center w-[144px] h-[44px] ml-[16px]">
                轉帳
            </Button>
        </div>
    </div>
</template>
<script>
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
