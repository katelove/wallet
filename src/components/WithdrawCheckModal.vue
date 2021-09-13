<template lang="">
    <div
        class="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-end bg-mask z-0"
        @click.self="close"
    >
        <div class="bg-diamondGrey rounded-10px pt-14px justify-around flex w-full h-20 z-10 -mb-8">
            <img
                style="width: 16px;height: 16px"
                src="@/assets/icon/cross.png"
                @click="close"
            />
            <p class="text-yewLime">轉賬數量</p>
            <img
                style="width: 20px;height: 16px"
                src="@/assets/icon/key.png"
            />
        </div>
        <div class="rounded-10px bg-white w-full z-20 flex pt-17px text-12px flex-col">
            <p class="text-20px mb-26px text-center">{{amount}} {{this.crypto}}</p>
            <div class="flex mx-32px px-16px mb-13px pb-13px border-b border-yewLime">
                <p class="align-center w-90px text-yewLime">支付信息</p>
                <p>{{this.crypto}}转帐</p>
            </div>
            <div class="flex mx-32px px-16px mb-13px pb-13px border-b border-yewLime items-center">
                <p class="align-center w-90px text-yewLime">收款地址</p>
                <p>{{address}}</p>
            </div>
            <div class="flex mx-32px px-16px mb-13px pb-13px border-b border-yewLime items-center">
                <p class="align-center w-90px text-yewLime">付款地址</p>
                <p class="break-all	">o23o313o3123o13o1312o31331o31231231313</p>
            </div>
            <div class="flex mx-32px px-16px mb-13px pb-13px border-b border-yewLime">
                <p class="align-center w-90px text-yewLime">手续费</p>
                <p>1{{this.crypto}}</p>
            </div>
            <Button
                class="py-14px mt-32px"
                @click="$emit('onCheck')"
            >
                確認
            </Button>
        </div>
    </div>
</template>
<script>
import Button from "@/components/Button"

export default {
    data() {
		return {
            crypto: this.$route.params.crypto === "halo" ? "HALO" : "usdt"
		}
	},
    props: {
        amount: {
            required: true,
        },
        address: {
            required: true
        }
    },
    methods: {
        close: function() {
            this.$emit('onClose')
        }
    },
    components: {
        Button,
	},
}
</script>
<style lang="">
    
</style>