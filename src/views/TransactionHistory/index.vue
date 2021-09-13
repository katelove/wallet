<template lang="">
    <div>
        <BlueContainer
            title="充提紀錄"
            class="mx-12px mb-30px pb-20px"
        >
            <div class="flex mx-auto mt-30px items-center justify-center">
                <img
                    :src="getCryptoImgUrl(crypto)"
                    style="width: 36px;height: 36px;margin-right: 12px"
                />
                {{crypto}}
            </div>
            <div class="text-center my-17px">{{balance}}</div>

            <div class="bg-diamondGrey" style="height: 27px"></div>
            <div class="flex mt-16px mx-22px justify-center flex-col">
                <div class="flex text-center mb-30px">
                    <p class="border-b border-yewLime pb-3px mr-35px">全部</p>
                    <p style="width: 153px;margin-right: 47px">转出</p>
                    <p style="width: 70px">转入</p>
                </div>
                <div
                    class="flex text-center items-center mb-27px"
                    v-for="(item, index) in transactionHistory"
                    :key="index"
                >
                    <img
                        :src="require(`@/assets/${item.type}.png`)"
                        style="with: 34px;height: 34px;margin-right: 35px"
                    />
                    <div style="width: 153px;margin-right: 47px">
                        <p>erj32128h414h1j</p>
                        <p>{{item.date | moment('YYYY-MM-DD HH:MM:SS')}}</p>
                    </div>
                    <div style="width: 70px">
                        {{item.type === 'in' ? '+' : '-'}}{{item.amount}}
                    </div>
                </div>
            </div>
        </BlueContainer>

        <div class="flex mx-26px border border-black rounded-10px py-17px px-30px justify-between">
            <Button
                class="py-7px px-26px rounded-10px"
                @click="$router.push('/crypto/deposit')"
            >
                充值/收款
            </Button>
            <Button
                class="py-7px px-26px rounded-10px"
                bg="bg-grassGreen"
                @click="$router.push('/crypto/withdraw')"
            >
                提领/转帐
            </Button>
        </div>
    </div>
</template>
<script>
import BlueContainer from "@/components/BlueContainer"
import Button from "@/components/Button"
import { getCryptoImgUrl } from "@/utlis"
import { getTransferHistory } from "@/api"

export default {
    created() {
        getTransferHistory()
        .then(data => {
            const user_id = localStorage.getItem('user_id')
            const filterData = data.filter(e => e.user_id === user_id && e.coin === this.crypto)
            this.transactionHistory = filterData || []
        })
    },
    mounted() {
        this.transactionHistory.forEach(e => {
            this.total += e.amount
        });
    },
    data() {
        return {
            transactionHistory: [],
            balance: localStorage.getItem('balance'),
            crypto: this.$route.params.crypto
        }
    },
    methods: {
        getCryptoImgUrl,
    },
    components: {
		BlueContainer,
        Button,
	},
}
</script>
