<template>
  <div>
    <Title class="flex justify-center mt-10" heading="安全验证"></Title>
    <div
      class="flex flex-col border-melancholyBlue border m-8 p-6 rounded border-shadow"
    >
      <p class="text-yewLime text-center text-sm">输入谷歌验证器中6位验证码</p>
      <Input class="w-75 h-8.5 mt-12 text-center text-base" placeholder="谷歌验证码" />
      <Button class="w-75 h-10 mt-12">确认</Button>
      <h3 class="mt-6 text-bayshoreBlue text-base text-center">安全码丢失？</h3>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
export default {
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
</style>
