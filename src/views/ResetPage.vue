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
import ResetPwd from "@/views/ResetPwd.vue";
import ResetDragVerify from "@/views/ResetDragVerify.vue";
import SafeVerify from "@/views/SafeVerify.vue";
import NewPwd from "@/views/NewPwd.vue";

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
