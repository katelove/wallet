<template lang="">
    <div class="bg-lightGray3 h-[inherit] px-[16px] py-[13px]">
        <div
            class="mb-[8px] px-[16px] py-[10px] bg-white flex shadow-bottom rounded-[5px] items-center justify-between"
            @click="$router.go(-1)"
        >
            <div class="flex items-center">
                <img
                    :src="require(`@/assets/crypto/${crypto.toLowerCase()}.png`)"
                    class="w-[25px] h-[25px] mr-[7px]"
                >
                {{ crypto }}
            </div>
            <img
                src="@/assets/icon/grayArrow.png"
                class="w-[6px] h-[12px]"
            >
        </div>
        <div class="bg-white shadow-bottom rounded-[5px] px-[11px] pt-[30px]">
            <p class="text-[14px] mb-[9px]">
                提幣網路
            </p>
            <div class="flex justify-between">
                <button
                    v-for="chain in chainList"
                    :key="chain"
                    class="rounded-[8px] w-[72px] py-[9px]"
                    :class="selectedChain === chain ? 'border border-mainColor text-mainColor bg-transparent' : 'bg-lightGray2'"
                    @click="selectedChain = chain"
                >
                    {{ chain }}
                </button>
            </div>

            <div class="h-[1px] bg-lightGray3 mt-[12px] mb-[32px]" />

            <div>
                <p class="mb-[4px]">
                    提幣地址
                </p>
                <div class="relative">
                    <input
                        v-model="address"
                        type="text"
                        class="py-[9px] pl-[16px] bg-lightGray3 rounded-[8px] w-full"
                        placeholder="輸入或常按黏貼位置"
                    >
                    <img
                        src="@/assets/icon/scan.png"
                        class="w-[24px] h-[24px] absolute top-[9px] right-[16px]"
                    >
                </div>
                <div class="h-[1px] bg-lightGray3 mt-[15px] mb-[32px]" />

                <div class="mb-[4px] flex justify-between">
                    <p class="text-[14px]">
                        提幣數量
                    </p>
                    <p class="text-[12px] text-lightGray0">
                        可用{{ balances[crypto].free | dimension }}{{ crypto }}
                    </p>
                </div>
                <div class="relative">
                    <input
                        v-model="amount"
                        type="number"
                        class="py-[9px] pl-[16px] bg-lightGray3 rounded-[8px] w-full"
                    >
                    <div
                        class="flex absolute right-[12px] top-[9px]"
                        @click="setAllAmount"
                    >
                        <p class="text-lightGray0">
                            {{ crypto }}
                        </p>
                        <p class="mx-[3px]">
                            |
                        </p>
                        全部
                    </div>
                </div>
                <div class="h-[1px] bg-lightGray3 mt-[15px] mb-[18px]" />
                <div class="justify-end text-[14px] flex pb-[32px]">
                    <p class="text-lightGray0 mr-[5px]">
                        手續費
                    </p>
                    1 {{ crypto }}
                </div>
            </div>
        </div>
        <div class="fixed bottom-[0px] w-full shadow-bottom pt-[9px] pb-[12px] px-[24px] left-[0px] right-[0px]">
            <div class="flex justify-between mb-[14px] items-center">
                <p class="text-[14px]">
                    實際到帳
                </p>
                <p>
                    {{ calculateTrasnactionAmount }}
                </p>
            </div>
            <button
                class="w-full py-[8px] text-white rounded-[8px]"
                :class="chackSubmit ? 'bg-mainColor' : 'bg-lightGray2'"
                @click="chackSubmit && submitHanlder()"
            >
                提幣
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            chainList: ["TRC20", "ERC20", "HECO", "BSC"],
            selectedChain: "TRC20",
            crypto: this.$route.params.crypto.toUpperCase(),
            amount: "",
            address: "",
        };
    },
    computed: {
        balances() {
            return this.$store.getters.balances;
        },
        chackSubmit() {
            return this.address && parseFloat(this.amount);
        },
        calculateTrasnactionAmount() {
            const amountMinusFee = parseFloat(this.amount || 0) - 1;
            return amountMinusFee < 0 ? 0 : amountMinusFee;
        },
    },
    methods: {
        setAllAmount() {
            this.amount = parseFloat(this.balances[this.crypto].free);
        },
        submitHanlder() {
            if (this.calculateTrasnactionAmount <= this.balances[this.crypto].free) {
                this.$toasted.show("提幣成功");
            } else {
                this.$toasted.show("可用資產不足", {
                    type: "error",
                });
            }
        },
    },
};
</script>
