<template>
    <div class="flex items-center flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded border-shadow">
        <h3 class="text-25px mb-5">
            重置登录密码
        </h3>
        <div class="bg-skyBlue w-full text-center">
            <p class="text-sm text-wordBlue tracking-wider">
                重置登录密码后，24小时内禁止提币和OTC
            </p>
        </div>
        <Input
            type="text"
            class="w-full h-8.5 mt-9"
            placeholder=" 帐号"
        />
        <!-- <Button class="w-full h-10 mt-9">提交</Button> -->
        <button
            class="bg-melancholyBlue text-white rounded-2px w-full h-10 mt-9"
            @click="resetSubmit"
        >
            提交
        </button>
    </div>
</template>

<script>
import Input from "@/components/Input.vue";
// import Button from "@/components/Button.vue";

export default {
    name: "ResetPwd",
    components: {
        Input,
        // Button,
    },
    methods: {
        resetSubmit() {
            localStorage.setItem("userId", "00001");
            this.$store.dispatch("progressSite", 2);
        },
    },
};
</script>

<style>
.border-shadow {
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
</style>
