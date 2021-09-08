<template>
  <div class="flex items-center mt-10 flex-col">
    <drag-verify-img-chip
      ref="dragVerify"
      :width="260"
      :imgsrc="img"
      :isPassing.sync="isPassing"
      :showRefresh="true"
      text="请按住滑块拖动"
      successText="验证通过"
      handlerIcon="el-icon-d-arrow-right"
      successIcon="el-icon-circle-check"
      @passcallback="pass"
    >
    </drag-verify-img-chip>
  </div>
</template>

<script>
import dragVerifyImgChip from "vue-drag-verify-img-chip";
export default {
  data() {
    return {
      img: require("../../public/image/verify-img.png"),
      isPassing:false
    };
  },
  components: {
    dragVerifyImgChip,
  },
  methods: {
    pass() {
      console.log("滑塊驗證");
    },
  },
};
</script>
