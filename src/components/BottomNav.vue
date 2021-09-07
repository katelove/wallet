<template lang="">
    <div class="rounded-10px border-black border flex justify-evenly items-center text-10px my-4">
        <div v-for="item in nav" :key="item.name" class="text-center py-12px">
            <img :src="item.icon" class="mb-6px h-27px"/>
            <p>
                {{item.name}}
            </p>
        </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            nav: [
                {name: "首页", icon: require('@/assets/icon/home.svg'), path: ''},
                {name: "充值", icon: require('@/assets/icon/deposit.svg'), path: ''},
                {name: "提领", icon: require('@/assets/icon/withdraw.svg'), path: ''},
                {name: "资产", icon: require('@/assets/icon/wallet.svg'), path: ''},
            ]
        }
    }
}
</script>
