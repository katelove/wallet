<template>
    <div class="bg-lightGray3 h-[inherit]">
        <div class="bg-mainColor text-white pt-[10px] px-[20px]">
            <div class="flex">
                <router-link :to="'/safeCenter'">
                    <Icon
                        :src="require('@/assets/icon/profile.png')"
                        class="w-[16px] h-[16px]"
                    />
                </router-link>
                <p class="flex-grow text-center">
                    白沙錢包
                </p>
            </div>

            <p class="mt-[6px] mb-[3px] text-[12px]">
                总资产折合(USDT)
            </p>
            <div class="flex justify-between items-center">
                <p class="text-[30px]">
                    {{ amountTotal }}
                </p>
                <img
                    src="@/assets/icon/vector.png"
                    class="w-[6px] h-[12px] transform rotate-180"
                    @click="$router.push('/wallet')"
                >
            </div>
        </div>

        <div
            class="mb-[18px]"
            style="background-image: linear-gradient(180deg, #ffa31a 50%, white 50%)"
        >
            <div class="flex bg-white rounded-[8px] shadow-bottom mx-[16px] text-[12px] items-center">
                <router-link
                    :to="'/crypto/deposit'"
                    class="nav-router"
                >
                    <Icon
                        class="nav-icon"
                        :src="require('@/assets/icon/deposit.png')"
                    />
                    <p>充值/收款</p>
                </router-link>
                <router-link
                    :to="'/crypto/withdraw'"
                    class="nav-router border-l border-r border-[#c8c8c8] border-r-[0.5px] border-l-[0.5px]"
                >
                    <Icon
                        class="nav-icon"
                        :src="require('@/assets/icon/withdraw.png')"
                    />
                    <p>提現/轉帳</p>
                </router-link>
                <router-link
                    :to="'/crypto/bill'"
                    class="nav-router"
                >
                    <Icon
                        class="nav-icon"
                        :src="require('@/assets/icon/bill.png')"
                    />
                    <p>帐单</p>
                </router-link>
            </div>
        </div>

        <div class="mx-12px">
            <Icon
                :src="require('@/assets/banner.png')"
                class="mb-12px"
                style="width: unset; height: unset"
            />

            <CryptoList />
        </div>
    </div>
</template>

<script>
import CryptoList from "./CryptoList.vue";
import Icon from "@/components/Icon.vue";

export default {
    components: {
        CryptoList,
        Icon,
    },
    computed: {
        amountTotal() {
            return this.$store.getters.amountTotal;
        },
    },
};
</script>

<style lang="postcss" scoped>
.nav-router {
    @apply flex-grow-[1] text-center py-[20px];
}
.nav-icon {
    @apply w-[40px] h-[40px] m-auto mb-[7px];
}
</style>
