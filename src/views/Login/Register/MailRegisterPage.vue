<template>
  <div>
    <section v-if="$store.getters.getSiteNum === 1">
      <MailRegister />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 2">
      <ModalDragVerify />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 3">
      <MailVerify />
    </section>
  </div>
</template>

<script>
import MailRegister from "@/views/Login/Register/MailRegister.vue";
import ModalDragVerify from "@/views/Login/ModalDragVerify.vue";
import MailVerify from "@/views/Login/Register/MailVerify.vue";

export default {
  name: "MailRegisterPage",
  components: {
    MailRegister,
    ModalDragVerify,
    MailVerify,
  },
};
</script>
