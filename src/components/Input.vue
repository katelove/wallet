<template lang="">
    <input
        :type="type"
        class="border-black	border rounded"
        v-bind="$attrs"
    />
</template>
<script>
export default {
    props: {
        type: {
            default: "text"
        }
    }    
}
</script>
