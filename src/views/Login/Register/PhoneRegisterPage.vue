<template>
    <div>
        <section v-if="$store.getters.getSiteNum === 1">
            <PhoneRegister />
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
import PhoneRegister from "@/views/Login/Register/PhoneRegister.vue";
import ModalDragVerify from "@/views/Login/ModalDragVerify.vue";
import PhoneVerify from "@/views/Login/Register/PhoneVerify.vue";

export default {
    name: "PhoneRegisterPage",
    components: {
        PhoneRegister,
        ModalDragVerify,
        PhoneVerify,
    },
};
</script>
