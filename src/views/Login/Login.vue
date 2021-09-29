<template>
  <div class="flex justify-center mt-10 flex-col m-auto">
    <Title class="flex justify-center" heading="欢迎登录测试钱包"></Title>
    <BlueContainer title="" class="flex items-center flex-col ml-8 mr-8 mt-14">
      <!-- <input class="w-75 h-8.5 m-6" type="text" v-model="actName" placeholder="手机/信箱/用户名"/> -->
      <div class="p-6">
        <input
          class="border-black	border rounded w-full h-8.5"
          type="text"
          v-model="actName"
          placeholder="手机/信箱/用户名"
        />
        <div class="mt-6">
          <input
            class="border-black	border rounded w-full h-8.5"
            type="password"
            v-model="actPwd"
            placeholder="密码"
          />
        </div>
        <!-- <button class="w-75 h-10 m-6" @click="loginPage">登录</button> -->
        <div class="mt-6">
          <button
            class="bg-melancholyBlue text-white rounded-2px w-full h-10"
            @click="login"
          >
            登录
          </button>
        </div>
        <div class="flex justify-between mt-6">
          <p class="text-yewLime">
            没有帐号？<span class="text-melancholyBlue"
              ><router-link to="/register/phone">注册</router-link></span
            >
          </p>
          <p class="text-melancholyBlue">
            <router-link to="/reset">忘记密码？</router-link>
          </p>
        </div>
      </div>
    </BlueContainer>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import BlueContainer from "@/components/BlueContainer.vue";
// import Input from "@/components/Input.vue";
// import Button from "@/components/Button.vue";

export default {
  name: "Login",
  data() {
    return {
      actName: "",
      actPwd: "",
    };
  },
  methods: {
    login() {
      if (this.actName === "00001" || this.actName === "00002") {
        localStorage.setItem("user_id", this.actName);
        this.$store.dispatch("progressSite", 2);
      } else {
        alert("帳號請輸入 00001 或 00002");
      }
    },
  },
  components: {
    Title,
    BlueContainer,
    // Input,
    // Button
  },
};
</script>
