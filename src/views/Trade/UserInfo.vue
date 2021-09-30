<template lang="">
    <div>
        <div class="flex justify-between pl-4 pr-4 pb-2 pt-2 mt-[16px] items-center">
            <div>
                <Button
                    v-for="(item, index) in tabs"
                    :key="index"
                    :class="[currentTab === item.tab ? 'selected-word' : 'no-selected-word']"
                    @click="currentTab = item.tab"
                >
                    {{ item.word }}
                </Button>
            </div>

            <img
                :src="require('@/assets/icon/asset.png')"
                class="w-[24px] h-[24px]"
            >
        </div>
        <TabAssets v-show="currentTab === 'TabAssets'" />
        <TabTrust v-show="currentTab === 'TabTrust'" />
    </div>
</template>
<script>
import Button from "@/components/Button.vue";
import TabAssets from "./TabAssets.vue";
import TabTrust from "./TabTrust.vue";
export default {
    name: "OwnAssets",
    components: {
        Button,
        TabAssets,
        TabTrust,
    },
    data() {
        return {
            currentTab: "TabTrust",
            tabs: [
                {
                    id: 1,
                    word: "當前委託",
                    tab: "TabTrust",
                },
                {
                    id: 2,
                    word: "資產",
                    tab: "TabAssets",
                },
            ],
        };
    },
};
</script>

<style scoped>
.selected-word {
    border-bottom: #fec36b 4px solid;
    width: 80px;
    height: 30px;
    border-radius: 4px;
    color: #1b1c1e;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    background: white;
    /* letter-spacing: 0.05em; */
    text-align: center;
}

.no-selected-word {
    color: #d1d2d2;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    background: white;
    letter-spacing: 0.05em;
    text-align: center;
    width: 80px;
}
</style>
