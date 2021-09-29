<template lang="">
  <div
    v-bind="$attrs"
    class="bg-white boxShadow rounded-12px text-black w-344px h-132px"
  >
    <div class="flex justify-between pt-2 pl-4 pr-4">
      <div v-show="side === 'BUY'" class="text-greenWord text-xs">
        限價買入({{ progress }}%)
      </div>
      <div v-show="side === 'SALE'" class="text-redWord text-xs">
        限價賣出({{ progress }}%)
      </div>
      <div class="text-xs text-lightGray">2021/04/10 15:06:06</div>
    </div>
    <input
      type="range"
      min="0"
      max="100"
      :value="progress"
      class="pt-1 ht-1 "
      :class="side === 'BUY' ? 'bg-greenWord' : 'bg-redWord'"
    />
    <div class=" pt-2 pl-4 pr-4">
      <div class="flex justify-between">
        <h6>BTC/USDT</h6>
        <h6>撤單</h6>
      </div>
      <div class="flex justify-between">
        <h6>數量</h6>
        <h6>0.00048 BTC</h6>
      </div>
      <div class="flex justify-between">
        <h6>掛單金額</h6>
        <h6>304.82 USDT</h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Block",
  props: ["side", "progress"],
};
</script>

<style scoped>
.boxShadow {
  box-shadow: 0px 0px 16px #e8e8e8;
}

input[type="range"]::-webkit-slider-runnable-track {
  display: none;
}

input[type="range"] {
  -webkit-appearance: none;
  height: 2px;
  outline: none;
  border-radius: 0;
  overflow: hidden;
  cursor: pointer;
}
</style>
