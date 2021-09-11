<template>
    <drag-verify-img-chip
      ref="dragVerify"
      :width="260"
      :imgsrc="img"
      :isPassing.sync="isPassing"
      :showRefresh="true"
      text="向右拖动滑块填充拼图"
      successText="验证通过"
      handlerIcon="el-icon-right"
      successIcon="el-icon-circle-check"
      handlerBg="#30BEED"
      radius="0px"
      @passcallback="pass"
    >
    </drag-verify-img-chip>

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

