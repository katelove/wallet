<template>
  <div
    class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded border-shadow"
  >
    <div class="relative">
      <h3 class="text-25px text-center">新密碼</h3>
      <img class="absolute right-0 close-top" src="@/assets/icon/cross.png" />
    </div>
    <div class="relative">
      <Input type="password" class="w-full h-8.5 mt-7.5 " placeholder=" 新登录密码" />
      <img
        class="absolute right-6 new-top"
        src="@/assets/icon/more.png"
      />
    </div>
    <label class="text-yewLime text-xs mt-7.5">8-20位字符 不能为纯数字</label>
    <Input type="password" class="w-full h-8.5 mt-2" placeholder=" 确认新密码" />
    <div class="flex justify-end">
      <button class="bg-melancholyBlue text-white rounded-2px mt-12 w-full h-8" @click="home">提交</button>
      <!-- <Button class="mt-12 w-full h-8 rounded-2px" @click="home">提交</Button> -->
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
// import Button from "@/components/Button.vue";
export default {
  name:'NewPwd',
  methods:{
     home(){
        this.$router.push('/')
     }
  },
  components: {
    Input,
    // Button,
  },
};
</script>

<style>
.border-shadow {
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
.close-top {
  transform: translateY(-50%);
  top: 50%;
}

.new-top{
  top: 60%;
}
</style>
