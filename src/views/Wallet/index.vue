<template lang="">
    <div class="my-2">
        <div class="bg-mainColor rounded-[12px] flex flex-col items-start justify-center pl-[28px] pt-[16px] pb-[16px] mx-[12px]">
            <p class="font-bold text-white text-[18px]">
                總資產折合 (USDT)
            </p>
            <div class="relative">
                <div class="mr-[25px]">
                    <input
                        v-model="amountTotal"
                        :type="type"
                        v-bind="$attrs"
                        disabled="disabled"
                        class="text-[16px] text-white border-0 bg-mainColor w-[101px]"
                    >
                </div>
                <Icon
                    class="absolute right-0 top-1/2 -translate-y-2/4"
                    :src="eyePic"
                    style="width: 16px; height: 16px"
                    @click="toggle"
                />
            </div>
        </div>
        <div class="flex items-center justify-center mt-[16px] mb-[11px] text-[12px]">
            <div class="w-[53px] h-[60px]">
                <Icon
                    class="m-auto"
                    style="width: 32px; height: 32px"
                    :src="require('@/assets/icon/deposit.png')"
                />
                <p class="mt-[8px] text-center">
                    充值/收款
                </p>
            </div>
            <div class="mx-[34px] w-[53px] h-[60px]">
                <Icon
                    class="m-auto"
                    style="width: 32px; height: 32px"
                    :src="require('@/assets/icon/withdraw.png')"
                />
                <p class="mt-[8px] text-center">
                    提現/轉帳
                </p>
            </div>
            <div class="w-[53px] h-[60px]">
                <Icon
                    class="m-auto"
                    style="width: 28px; height: 31px"
                    :src="require('@/assets/icon/bill.png')"
                />
                <p class="mt-[8px] text-center">
                    帳單
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
            type: this.$attrs.type || "text",
        };
    },
    computed: {
        balances() {
            return this.$store.getters.balances;
        },
        amountTotal() {
            return this.$store.getters.amountTotal;
        },
    },
    methods: {
        toggle() {
            this.type = this.type === "text" ? "password" : "text";
            this.eyePic = require("@/assets/icon/asset_open_eye.png");
            if (this.type === "password") {
                this.eyePic = require("@/assets/icon/asset_eye.png");
            }
        },
    },
};
</script>
