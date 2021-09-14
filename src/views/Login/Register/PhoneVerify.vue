<template>
  <div>
    <Title class="flex justify-center mt-10" heading="手机验证"></Title>
    <div
      class="flex flex-col border-melancholyBlue border m-8 p-6 rounded border-shadow"
    >
      <p class="text-yewLime text-center text-sm">
        请输入您的手机号+97120304582 收到的验证码
      </p>
      <Input
        type="text"
        class="w-full h-8.5 mt-12 text-center text-base"
        placeholder="手机验证码"
      />
      <button
        class="bg-melancholyBlue text-white rounded-2px w-full h-10 mt-12"
        @click="home"
      >
        确认
      </button>
      <!-- <Button class="w-75 h-10 mt-12">确认</Button> -->
      <h3 class="mt-6 text-base text-center text-yewLime">
        没有收到验证码?<span class="text-bayshoreBlue">获取验证码</span>
      </h3>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Input from "@/components/Input.vue";
// import Button from "@/components/Button.vue";

export default {
  name: "PhoneVerify",
  methods: {
    home() {
      this.$router.push("/");
    },
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
