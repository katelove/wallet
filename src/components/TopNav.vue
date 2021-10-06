<template lang="">
    <div class="shadow-bottom text-[700] text-[26px] text-center py-[11px] h-[10vh]">
        <img
            v-show="$route.meta.showGoback"
            style="width: 23px"
            src="@/assets/icon/return.png"
            @click="goback()"
        >
        <div class="flex items-center justify-center mt-[12px] mb-[12px]">
            <p class="text-[18px] font-bold">
                {{ $route.meta.title }}
            </p>
        </div>
        <img
            v-show="$route.meta.showHistory"
            style="width: 23px"
            src="@/assets/icon/history.png"
            @click="$router.push('/transaction_history/' + $route.params.crypto)"
        >
    </div>
</template>
<script>
export default {
    methods: {
        goback() {
            this.$router.back();
        },
    },
};
</script>
<style lang=""></style>
