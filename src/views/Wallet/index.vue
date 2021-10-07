<template lang="">
    <div class="my-2 pb-[15px]">
        <div class="bg-mainColor rounded-[12px] flex flex-col items-start justify-center pl-[28px] pt-[16px] pb-[16px] mx-[12px]">
            <p class="font-bold text-white text-[18px]">
                總資產折合 (USDT)
            </p>
            <div class="flex items-center justify-start">
                <p class="text-[16px] text-white border-0 bg-mainColor w-[101px]">
                    {{ amountTotal }}
                </p>
                <Icon
                    class="w-[16px] h-[16px]"
                    :src="eyePic"
                    @click="toggle"
                />
            </div>
        </div>
        <div class="flex items-center justify-center mt-[16px] mb-[11px] text-[12px]">
            <div class="mx-[34px] w-[53px] h-[60px]">
                <router-link :to="'/crypto/deposit'">
                    <Icon
                        class="m-auto w-[40px] h-[40px]"
                        :src="require('@/assets/icon/deposit.png')"
                    />
                </router-link>
                <p class="mt-[8px] text-center">
                    充值/收款
                </p>
            </div>
            <div class="mx-[34px] w-[53px] h-[60px]">
                <router-link :to="'/crypto/withdraw'">
                    <Icon
                        class="m-auto w-[40px] h-[40px]"
                        :src="require('@/assets/icon/withdraw.png')"
                    />
                </router-link>
                <p class="mt-[8px] text-center">
                    提現/轉帳
                </p>
            </div>
        </div>
        <div class="bg-[#E8E8E8] h-[10px] w-full" />
        <CryptoItem
            v-for="crypto in balances"
            :key="crypto.asset"
            :symbol="crypto.asset"
            :free="crypto.free"
            :locked="crypto.locked"
        />
    </div>
</template>
<script>
import CryptoItem from "./CryptoItem";
import Icon from "@/components/Icon";

export default {
    components: {
        CryptoItem,
        Icon,
    },
    data() {
        return {
            eyePic: require("@/assets/icon/asset_open_eye.png"),
            wordDisplay: true,
        };
    },
    computed: {
        balances() {
            return this.$store.getters.balances;
        },
        amountTotal() {
            if (!this.wordDisplay) {
                return "***********";
            } else {
                return this.$store.getters.amountTotal;
            }
        },
    },
    methods: {
        toggle() {
            if (this.wordDisplay) {
                this.wordDisplay = false;
                this.eyePic = require("@/assets/icon/asset_eye.png");
            } else {
                this.wordDisplay = true;
                this.eyePic = require("@/assets/icon/asset_open_eye.png");
            }
        },
    },
};
</script>
