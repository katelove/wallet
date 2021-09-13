<template>
  <div>
    <section v-if="$store.getters.getSiteNum === 1">
      <Login />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 2">
      <ModalDragVerify />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 3">
      <LoginSafeVerify />
    </section>
  </div>
</template>

<script>
import Login from "@/views/Login.vue";
import LoginSafeVerify from "@/views/LoginSafeVerify.vue";
import ModalDragVerify from "@/views/ModalDragVerify.vue";
export default {
  name: "LoginPage",
  components: {
    Login,
    LoginSafeVerify,
    ModalDragVerify,
  },
};
</script>
