<template>
  <div class="flex justify-center mt-2 flex-col m-auto">
    <Title class="flex justify-center" heading="修改登录密码"></Title>
    <BlueContainer title="" class="ml-8 mr-8 mt-10">
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">当前登录密码</p>
        <div class="flex">
          <input
            class="w-full border-none border-line relative mt-8"
            placeholder="请输入当前登录密码"
          />
            <div class="eye-line absolute"></div>
            <img class="absolute right-6 bottom-8" src="../../public/image/eye.png" />
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">新登录密码</p>
        <div class="flex">
          <input
            class="w-full border-none border-line relative mt-8"
            placeholder="请输入新登录密码"
          />
          <div class="eye-line absolute"></div>
          <img class="absolute right-6 bottom-8" src="../../public/image/eye.png" />
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
    </BlueContainer>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import BlueContainer from "../components/BlueContainer.vue";
// import Input from "../components/Input.vue"

export default {
  components: {
    Title,
    BlueContainer,
    // Input
  },
};
</script>

<style>
.border-line {
  border-bottom: 1px solid #b0b0b0;
}

.eye-line {
  border: 1px solid #000000;
  transform: rotate(135deg);
  width: 38.18px;
  height: 0px;
  bottom: 42px;
  right: 20px;
}
</style>
