<template lang="">
  <div>
    <Button
      v-for="(item, index) in tabs"
      :key="index"
      :text-color="[ currentTab===item.tab ? 'text-white' : 'text-yewLime']"
      :bg="[currentTab===item.tab ? 'bg-melancholyBlue' : 'bg-white']"
      class="w-1/3  h-12"
      @click="currentTab = item.tab"
      >{{ item.word }}</Button
    >
  <TabAssets v-show="currentTab==='TabAssets'"></TabAssets>
  <TabTrust v-show="currentTab==='TabTrust'"></TabTrust>
  </div>
</template>
<script>
import Button from "@/components/Button.vue";
import TabAssets from "@/views/OwnAssets/TabAssets.vue";
import TabTrust from "@/views/OwnAssets/TabTrust.vue";
export default {
  name: "OwnAssets",
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
  components: {
    Button,
    TabAssets,
    TabTrust,
  },
};
</script>
