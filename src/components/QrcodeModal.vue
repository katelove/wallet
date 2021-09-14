<template lang="">
    <div
        v-if="isShow"
        class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-mask"
        @click.self="onClose"
    >
        <div class="w-4/5 bg-white flex justify-center items-center rounded-20px flex-col px-12 relative">
            <img
                class="absolute"
                src="@/assets/icon/cross.png"
                style="width: 23px;height: 23px;right: 23px;top:26px"
                @click="this.onClose"
            />
            <div class="flex mb-28px mt-12 items-center">
                <img
                    :src="getCryptoImgUrl()"
                    style="width: 36px;height: 36px"    
                />
                <p class="ml-12px">{{cryptoAndChain}} 收款地址</p>
            </div>
            <img src="@/assets/qrcode.png" style="width: 208px;height: 208px"/>

            <p class="mt-7px bg-diamondGrey text-14px py-9px px-27px rounded-20px mb-20px">
                DWFRF345345FR34fk4tj4jf4j444rj
            </p>

            <p class="text-14px text-yewLime text-center mb-21px">
                禁止向上述收款地址充值{{cryptoAndChain}}资产，否则不可找回
            </p>
            <Button
                class="w-full p-9px rounded-20px mb-20px"
            >
                保存到相冊
            </Button>
        </div>
    </div>
</template>
<script>
import Button from "@/components/Button"

export default {
    props: {
        crypto: {
            require: true
        },
        chain: {
            require: true
        },
        isShow: {
            require: true,
        },
        onClose: {
            require: true
        }
    },
    methods: {
        getCryptoImgUrl() {
            return require(`@/assets/crypto/${this.crypto}.png`)
        }
    },
    computed: {
        cryptoAndChain: function() {
            return `${this.crypto.toUpperCase()}-${this.chain}`
        }
    },
    components: {
        Button
    }
}
</script>