<template lang="">
  <div>
    <div class="flex justify-between pl-4 pr-4 pb-2 pt-2">
      <div>
        <Button
          v-for="(item, index) in tabs"
          :key="index"
          :class="[
            currentTab === item.tab ? 'selected-word' : 'no-selected-word',
          ]"
          @click="currentTab = item.tab"
          >{{ item.word }}</Button
        >
      </div>

      <img :src="require('@/assets/icon/asset.png')"  style="width: 18px;height:18px"/>
    </div>
    <TabAssets v-show="currentTab === 'TabAssets'"></TabAssets>
    <TabTrust v-show="currentTab === 'TabTrust'"></TabTrust>
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
