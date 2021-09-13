<template>
  <div>
    <section v-if="$store.getters.getSiteNum === 1">
      <TestWallet />
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
import TestWallet from "@/views/Login/Wallet/TestWallet.vue";
import ModalDragVerify from "@/views/ModalDragVerify.vue";
import PhoneVerify from "@/views/Login/Wallet/PhoneVerify.vue";

export default {
  name: "PhoneWalletPage",
  components: {
    TestWallet,
    ModalDragVerify,
    PhoneVerify,
  },
};
</script>
