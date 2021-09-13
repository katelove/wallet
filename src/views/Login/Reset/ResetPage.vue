<template>
  <div>
    <section v-if="$store.getters.getSiteNum === 1">
      <ResetPwd />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 2">
      <ResetDragVerify />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 3">
      <SafeVerify />
    </section>
    <section v-else-if="$store.getters.getSiteNum === 4">
      <NewPwd />
    </section>
  </div>
</template>

<script>
import ResetPwd from "@/views/Login/Reset/ResetPwd.vue";
import ResetDragVerify from "@/views/Login/Reset/ResetDragVerify.vue";
import SafeVerify from "@/views/Login/Reset/SafeVerify.vue";
import NewPwd from "@/views/Login/Reset/NewPwd.vue";

export default {
  name: "ResetPage",
  components: {
    ResetPwd,
    ResetDragVerify,
    SafeVerify,
    NewPwd,
  },
};
</script>
