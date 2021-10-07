<template lang="">
    <div class="self-baseline">
        <img
            :src="require(`@/assets/icon/sortUp${isActive && direction === 1 ? 'Active' : ''}.png`)"
            class="h-[5px] w-[10px] mt-[2px]"
        >
        <img
            :src="require(`@/assets/icon/sortDown${isActive && direction === -1 ? 'Active' : ''}.png`)"
            class="h-[5px] w-[10px] mt-[1px]"
        >
    </div>
</template>
<script>
export default {
    props: {
        direction: {
            type: Number,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
