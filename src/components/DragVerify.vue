<template>
  <div class="flex justify-center mt-10 flex-col">
      <h3>滑图验证</h3>
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
    };
  },
  components: {
    dragVerifyImgChip,
  },
  methods:{
      pass(){
          
      }
  }
};
</script>
