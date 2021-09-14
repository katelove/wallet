<template>
      <div>
    <section v-if="$store.getters.getSiteNum === 1">
      <NameRegister />
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
import NameRegister from '@/views/Login/Register/NameRegister.vue';
import ModalDragVerify from "@/views/Login/ModalDragVerify.vue";
import NameVerify from '@/views/Login/Register/NameVerify.vue';

export default {
    name:'NameRegisterPage',
    components:{
        NameRegister,
        ModalDragVerify,
        NameVerify
    }
    
}
</script>