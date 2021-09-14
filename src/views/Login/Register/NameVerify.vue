<template>
  <div
    class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded border-shadow"
  >
    <div class="relative">
      <h3 class="text-25px">绑定谷歌验证器</h3>
      <Icon class="absolute right-0 close-top" :src="require('@/assets/icon/cross.png')" style="width:17px;height:17px" />
    </div>
    <div class="mt-5 flex flex-start">
      <img src="@/views/Login/Register/name-qr-code.png" class="mr-4" />
      <div class="pt-4">
        <p class="text-yewLime text-sm font-sans">GF32ADWE32112FDS3DA1</p>
        <div class="flex flex-start mt-3.5">
          <img src="@/assets/icon/copy.png" class="mr-5px"/>
          <p class="text-bayshoreBlue text-sm">复制密钥</p>
        </div>
      </div>
    </div>
    <label class="text-yewLime text-base mt-3.5">输入谷歌验证码</label>
    <Input type="text" class="w-full h-8.5 mt-2.5" />
    <div class="flex justify-end mt-11">
      <button class="bg-white text-bayshoreBlue w-20 h-8 mr-5 rounded-5px">
        取消
      </button>
      <button class="bg-melancholyBlue text-white rounded-5px w-20 h-8" @click="home">确认</button>
      <!-- <Button class="w-20 h-8 rounded-5px">确认</Button> -->
    </div>
    <h3 class="mt-10 text-center text-yewLime text-sm">
      没有收到验证码?<span class="text-bayshoreBlue">获取验证码</span>
    </h3>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Icon from "@/components/Icon.vue"
// import Button from "@/components/Button.vue";
export default {
  name:'NameVerify',
  methods:{
    home(){
       this.$router.push('/')
    }
  },
  components: {
    Input,
    Icon
    // Button,
  },
};
</script>

<style>
.border-shadow {
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
.close-top {
  transform: translateY(-50%);
  top: 50%;
}

.new-top {
  top: 60%;
}
</style>
