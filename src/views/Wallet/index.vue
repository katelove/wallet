<template lang="">
    <div class="mt-2 mx-26px">
        <div class="flex mt-27px mb-21px">
            <p class="mr-10px">
                总资产折合(USDT)
            </p>
            <Icon
                :src="require('@/assets/icon/open_eye.png')"
                style="width: 30px; height: 21px"
            />
        </div>

        <div class="flex justify-between">
            <p class="text-24px text-melancholyBlue">
                {{ amountTotal }}
            </p>
        </div>

        <BlueContainer class="mt-12 mb-20px">
            <div class="flex h-28 justify-evenly items-center">
                <router-link :to="'/crypto/deposit'">
                    <div>
                        <Icon
                            class="m-auto"
                            :src="require('@/assets/icon/deposit.png')"
                        />
                        <p class="mt-1">
                            充值/收款
                        </p>
                    </div>
                </router-link>
                <router-link :to="'/crypto/withdraw'">
                    <div>
                        <Icon
                            class="m-auto"
                            :src="require('@/assets/icon/withdraw.png')"
                        />
                        <p class="mt-1">
                            提現/轉帳
                        </p>
                    </div>
                </router-link>
            </div>
        </BlueContainer>

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
import BlueContainer from "@/components/BlueContainer";
import CryptoItem from "./CryptoItem";
import Icon from "@/components/Icon";

export default {
    components: {
        BlueContainer,
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
