<template lang="">
    <img
        :src="src"
        style="width: 36px;height:36px"
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