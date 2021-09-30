<template lang="">
    <div class="bg-lightGray flex items-center justify-center">
        <MoneyBlock
            :src="require('@/assets/crypto/usdt.png')"
            money="USDT"
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
};
</script>
