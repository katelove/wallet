<template>
  <div
    class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded border-shadow"
  >
  <div class="flex justify-between items-center">
    <h3 class="text-25px">安全验证</h3>
    <img src="@/assets/icon/cross.png" />
  </div>

    <Input class="w-full h-8.5 mt-7.5" placeholder=" 邮箱验证码                                获取验证码"/>
    <span class="text-bayshoreBlue text-xs mt-2">输入您的邮箱sk*****@gmail.com收到的验证码</span>
    <Input class="w-full h-8.5 mt-7.5" placeholder=" 谷歌验证码" />
    <span class="text-bayshoreBlue text-xs mt-2">安全项丢失?</span>
    <div class="flex justify-end">
    <button class="bg-white text-bayshoreBlue w-20 h-8 mr-5 rounded-5px">取消</button>
    <!-- <Button class="w-20 h-8 rounded-5px" @click="safeSubmit">确认</Button> -->
    <button
      class="bg-melancholyBlue text-white w-20 h-8 rounded-5px"
      @click="safeSubmit"
    >
      确认
    </button>
    </div>

  </div>
</template>

<script>
import Input from "@/components/Input.vue";
// import Button from "@/components/Button.vue";
export default {
  name:'SafeVerify',
  methods:{
    safeSubmit(){
      this.$store.dispatch("progressSite", 4);
    }
  },
  components: {
    Input,
    // Button,
  },
};
</script>

<style>
.border-shadow{
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
</style>
