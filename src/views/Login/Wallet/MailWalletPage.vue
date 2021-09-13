<template>
  <div>
    <section v-if="$store.getters.getSiteNum === 1">
      <RegisterTestWallet />
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
import RegisterTestWallet from "@/views/Login/Wallet/RegisterTestWallet.vue";
import ModalDragVerify from "@/views/ModalDragVerify.vue";
import MailVerify from "@/views/Login/Wallet/MailVerify.vue";

export default {
  name: "MailWalletPage",
  components: {
    RegisterTestWallet,
    ModalDragVerify,
    MailVerify,
  },
};
</script>
