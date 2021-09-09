<template lang="">
    <div class="mx-12px">
        <BlueContainer title="充值/收款">
            <div class="mx-20px my-23px">
                <div class="flex justify-between">
                    <div class="flex">
                        <img :src="getCryptoImgUrl($route.params.crypto)" class="mr-12px"/>
                        <p>{{crypto.toUpperCase()}}</p>
                    </div>
                    <Button
                        class="py-1 px-14px rounded-10px "
                        bg="bg-grassGreen"
                    >
                        数字货币
                    </Button>
                </div>
                <div class="flex text-14px my-25px">
                    <div class="flex bg-diamondGrey w-min rounded-10px mr-2">
                        <Button
                            v-for="(item, index) in chainList" :key="index"
                            class="py-1 px-14px rounded-10px "
                            :bg="selectChain === item ? 'bg-plumRed' : 'bg-diamondGrey'"
                            :textColor="selectChain === item ? 'text-white' : 'text-black'"
                            @click="selectChain = item"
                        >
                            {{item}}
                        </Button>
                    </div>
                    <Button
                        class="p-6px rounded-10px "
                        bg="bg-diamondGrey"
                        textColor="text-black"
                    >
                        +新增地址
                    </Button>
                </div>
            </div>
            <div class="mx-30px mt-39px">
                <div class="flex justify-between mb-24px">
                    <p>收款地址</p>
                    <div class="flex items-center">
                        <img src="@/assets/icon/address_book.svg" style="width: 20px;height: 20px;margin-right: 18px"/>
                        <img src="@/assets/icon/scan.svg" style="width: 20px;height: 20px"/>
                    </div>
                </div>

                <Input class="w-full" placeholder="請輸入收款地址" v-model="address"/>
                <div class="flex justify-between mb-24px mt-40px items-center">
                    <p>轉賬數量</p>
                    <p class="text-yewLime text-12px self-end">可用  {{balance}}  USDT</p>
                </div>

                <div class="relative">
                    <Input class="w-full" placeholder="請輸入轉賬數量" v-model="amount" type="number"/>
                </div>
                <div class="flex justify-end items-center text-12px mt-2">
                    <p class="text-yewLime mr-23px">手續費</p>
                    <p>1USDT</p>
                </div>
                <Button
                    class="mt-25px mb-19px py-11px w-full"
                    @click="showWithdrawCheckModal = true"
                >
                    確認
                </Button>
                <div class="w-full px-25px py-30px border-black border rounded-10px bg-diamondGrey text-12px mb-15px">
                    轉賬說明<br>
                    1.禁止向非USDT地址轉賬，否則無法到賬，且不可找回<br>
                    2.您當前選擇的鏈為 TRC20<br>
                    3.USDT單筆最小轉賬數量為 30 USDT，單筆最大轉賬數量為1,000,000<br>
                    4.USDT轉賬手續費為 1 USDT，內轉則無手續費<br>
                    5.外部轉賬需 19 個網絡確認後到賬<br>
                </div>
            </div>
        </BlueContainer>
        <WithdrawCheckModal
            v-if="showWithdrawCheckModal"
            @onClose="closeWithdrawCheckModal"
            :amount="amount"
            :address="address"
        />
    </div>
</template>
<script>
import BlueContainer from "@/components/BlueContainer"
import Button from "@/components/Button"
import Input from "@/components/Input"
import WithdrawCheckModal from "@/components/WithdrawCheckModal"
import { getCryptoImgUrl } from "@/utlis"

export default {
    data() {
		return {
            selectChain: 'TRC20',
            chainList: [ 'TRC20', 'BSC', 'HECO', 'ERC20' ],
            crypto: this.$route.params.crypto,
            showWithdrawCheckModal: false,
            amount: '',
            address: '',
            balance: localStorage.getItem('balance')
		}
	},
    methods: {
        getCryptoImgUrl,
        closeWithdrawCheckModal: function() {
            this.showWithdrawCheckModal = false;
        }
    },
    components: {
		BlueContainer,
        Button,
        Input,
        WithdrawCheckModal
	},
}
</script>
<style lang="">
    
</style>