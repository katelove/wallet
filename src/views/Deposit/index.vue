<template lang="">
    <div>
        <BlueContainer
            title="充值/收款"
            class="mx-12px"
        >
            <div class="mx-20px my-23px">
                <div class="flex justify-between">
                    <div class="flex">
                        <img
                            :src="getCryptoImgUrl($route.params.crypto)"
                            class="mr-12px"
                            style="width: 36px; height: 36px"
                        >
                        <p>{{ crypto.toUpperCase() }}</p>
                    </div>
                    <Button
                        class="py-1 px-14px rounded-10px"
                        bg="bg-grassGreen"
                    >
                        数字货币
                    </Button>
                </div>
                <div class="flex text-12px my-25px justify-between">
                    <div class="flex bg-diamondGrey w-min rounded-10px mr-2">
                        <Button
                            v-for="(item, index) in chainList"
                            :key="index"
                            class="py-6px px-14px rounded-10px"
                            :bg="selectChain === item ? 'bg-plumRed' : 'bg-diamondGrey'"
                            :text-color="selectChain === item ? 'text-white' : 'text-black'"
                            @click="selectChain = item"
                        >
                            {{ item }}
                        </Button>
                    </div>
                    <Button
                        class="p-6px rounded-10px"
                        bg="bg-diamondGrey"
                        text-color="text-black"
                    >
                        新增地址
                    </Button>
                </div>
                <div class="py-14px px-15px border border-black rounded-10px">
                    <div class="flex justify-between mb-4">
                        <div class="flex items-center">
                            <p class="mr-9px">
                                默认地址
                            </p>
                            <Button
                                class="py-1 px-12px rounded-10px text-14px"
                                bg="bg-grassGreen"
                            >
                                {{ selectChain }}
                            </Button>
                        </div>
                        <div class="flex items-center text-graniteGrey text-12px">
                            <p>修改</p>
                            <p class="ml-10px">
                                刪除
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-12px self-end text-graniteGrey">
                            DWFRF345345FR34fk4tj4jf4j444rj
                        </p>
                        <Button
                            v-clipboard:copy="'DWFRF345345FR34fk4tj4jf4j444rj'"
                            class="py-7px px-23px rounded-10px"
                            @click="showCopy = !showCopy"
                        >
                            复制
                        </Button>
                    </div>
                </div>
            </div>
        </BlueContainer>
        <div
            v-if="showCopy"
            class="flex py-25px px-23px bg-diamondGrey rounded-10px items-center text-14px mx-12px"
        >
            <div>
                <img
                    src="@/assets/qrcode.png"
                    class="w-72px h-72px mb-13px"
                >
                <p
                    class="text-melancholyBlue text-center"
                    @click="showQrcodeModal = true"
                >
                    保存
                </p>
            </div>
            <div class="py-22px px-4 w-270px border-black border rounded-10px bg-white ml-7px h-101px">
                1.禁止向上述地址充值非 {{ selectChain }}資產 <br><br>
                2.充值需要 12 個網絡確認才能到賬
            </div>
        </div>
        <QrcodeModal
            :chain="selectChain"
            :crypto="crypto"
            :is-show="showQrcodeModal"
            :on-close="closeQrcodeModal"
        />
    </div>
</template>
<script>
import BlueContainer from "@/components/BlueContainer";
import QrcodeModal from "@/components/QrcodeModal";
import Button from "@/components/Button";
import {getCryptoImgUrl} from "@/utlis";

export default {
    components: {
        BlueContainer,
        Button,
        QrcodeModal,
    },
    data() {
        return {
            selectChain: "TRC20",
            chainList: ["TRC20", "BSC", "HECO", "ERC20"],
            crypto: this.$route.params.crypto,
            showCopy: false,
            showQrcodeModal: false,
        };
    },
    methods: {
        getCryptoImgUrl,
        closeQrcodeModal() {
            this.showQrcodeModal = false;
        },
    },
};
</script>
