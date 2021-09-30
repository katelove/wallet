<template>
    <div>
        <section v-if="$store.getters.getSiteNum === 1">
            <BindGoogle />
        </section>
        <section v-else-if="$store.getters.getSiteNum === 2">
            <BindSecondGoogle />
        </section>
    </div>
</template>

<script>
import BindGoogle from "@/views/Login/SafeCenter/BindGoogle.vue";
import BindSecondGoogle from "@/views/Login/SafeCenter/BindSecondGoogle.vue";

export default {
    name: "BindGooglePage",
    components: {
        BindGoogle,
        BindSecondGoogle,
    },
    created() {
        this.$store.dispatch("progressSite", 1);
    },
};
</script>
