<template>
  <div
    class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded border-shadow"
  >
    <div class="relative">
      <h3 class="text-25px text-center">滑图验证</h3>
      <Icon class="absolute right-0 close-top" :src="require('@/assets/icon/cross.png')" style="width:17px;height:17px" />
    </div>
    <div class="flex justify-center">
      <dragVerify class="mt-2" />
    </div>
  </div>
</template>

<script>
import dragVerify from "@/components/DragVerify.vue";
import Icon from "@/components/Icon.vue"
export default {
  name:'ResetDragVerify',
  components: {
    dragVerify,
    Icon
  },
};
</script>

<style>
.border-shadow{
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
.close-top{
    transform:translateY(-50%);
    top:50%;
}
</style>