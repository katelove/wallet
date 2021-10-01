<template lang="">
    <div class="bg-[#f4f4f4] flex items-center justify-center py-[16px] min-h-[200px] flex-col">
        <MoneyBlock
            v-for="crypto in balances"
            :key="crypto.asset"
            :symbol="crypto.asset"
            :free="crypto.free"
        />
    </div>
</template>
<script>
import MoneyBlock from "@/components/MoneyBlock.vue";
import {getBalance} from "@/api";

export default {
    name: "TabAssets",
    components: {
        MoneyBlock,
    },
    data() {
        return {
            balances: [],
        };
    },
    created() {
        getBalance().then((rep) => {
            this.balances = rep.data.balances;
        });
    },
};
</script>
