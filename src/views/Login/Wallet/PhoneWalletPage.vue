<template>
  <div>
    <section v-if="$store.getters.getSiteNum === 1">
      <PhoneWallet />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 2">
      <ModalDragVerify />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 3">
      <PhoneVerify />
    </section>
  </div>
 </template>

<script>
import PhoneWallet from "@/views/Login/Wallet/PhoneWallet.vue";
import ModalDragVerify from "@/views/ModalDragVerify.vue";
import PhoneVerify from "@/views/Login/Wallet/PhoneVerify.vue";

export default {
  name: "PhoneWalletPage",
  components: {
    PhoneWallet,
    ModalDragVerify,
    PhoneVerify,
  },
};
</script>
