<template>
  <div class="flex justify-center mt-2 flex-col m-auto">
    <Title class="flex justify-center" heading="安全中心"></Title>
    <BlueContainer title="" class="ml-8 mr-8 mt-10">
      <div class="flex justify-between pr-6 pl-6 pt-5 pb-5">
        <p class="text-base">修改登錄密碼</p>
        <router-link to="/safeCenter/modifyPwd"><img class="h-full" src="@/assets/icon/arrow.png" /></router-link>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="pr-6 pl-6 pt-5 pb-5">
        <div class="flex justify-between">
          <p class="text-base">面容支付</p>
          <SwithBtn />
        </div>
        <div class="flex justify-between mt-6">
          <p class="text-base">支付二次验证</p>
          <SwithBtn />
        </div>
        <div class="flex justify-between mt-6">
          <p class="text-base">修改二次验证密码</p>
          <router-link to="/safeCenter/modifySecondPwd"><img class="h-full" src="@/assets/icon/arrow.png" /></router-link>
        </div>
        <div class="flex justify-between mt-6">
          <p class="text-base">重置二次验证密码</p>
          <router-link to="/safeCenter/setSecondPwd"><img class="h-full" src="@/assets/icon/arrow.png" /></router-link>
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="pr-6 pl-6 pt-5 pb-5">
        <div class="flex justify-between">
          <p class="text-base">绑定手机</p>
          <router-link to="/safeCenter/bindPhone"><img class="h-full" src="@/assets/icon/arrow.png" /></router-link>
        </div>
        <div class="flex justify-between mt-6">
          <p class="text-base">绑定信箱</p>
          <p class="text-base">1234@gmail.com</p>
        </div>
        <div class="flex justify-between mt-6">
          <p class="text-base">谷歌验证</p>
          <router-link to="/safeCenter/bindGoogle"><img class="h-full" src="@/assets/icon/arrow.png" /></router-link>
        </div>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
      <div class="pr-6 pl-6 pt-5 pb-5">
        <div class="flex justify-between">
          <p class="text-base">保持登录</p>
          <SwithBtn />
        </div>
        <div class="flex justify-between mt-6">
          <p class="text-base">面容解锁</p>
          <SwithBtn />
        </div>
        <div class="flex justify-between mt-6">
          <p class="text-base">手勢解锁</p>
          <SwithBtn />
        </div>
      </div>
    </BlueContainer>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import BlueContainer from "@/components/BlueContainer.vue";
import SwithBtn from "@/components/SwitchBtn.vue";
export default {
  name:'SafeCenter',
  components: {
    Title,
    BlueContainer,
    SwithBtn,
  },
};
</script>
