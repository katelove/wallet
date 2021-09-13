<template>
  <div
    class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded border-shadow"
  >
    <div class="relative">
      <h3 class="text-25px text-center">新密碼</h3>
      <img class="absolute right-0 close-top" src="../../../../public/image/x.png" />
    </div>
    <div class="relative">
      <Input class="w-full h-8.5 mt-7.5 " placeholder=" 新登录密码" />
      <img
        class="absolute right-6 new-top"
        src="../../../../public/image/more.png"
      />
    </div>
    <label class="text-yewLime text-xs mt-7.5">8-20位字符 不能为纯数字</label>
    <Input class="w-full h-8.5 mt-2" placeholder=" 确认新密码" />
    <div class="flex justify-end">
      <Button class="mt-12 w-full h-8 rounded-2px">提交</Button>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
export default {
  name:'NewPwd',
  components: {
    Input,
    Button,
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
