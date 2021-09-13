<template>
  <div class="flex justify-center mt-10 flex-col m-auto">
    <Title class="flex justify-center" heading="欢迎登录测试钱包"></Title>
    <BlueContainer title="" class="flex items-center flex-col ml-8 mr-8 mt-14">
      <!-- <input class="w-75 h-8.5 m-6" type="text" v-model="actName" placeholder="手机/信箱/用户名"/> -->
      <input
        class="border-black	border rounded w-75 h-8.5 m-6"
        type="text"
        v-model="actName"
        placeholder="手机/信箱/用户名"
      />
      <input
        class="border-black	border rounded w-75 h-8.5 m-6"
        type="text"
        v-model="actPwd"
        placeholder="密码"
      />
      <!-- <button class="w-75 h-10 m-6" @click="loginPage">登录</button> -->
      <button
        class="bg-melancholyBlue text-white rounded-2px w-75 h-10 m-6"
        @click="login"
      >
        登录
      </button>
      <div class="flex justify-between m-6">
        <p class="text-yewLime">
          没有帐号？<span class="text-melancholyBlue">注册</span>
        </p>
        <p class="text-melancholyBlue">忘记密码？</p>
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
      console.log("account:" + this.actName + " pwd:" + this.actPwd);
      if (this.actName === "00001" || this.actName === "00002") {
        var userData = {
          actName: this.actName,
          actPwd: this.actPwd,
        };
        localStorage.setItem("user_id", JSON.stringify(userData));
        this.$store.commit("SET_USER_DATA", userData);
        // this.$router.push("/");
        this.$store.dispatch("progressSite", 2);
        return this.$store.getters.getSiteNum;
      } else {
        alert("您的帳號輸入錯誤!");
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
