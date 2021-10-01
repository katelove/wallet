<template lang="">
    <div>
        <div class="px-[16px]">
            <Nav />
            <div class="flex">
                <div class="w-[40%]">
                    <OrderBook />
                </div>
                <div class="w-[50%] ml-auto">
                    <OrderForm />
                </div>
            </div>
        </div>
        <UserInfo />
    </div>
</template>
<script>
import Nav from "./Nav";
import OrderBook from "./OrderBook";
import OrderForm from "./OrderForm";
import UserInfo from "./UserInfo";

export default {
    components: {
        Nav,
        OrderBook,
        OrderForm,
        UserInfo,
    },
    mounted() {
        localStorage.setItem("defaultTrade", this.$route.params.symbol);
    },
};
</script>
