<template>
  <div class="flex justify-center mt-2 flex-col m-auto">
    <Title class="flex justify-center" heading="修改二次验证密码"></Title>
    <BlueContainer title="" class="ml-8 mr-8 mt-10">
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">当前二次验证密码</p>
        <div class="relative">
          <input
            class="w-full border-none border-line  mt-8"
            placeholder="请输入当前二次验证密码"
          />
          <img
            class="absolute right-0 top-6"
            src="../../public/image/eye.png"
          />
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">新二次验证密码</p>
        <div class="relative">
          <input
            class="w-full border-none border-line  mt-8"
            placeholder="请输入新二次验证密码"
          />
          <img
            class="absolute right-0 top-6"
            src="../../public/image/eye.png"
          />
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">确认登录密码</p>
        <div class="relative">
          <input
            class="w-full border-none border-line  mt-8"
            placeholder="请再次输入新登录密码"
          />
          <img
            class="absolute right-0 top-6"
            src="../../public/image/eye.png"
          />
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">手机验证码</p>
        <div class="relative">
          <input
            class="w-full border-none border-line  mt-8"
            placeholder="请输入手机验证码"
          />
      <Button class="h-8 absolute right-2 bottom-2 rounded-5px p-1.5 ">获取验证码</Button>
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
       <Button class="w-75 h-10 m-6 rounded-10px">提交</Button>
    </BlueContainer>
  </div>
</template>

<script>
import Title from "./Title.vue";
import BlueContainer from "./BlueContainer.vue";
import Button from "./Button.vue";

export default {
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
