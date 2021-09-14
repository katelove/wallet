<template>
  <div>
    <Title class="flex justify-center mt-10" heading="邮箱验证"></Title>
    <div
      class="flex flex-col border-melancholyBlue border m-8 p-5 rounded border-shadow"
    >
      <p class="text-yewLime text-center text-sm">请输入您的邮箱ABCD@GMAIL.com收到的验证码</p>
      <p class="text-yewLime text-center text-sm mt-2.5">邮箱验证码可能被判定为垃圾邮件，请注意查收。</p>
      <Input type="text" class="w-75 h-8.5 mt-6 text-center text-base" placeholder="邮箱验证码" />
      <button class="bg-melancholyBlue text-white rounded-2px w-75 h-10 mt-12" @click="home">确认</button>
      <!-- <Button class="w-75 h-10 mt-12">确认</Button> -->
      <h3 class="mt-6 text-base text-center text-yewLime">没有收到验证码?<span class="text-bayshoreBlue">获取验证码</span></h3>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Input from "@/components/Input.vue";
// import Button from "@/components/Button.vue";

export default {
  name:'MailVerify',
  methods:{
    home(){
       this.$router.push('/')
    }
  },
  components: {
    Title,
    Input,
    // Button
  },
};
</script>

<style>
.border-shadow {
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
</style>
