<template lang="">
    <div
        class="px-[8px] py-[4px] text-white rounded-full text-[12px] flex"
        :class="percentPrice >= 0 ? 'bg-bid' : 'bg-ask'"
    >
        <p v-if="percentPrice >= 0">+</p>
        {{percentPrice}}
        %
    </div>
</template>

<script>
export default {
    props: {
        percentPrice: {
            required: true,
            default: 0,
        }
    },
}
</script>