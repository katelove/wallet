<template>
  <div>
    <section v-if="$store.getters.getSiteNum === 1">
      <MailWallet />
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
import MailWallet from "@/views/Login/Wallet/MailWallet.vue";
import ModalDragVerify from "@/views/ModalDragVerify.vue";
import MailVerify from "@/views/Login/Wallet/MailVerify.vue";

export default {
  name: "MailWalletPage",
  components: {
    MailWallet,
    ModalDragVerify,
    MailVerify,
  },
};
</script>
