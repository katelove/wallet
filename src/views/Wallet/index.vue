<template lang="">
    <div class="mt-2">
        <div class="bg-mainColor rounded-[12px] flex flex-col items-start justify-center pl-[28px] pt-[16px] pb-[16px] mx-[12px]">
            <p class="font-bold text-white">
                總資產折合 (USDT)
            </p>

            <div class="flex justify-start">
                <p class="text-[16px] text-white mr-[25px]">
                    {{ amountTotal }}
                </p>
                <div class="flex items-center">
                    <Icon
                        :src="require('@/assets/icon/asset_open_eye.png')"
                        style="width: 16px; height: 16px"
                    />
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center mt-[16px] mb-[11px]">
            <div class="w-[53px] h-[60px]">
                <Icon
                    class="m-auto"
                    style="width: 32px; height: 32px"
                    :src="require('@/assets/icon/payment.png')"
                />
                <p class="mt-[8px] text-[12px] text-center">
                    充值/收款
                </p>
            </div>
            <div class="mx-[34px] w-[53px] h-[60px]">
                <Icon
                    class="m-auto"
                    style="width: 32px; height: 32px"
                    :src="require('@/assets/icon/transfer.png')"
                />
                <p class="mt-[8px] text-[12px] text-center">
                    提現/轉帳
                </p>
            </div>
            <div class="w-[53px] h-[60px]">
                <Icon
                    class="m-auto"
                    style="width: 28px; height: 31px"
                    :src="require('@/assets/icon/bill.png')"
                />
                <p class="mt-[8px] text-[12px] text-center">
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
    computed: {
        balances() {
            return this.$store.getters.balances;
        },
        amountTotal() {
            return this.$store.getters.amountTotal;
        },
    },
};
</script>
