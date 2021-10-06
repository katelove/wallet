<template lang="">
    <div>
        <img
            :src="require(`@/assets/icon/sortUp${isActive && direction === 1 ? 'Active' : ''}.png`)"
            class="h-[3px] w-[6px]"
        >
        <img
            :src="require(`@/assets/icon/sortDown${isActive && direction === -1 ? 'Active' : ''}.png`)"
            class="h-[3px] w-[6px]"
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
