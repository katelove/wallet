<template>
  <div
    class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 pr-6 pl-6"
  >
  <div class="flex justify-between items-baseline">
    <h3 class="text-25px mt-5">安全验证</h3>
    <img src="../../public/image/x.png" />
  </div>

    <Input class="w-full h-8.5 mt-6" placeholder="邮箱验证码         获取验证码"/>
    <span class="text-bayshoreBlue">输入您的邮箱sk*****@gmail.com收到的验证码</span>
    <Input class="w-full h-8.5 mt-6" placeholder="谷歌验证码" />
    <span class="text-bayshoreBlue">安全项丢失?</span>
    <div class="flex justify-end">
    <p>取消</p>
    <Button class="h-10">确认</Button>
    </div>

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
