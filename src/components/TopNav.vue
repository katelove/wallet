<template lang="">
    <div
        class="bg-melancholyBlue flex justify-between px-25px pb-4 items-end"
        style="height: 80px;margin-bottom: 12px"
    >
        <img 
            v-show="$route.meta.showGoback"
            style="width: 23px"
            src="@/assets/icon/return.svg"
            @click="goback()"
        />
        <img 
            v-show="$route.meta.showHistory"
            style="width: 23px"
            src="@/assets/icon/history.svg"
            @click="$router.push('/transaction_history')"
        />
    </div>
</template>
<script>
export default {
    methods: {
        goback() {
            this.$router.back()
        }
    }
}
</script>
<style lang="">
    
</style>