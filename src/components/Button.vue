<template lang="">
    <button
        :class="[bg, rounded, textColor, borderColor]"
        v-bind="$attrs"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>
<script>
export default {
    props: {
        bg: {
            default: "bg-melancholyBlue",
            type: String,
        },
        rounded: {
            default: "rounded-2px",
            type: String,
        },
        textColor: {
            default: "text-white",
            type: String,
        },
        borderColor: {
            default: "",
            type: String,
        },
    },
};
</script>
