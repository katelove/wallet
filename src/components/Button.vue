<template lang="">
    <button
        class="bg-melancholyBlue text-white rounded-2px"
        v-bind="$attrs"
    >
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
    },
}
</script>
