<template>
    <div class="flex flex-col mt-25 border-melancholyBlue border mr-8 ml-8 p-6 rounded border-shadow">
        <div class="flex justify-between relative">
            <h3 class="text-25px">
                安全验证
            </h3>
            <Icon
                class="absolute right-0 close-top"
                :src="require('@/assets/icon/cross.png')"
                style="width: 17px; height: 17px"
            />
        </div>
        <div class="relative">
            <Input
                type="text"
                class="w-full h-8.5 mt-7.5"
                placeholder=" 邮箱验证码"
            />
            <p class="absolute top-9 right-2 text-yewLime">
                获取验证码
            </p>
        </div>
        <span class="text-bayshoreBlue text-xs mt-2">输入您的邮箱sk*****@gmail.com收到的验证码</span>
        <Input
            type="text"
            class="w-full h-8.5 mt-7.5"
            placeholder=" 谷歌验证码"
        />
        <span class="text-bayshoreBlue text-xs mt-2">安全项丢失?</span>
        <div class="flex justify-end">
            <button class="bg-white text-bayshoreBlue w-20 h-8 mr-5 rounded-5px">
                取消
            </button>
            <!-- <Button class="w-20 h-8 rounded-5px" @click="safeSubmit">确认</Button> -->
            <button
                class="bg-melancholyBlue text-white w-20 h-8 rounded-5px"
                @click="safeSubmit"
            >
                确认
            </button>
        </div>
    </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Icon from "@/components/Icon.vue";
// import Button from "@/components/Button.vue";
export default {
    name: "SafeVerify",
    components: {
        Input,
        Icon,
        // Button,
    },
    methods: {
        safeSubmit() {
            this.$store.dispatch("progressSite", 4);
        },
    },
};
</script>

<style>
.border-shadow {
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.4);
}
.close-top {
    transform: translateY(-50%);
    top: 50%;
}
</style>
