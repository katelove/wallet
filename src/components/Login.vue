<template>
  <div>
    <Title class="w-full h-12" heading="欢迎登录测试钱包"></Title>
    <BlueContainer title="" class="flex items-center flex-col">
      <Input class="w-75 h-8.5 m-6" placeholder="手机/信箱/用户名" />
      <Input class="w-75 h-8.5 m-6" placeholder="密码" />
      <Button class="w-72 h-10 m-6">登录</Button>
      <div class="flex justify-between m-6">
        <p>没有帐号？<span class="text-melancholyBlue">注册</span></p>
        <p class="text-melancholyBlue">忘记密码？</p>
      </div>
    </BlueContainer>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import BlueContainer from "../components/BlueContainer.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
  components: {
    Title,
    BlueContainer,
    Input,
    Button,
  },
};
</script>
