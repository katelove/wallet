<template lang="">
    <div class="bg-lightGray3 h-[inherit]">
        <div class="my-[8px] px-[16px] py-[10px] bg-white flex">
            <img
                src="@/assets/icon/search.png"
                class="w-[24px] h-[24px]"
            >
            <input
                v-model="search"
                type="text"
                class="w-full ml-[7px]"
                placeholder="搜索"
            >
        </div>
        <div
            v-for="crypto in filterBalances"
            :key="crypto.asset"
            class="flex justify-between bg-white py-[8px] px-[17px] items-center"
            @click="goAction(crypto.asset.toLowerCase())"
        >
            <div class="flex items-center">
                <img
                    :src="require(`@/assets/crypto/${crypto.asset.toLowerCase()}.png`)"
                    class="w-[25px] h-[25p] mr-[7px]"
                >
                <p class="text-[14px]">
                    {{ crypto.asset }}
                </p>
            </div>
            <img
                src="@/assets/icon/grayArrow.png"
                class="w-[6px] h-[12px]"
            >
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: "",
        };
    },
    computed: {
        balances() {
            return this.$store.getters.balances;
        },
        filterBalances() {
            const search = this.search.toUpperCase();
            const newBalances = JSON.parse(JSON.stringify(this.balances));
            if (search) {
                return Object.values(newBalances).filter(({asset}) => asset.includes(search));
            } else {
                return newBalances;
            }
        },
    },
    methods: {
        goAction: function (symbol) {
            this.$router.push(`/crypto/${this.$route.params.action}/${symbol}`);
        },
    },
};
</script>

<style scoped>
input::-webkit-input-placeholder {
    font-size: 14px;
}
</style>
