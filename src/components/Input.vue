<template lang="">
    <input
        :type="type"
        class="border-black border rounded"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
    >
</template>
<script>
export default {
    props: {
        type: {
            default: "text",
            type: String,
        },
    },
};
</script>
