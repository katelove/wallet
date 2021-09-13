<template>
  <div class="flex justify-center mt-10 flex-col  m-auto">
    <Title class="w-full h-12" heading="注冊  测试钱包"></Title>
    <div class="border-melancholyBlue border m-8 rounded-4px border-shadow">
      <div
        class="flex justify-start items-center border-melancholyBlue border-b"
      >
        <p class="w-1/3 text-center text-yewLime"><router-link to="/login-wallet/phone">手机号</router-link></p>
        <Button class="w-1/3  h-12 rounded-4px"><router-link to="/login-wallet/mail">邮箱</router-link> </Button>
        <p class="w-1/3 text-center text-yewLime">用戶名</p>
      </div>
      <div class="p-6">
        <Input class="mt-5 w-full input-style" placeholder="  邮箱帐号" />
        <Input class="mt-7 w-full input-style" placeholder="  设置密码" />
        <Input class="mt-7 w-full input-style" placeholder="  确认密码" />
        <div class="flex justify-start items-center mt-7">
          <input type="checkbox"/>
          <p class="text-sm text-garyWord ml-1">
            我已阅读并同意<span class="text-melancholyBlue">《用户协议》</span
            >和<span class="text-melancholyBlue">《隐私条款》</span>
          </p>
        </div>
        <!-- <Button class="w-full mt-12 h-10">注冊</Button> -->
      <button
        class="bg-melancholyBlue text-white rounded-2px w-full mt-12 h-10"
        @click="register"
      >
        注冊
      </button>
        <p class="text-sm mt-6 text-garyWord">
          已有帐号?<span class="text-melancholyBlue">登录</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
export default {
  name:'RegisterTestWallet',
  methods:{
    register(){
       this.$store.dispatch("progressSite", 2);
    }
  },
  components: {
    Title,
    Input,
    Button,
  },
};
</script>

<style>
.border-shadow {
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}

.select-border {
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
  width: 78px;
  height: 33px;
  margin-right: 21px;
  background: white;
}

.input-style {
  height: 33px;
  border-radius: 4px;
}
</style>
