<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-grey"
  >
    <div class="border-shadow border-melancholyBlue border p-4 rounded bg-white">
      <div class="flex justify-between items-center">
        <h3 class="text-lg">请完成安全认证</h3>
        <img src="@/assets/icon/cross.png" />
      </div>
      <div class="flex justify-center">
        <dragVerify class="mt-2" />
      </div>
    </div>
  </div>
</template>

<script>
import dragVerify from "@/components/DragVerify.vue";
export default {
  name:'ModalDragVerify',
  components: {
    dragVerify,
  },
};
</script>

<style>
.bg-grey {
  background: rgba(0, 0, 0, 0.31);
}
.border-shadow{
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
</style>
