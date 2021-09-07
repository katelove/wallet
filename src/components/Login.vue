<template>
  <div>
    <Title class="w-full h-12" heading="欢迎登录测试钱包"></Title>
    <BlueContainer title=""> 
        <Input placeholder="手机/信箱/用户名"/>
        <Input placeholder="密码"/>
        <Button class="w-full h-12">登录</Button>
    </BlueContainer>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import BlueContainer from "../components/BlueContainer.vue";
import Input from "../components/Input.vue"
import Button from "../components/Button.vue"


export default {
  components: {
    Title,
    BlueContainer,
    Input,
    Button
  },
};
</script>
