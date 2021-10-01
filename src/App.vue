<template>
    <div
        id="app"
        class="relative"
    >
        <TopNav v-if="!$route.meta.hideTopNav" />
        <div
            id="mainContainer"
            class="overflow-y-scroll overflow-x-hidden"
            :style="`height: ${hideBottomNav}`"
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
            const {meta = {}} = this.$route;
            const {hideBottomNav = false, hideTopNav = false} = meta;
            let vh = "";
            if (hideBottomNav && hideTopNav) {
                vh = "100vh";
            } else if (!hideBottomNav && !hideTopNav) {
                vh = "79vh";
            } else if (!hideBottomNav) {
                vh = "90vh";
            }
            return vh;
        },
    },
    created() {
        getBalance();
    },
};
</script>
