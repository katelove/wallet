<template>
      <div>
    <section v-if="$store.getters.getSiteNum === 1">
      <NameWallet />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 2">
      <ModalDragVerify />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 3">
      <NameVerify />
    </section>
  </div>
</template>

<script>
import NameWallet from '@/views/Login/Wallet/NameWallet.vue';
import ModalDragVerify from "@/views/ModalDragVerify.vue";
import NameVerify from '@/views/Login/Wallet/NameVerify.vue';

export default {
    name:'NameWalletPage',
    components:{
        NameWallet,
        ModalDragVerify,
        NameVerify
    }
    
}
</script>