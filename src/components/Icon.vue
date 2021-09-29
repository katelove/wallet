<template lang="">
    <img
        :src="src"
        class="w-[36px] h-[36px]"
        @click="$emit('click')"
    />
</template>
<script>
export default {
    props: {
        src: {
            required: true
        }
    }
}
</script>