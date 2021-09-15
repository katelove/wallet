<template>
  <div class="flex justify-center mt-2 flex-col m-auto">
    <Title class="flex justify-center" heading="绑定谷歌验证"></Title>
    <BlueContainer title="" class="ml-8 mr-8 mt-10">
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">手机验证码</p>
        <div class="relative">
          <input
            type="text"
            class="w-full border-none border-line  mt-8"
            placeholder="请输入手机验证码"
          />
          <Button class="h-8 absolute right-2 bottom-2 rounded-5px p-1.5 "
            >获取验证码</Button
          >
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">信箱验证码</p>
        <div class="relative">
          <input
            type="text"
            class="w-full border-none border-line  mt-8"
            placeholder="请输入信箱验整码"
          />
          <Button class="h-8 absolute right-2 bottom-2 rounded-5px p-1.5 "
            >获取验证码</Button
          >
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">谷歌验证码</p> 
          <input
            type="text"
            class="w-full border-none border-line  mt-8"
            placeholder="请输入谷歌验整码"
          />
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="p-6">
      <button class="bg-melancholyBlue text-white rounded-10px w-full h-10" @click="home" >提交</button>
      </div>
      <!-- <Button class="w-75 h-10 m-6 rounded-10px">提交</Button> -->
    </BlueContainer>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import BlueContainer from "@/components/BlueContainer.vue";
import Button from "@/components/Button.vue";

export default {
  name:'BindSecondGoogle',
  methods:{
   home(){
      this.$router.push('/')
   }
  },
  components: {
    Title,
    BlueContainer,
    Button,
  },
};
</script>

<style>
.border-line {
  border-bottom: 1px solid #b0b0b0;
}
</style>
