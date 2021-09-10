<template>
  <div class="flex justify-center mt-10 flex-col m-auto">
    <Title class="flex justify-center" heading="安全中心"></Title>
    <BlueContainer title="" class="flex items-center flex-col ml-8 mr-8">
      <div class="flex justify-between p-6">
        <p>修改登錄密碼</p>
        <img src="../../public/image/arrow.png"/>
      </div>
      <div class="w-full bg-diamondGrey h-2"></div>
    </BlueContainer>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import BlueContainer from "../components/BlueContainer.vue";
export default {
  components: {
    Title,
    BlueContainer,
  },
};
</script>
