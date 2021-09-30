<template lang="">
    <div class="mx-12px">
        <BlueContainer title="充值/收款">
            <div class="mx-20px my-23px">
                <div class="flex justify-between">
                    <div class="flex items-center">
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
            </div>
            <div class="mx-30px mt-39px">
                <div class="flex justify-between mb-24px">
                    <p>收款地址</p>
                    <div class="flex items-center">
                        <img
                            src="@/assets/icon/address_book.png"
                            style="width: 20px; height: 20px; margin-right: 18px"
                        >
                        <img
                            src="@/assets/icon/scan.png"
                            style="width: 20px; height: 20px"
                        >
                    </div>
                </div>

                <Input
                    v-model="address"
                    class="w-full"
                    placeholder="請輸入收款地址"
                />
                <div class="flex justify-between mb-24px mt-40px items-center">
                    <p>轉賬數量</p>
                    <p class="text-yewLime text-12px self-end">
                        可用 {{ avaibleAmount }} {{ symbol }}
                    </p>
                </div>

                <div class="relative">
                    <Input
                        v-model="amount"
                        class="w-full"
                        placeholder="請輸入轉賬數量"
                        type="number"
                    />
                </div>
                <div class="flex justify-end items-center text-12px mt-2">
                    <p class="text-yewLime mr-23px">
                        手續費
                    </p>
                    <p>1{{ symbol }}</p>
                </div>
                <Button
                    class="mt-25px mb-19px py-11px w-full"
                    @click="checkBalance"
                >
                    確認
                </Button>
                <div class="w-full px-25px py-30px border-black border rounded-10px bg-diamondGrey text-12px mb-15px">
                    轉賬說明<br>
                    1.禁止向非{{ symbol }}地址轉賬，否則無法到賬，且不可找回<br>
                    2.您當前選擇的鏈為 TRC20<br>
                    3.{{ symbol }}單筆最小轉賬數量為 30 {{ symbol }}，單筆最大轉賬數量為1,000,000<br>
                    4.{{ symbol }}轉賬手續費為 1 {{ symbol }}，內轉則無手續費<br>
                    5.外部轉賬需 19 個網絡確認後到賬<br>
                </div>
            </div>
        </BlueContainer>
        <WithdrawCheckModal
            v-if="showWithdrawCheckModal"
            :amount="amount"
            :address="address"
            @onClose="closeWithdrawCheckModal"
            @onCheck="transferToken"
        />
    </div>
</template>
<script>
import BlueContainer from "@/components/BlueContainer";
import Button from "@/components/Button";
import Input from "@/components/Input";
import WithdrawCheckModal from "@/components/WithdrawCheckModal";
import {getCryptoImgUrl} from "@/utlis";
import {transfer, getBalance} from "@/api";

export default {
    components: {
        BlueContainer,
        Button,
        Input,
        WithdrawCheckModal,
    },
    data() {
        return {
            selectChain: "TRC20",
            chainList: ["TRC20", "BSC", "HECO", "ERC20"],
            crypto: this.$route.params.crypto,
            symbol: this.$route.params.crypto === "halo" ? "HALO" : "USDT",
            showWithdrawCheckModal: false,
            amount: "",
            address: "",
            avaibleAmount: 0,
        };
    },
    created() {
        getBalance();
        this.$nextTick(() => {
            const wallets = JSON.parse(localStorage.getItem("wallets"));
            const crypto = wallets.find(({coin}) => coin === this.crypto);
            this.avaibleAmount = crypto.balance;
        });
    },
    methods: {
        getCryptoImgUrl,
        closeWithdrawCheckModal: function () {
            this.showWithdrawCheckModal = false;
        },
        checkBalance: function () {
            const amount = parseInt(this.amount || 0);
            if (amount <= 0) {
                this.$toasted.show("金額不能為0", {
                    type: "error",
                });
            } else if (parseInt(this.avaibleAmount) < parseInt(amount)) {
                this.$toasted.show("資產不足", {
                    type: "error",
                });
            } else {
                this.showWithdrawCheckModal = true;
            }
        },
        transferToken: function () {
            const userId = localStorage.getItem("userId") || "00001";
            const data = {
                coin: this.crypto === "halo" ? "halo" : "usdt",
                from: userId,
                to: userId === "00001" ? "00002" : "00001",
                amount: parseInt(this.amount),
            };
            transfer(JSON.stringify(data))
                .then(() => {
                    localStorage.setItem("balance", parseInt(localStorage.getItem("balance")) - parseInt(this.amount));
                    this.$router.push(`/transaction_history/${this.crypto}?showLast=true`);
                })
                .catch(() => {
                    this.$toasted.show("轉帳失敗請在試一次", {
                        type: "error",
                    });
                });
        },
    },
};
</script>
<style lang=""></style>
