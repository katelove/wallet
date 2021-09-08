<template>
  <div class="flex items-center flex-col mt-25 border-melancholyBlue border mr-8 ml-8 pr-11 pl-11">
      <h3 class="text-25px mt-5">滑图验证</h3>
      <div class="flex justify-items-end">
        <img src="../../public/image/x.png">
      </div>
    <dragVerify class="mt-2 mb-5"/>
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
