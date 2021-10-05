<template lang="">
    <div class="bg-lightGray3 flex items-center justify-center py-[16px] min-h-[200px] flex-col">
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

export default {
    name: "TabAssets",
    components: {
        MoneyBlock,
    },
    computed: {
        balances() {
            return this.$store.getters.balances;
        },
    },
};
</script>
