<template>
  <div
    class="flex items-center flex-col mt-25 border-melancholyBlue border mr-8 ml-8 pr-6 pl-6"
  >
    <h3 class="text-25px mt-5">重置登录密码</h3>
    <div class="bg-skyBlue">
      <p class="text-sm text-wordBlue mr-2 ml-2">
        重置登录密码后，24小时内禁止提币和OTC
      </p>
    </div>
      <Input class="w-full h-8.5 m-6" placeholder="帐号" />
      <Button class="w-full h-10 m-6">提交</Button>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
  components: {
    Input,
    Button,
  },
};
</script>
