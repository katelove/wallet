<template lang="">
    <div class="bg-white rounded-[12px] shadow-bottom px-[12px] py-[8px] text-[12px]">
        <div class="flex justify-between">
            <p>幣種</p>
            <p>{{ crypto.toUpperCase() }}</p>
        </div>
        <div class="flex justify-between">
            <p>充幣/提幣</p>
            <p>提幣</p>
        </div>
        <div class="flex justify-between">
            <p>金額</p>
            <p>0</p>
        </div>
        <div class="flex justify-between">
            <p>手續費</p>
            <p>100.00</p>
        </div>
        <div class="flex justify-between">
            <p>地址</p>
            <p class="text-mainColor border-dotted border-b border-mainColor">
                9a246sd4ef......63dfr4e723
            </p>
        </div>
        <div class="flex justify-between">
            <p>完成狀態</p>
            <p>已完成</p>
        </div>
        <div class="flex justify-between">
            <p>完成時間</p>
            <p>2021-09-25 08:50:30</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "AssetsModel",
    data() {
        return {
            crypto: this.$route.params.crypto,
        };
    },
};
</script>
