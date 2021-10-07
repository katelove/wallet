<template lang="">
    <div
        class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[#32333466] z-[10]"
        @click.self="$emit('onClose')"
    >
        <MarketView class="custom w-full min-h-[340px] bg-white rounded-[12px]" />
    </div>
</template>

<script>
import MarketView from "@/views/Market";

export default {
    components: {
        MarketView,
    },
};
</script>
<style scoped>
.custom {
    background: white;
}
.custom >>> .sortableListContainer {
    box-shadow: none;
}
.custom >>> .tabContainer {
    border-radius: 12px;
}
</style>
