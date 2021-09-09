<template>
  <div
    class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 pr-11 pl-11"
  >
    <!-- <h3 class="text-25px mt-5">滑图验证</h3>
      <div class="flex justify-items-end">
        <img src="../../public/image/x.png">
      </div> -->
    <div class="relative">
      <h3 class="text-25px text-center">滑图验证</h3>
      <img class="absolute right-0 close-top" src="../../public/image/x.png" />
    </div>
    <dragVerify class="mt-2 mb-5" />
  </div>
</template>

<script>
import dragVerify from "../components/DragVerify.vue";
export default {
  components: {
    dragVerify,
  },
};
</script>

<style>

.close-top{
  transform: translateY(-50%);
}
</style>