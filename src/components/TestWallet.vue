<template>
  <div class="flex justify-center mt-10 flex-col  m-auto">
    <Title class="w-full h-12" heading="测试钱包"></Title>
    <div class="border-melancholyBlue border m-8 rounded border-shadow">
      <div class="flex justify-start items-center border-melancholyBlue border-b">
        <Button class="w-1/3  h-12">手机号</Button>
          <p class="w-1/3 text-center text-yewLime">邮箱</p>
          <p class="w-1/3 text-center text-yewLime">用戶名</p>
      </div>
      <div class="p-6">
        <div class="mt-4">
          <select>
            <option value="+886">+886</option>
          </select>
          <Input placeholder="  手机号码" />
        </div>
        <Input class="mt-7 w-full" placeholder="  设置密码" />
        <Input class="mt-7 w-full" placeholder="  确认密码" />
        <div class="flex justify-start mt-7">
          <input type="checkbox" />
          <p class="text-sm">
            我已阅读并同意<span class="text-melancholyBlue">《用户协议》</span>和<span class="text-melancholyBlue">《隐私条款》</span>
          </p>
        </div>
        <Button class="w-full mt-12 h-10">注冊</Button>
        <p class="text-sm mt-6 mb-6">已有帐号?<span class="text-melancholyBlue">登录</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
export default {
  components: {
    Title,
    Input,
    Button,
  },
};
</script>

<style>
.border-shadow{
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}

</style>