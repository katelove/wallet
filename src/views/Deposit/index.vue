<template lang="">
    <div class="bg-lightGray3 px-[16px] pt-[14px] pb-[24px]">
        <div class="bg-white px-[18px] flex justify-between items-center boxShadow-bottom rounded-[5px] h-[41px]">
            <div class="flex flex-row">
                <router-link to="/crypto/deposit">
                    <img
                        :src="getCryptoImgUrl($route.params.crypto)"
                        class="w-[25px] h-[25px] mr-[7px]"
                    >
                </router-link>
                <p>{{ crypto.toUpperCase() }}</p>
            </div>
            <img
                src="@/assets/icon/next_arrow.png"
                class="w-[6px] h-[12px]"
            >
        </div>
        <div class="bg-white mt-[18px] rounded-[5px] px-[14px] pt-[14px]">
            <p class="text-[14px]">
                充幣網路
            </p>
            <div class="flex justify-between">
                <Button
                    v-for="(item, index) in chainList"
                    :key="index"
                    class="boxShadow-bottom rounded-[8px] text-center border mt-[9px] px-[14.5px] py-[9px]"
                    :bg="selectChain === item ? 'bg-white' : 'bg-[#E8E8E8]'"
                    :text-color="selectChain === item ? 'text-mainColor' : 'text-black'"
                    :border-color="selectChain === item ? 'border-mainColor' : 'border-[#E8E8E8]'"
                    @click="selectChain = item"
                >
                    {{ item }}
                </Button>
            </div>

            <div class="border mt-[15px]" />
            <p class="mt-[11px] text-[14px]">
                充幣地址
            </p>
            <div class="flex items-center justify-center flex-col">
                <img
                    src="@/assets/qrcode.png"
                    class="w-[144px] h-[144px] mt-[10px]"
                >
                <Button class="bg-mainColor text-white p-[9px] rounded-[8px] mt-[10px]">
                    將QRcode儲存相簿
                </Button>
            </div>
            <div class="border mt-[15px]" />
            <div class="p-[11px] flex justify-between text-[12px]">
                <p class="break-all mr-[10px]">
                    o23o313o3123o13o1312o31331o31231231313
                </p>
                <Button
                    v-clipboard:copy="'o23o313o3123o13o1312o31331o31231231313'"
                    class="text-center text-mainColor bg-white border border-mainColor w-[70px] h-[31px] rounded-[8px]"
                >
                    複製地址
                </Button>
            </div>
        </div>
        <div
            class="
                bg-[#E8E8E8]
                text-[#767778] text-[16px]
                rounded-[5px]
                flex
                items-start
                flex-col
                justify-start
                py-[13px]
                px-[16px]
                mt-[15px]
            "
        >
            <p>1.禁止向上述地址充值非 TRC-20資產</p>
            <p>2.充值需要 12 個網絡確認才能到賬</p>
        </div>
    </div>
</template>
<script>
import {getCryptoImgUrl} from "@/utlis";
import Button from "@/components/Button";
export default {
    components: {
        Button,
    },
    data() {
        return {
            selectChain: "TRC20",
            chainList: ["TRC20", "BSC", "HECO", "ERC20"],
            crypto: this.$route.params.crypto,
        };
    },
    methods: {
        getCryptoImgUrl,
    },
};
</script>
