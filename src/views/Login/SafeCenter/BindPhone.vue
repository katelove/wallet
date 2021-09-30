<template>
    <div class="flex justify-center mt-2 flex-col m-auto">
        <Title
            class="flex justify-center"
            heading="绑定手机"
        />
        <BlueContainer
            title=""
            class="ml-8 mr-8 mt-10"
        >
            <div class="pr-6 pl-6 pt-5 pb-5">
                <p class="text-base">
                    绑定手机
                </p>
                <div class="relative mt-8">
                    <select class="select-border text-yewLime absolute w-14">
                        <option
                            value="+886"
                            class="text-center"
                        >
                            +886
                        </option>
                    </select>
                    <Input
                        type="number"
                        class="border-none border-line w-full pl-14"
                        placeholder=" 請輸入手機號碼"
                    />
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="pr-6 pl-6 pt-5 pb-5">
                <p class="text-base">
                    验证码
                </p>
                <div class="relative">
                    <input
                        type="text"
                        class="w-full border-none border-line mt-8"
                        placeholder="请输入验整码"
                    >
                    <Button class="h-8 absolute right-2 bottom-2 rounded-5px p-1.5">
                        获取验证码
                    </Button>
                </div>
            </div>
            <div class="w-full bg-diamondGrey h-2" />
            <div class="p-6">
                <Button
                    class="bg-melancholyBlue text-white rounded-10px w-full h-10"
                    @click="home"
                >
                    提交
                </Button>
            </div>
            <!-- <Button class="w-75 h-10 m-6 rounded-10px">提交</Button> -->
        </BlueContainer>
    </div>
</template>

<script>
import Title from "@/components/Title.vue";
import BlueContainer from "@/components/BlueContainer.vue";
import Button from "@/components/Button.vue";

export default {
    name: "BindPhone",
    components: {
        Title,
        BlueContainer,
        Button,
    },
    methods: {
        home() {
            this.$router.push("/");
        },
    },
};
</script>

<style>
.border-line {
    border-bottom: 1px solid #b0b0b0;
}
</style>
