<template>
    <div
        id="app"
        class="relative"
    >
        <TopNav />
        <div
            id="mainContainer"
            class="overflow-y-scroll overflow-x-hidden"
            :style="`height: ${hideBottomNav ? '90vh' : '79vh'}`"
        >
            <router-view />
        </div>
        <BottomNav v-if="!$route.meta.hideBottomNav" />
    </div>
</template>

<script>
import "./index.css";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import {getBalance} from "@/api";

export default {
    name: "App",
    components: {
        TopNav,
        BottomNav,
    },
    computed: {
        hideBottomNav: function () {
            return this.$route.meta.hideBottomNav;
        },
    },
    created() {
        getBalance();
    },
};
</script>
