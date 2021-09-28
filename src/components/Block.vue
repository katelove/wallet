<template lang="">
  <div
    v-bind="$attrs"
    class="bg-white boxShadow rounded-12px text-black w-80 h-32"
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
      class="pt-1 h-0.5 w-full bg-greenWord"
    />
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

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 5px solid rgb(192, 58, 58);
  height: 14px;
  width: 14px;
  border-radius: 8px;
  background: #e45411;
  cursor: pointer;
}
</style>
