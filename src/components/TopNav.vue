<template lang="">
    <div class="flex shadow-bottom items-center py-[11px] min-h-[10vh]">
        <img
            class="h-[40px] w-[40px]"
            :class="!$route.meta.showGoback && 'invisible'"
            src="@/assets/icon/return.png"
            @click="goback()"
        >
        <p class="text-[18px] font-bold flex-grow text-center">
            {{ $route.meta.title }}
        </p>
        <img
            class="h-[40px] w-[40px]"
            :class="!$route.meta.showHistory && 'invisible'"
            src="@/assets/icon/asset.png"
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
