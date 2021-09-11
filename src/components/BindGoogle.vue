<template>
  <div class="flex justify-center mt-2 flex-col m-auto">
    <Title class="flex justify-center" heading="绑定谷歌验证"></Title>
    <BlueContainer title="" class="ml-8 mr-8 mt-10">
      <div class="pr-6 pl-6 pt-5 pb-5">
        <p class="text-yewLime text-xs">
          1.下载Google Authenticator［谷歌验证器］
        </p>
        <div class="flex justify-center m-4">
          <Button class="w-32 text-center rounded-md text-sm">App Store</Button>
        </div>
        <p class="text-yewLime text-xs">
          2.打開谷歌驗證器，掃描下方二維碼或手動輸入下述密鑰添加驗證令牌<br>
          密鑰用於手機更換或遺失時找回谷歌驗證器，綁定前請務必將下述密鑰備份保存
        </p>
        <div class="flex justify-center mt-4 mb-6">
          <img src="../../public/image/google-qr-code.png" />
        </div>
        <div class="flex justify-center m-4">
        <Button class="w-64 text-center rounded-lg text-xs h-8"
          >打開Google Authenticator 進行添加</Button
        >
        </div>

        <div class="flex justify-center items-center mt-4">
          <p class="text-bayshoreBlue text-sm mr-5px font-sans tracking-wider not-italic font-normal">GF32ADWE32112FDS3DA1</p>
          <img src="../../public/image/copy.png" class="mr-5px" />
        </div>
        <Button class="w-75 h-10 mt-4 rounded-10px">下一步</Button>
      </div>
    </BlueContainer>
  </div>
</template>

<script>
import Title from "./Title.vue";
import BlueContainer from "./BlueContainer.vue";
import Button from "./Button.vue";

export default {
  components: {
    Title,
    BlueContainer,
    Button,
  },
};
</script>
