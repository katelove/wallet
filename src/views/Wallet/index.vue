<template lang="">
    <div class="mt-2 mx-26px">
        <div class="flex mt-27px mb-21px">
			<p class="mr-10px">总资产折合(USDT)</p>
			<img src="@/assets/icon/open_eye.svg" />
		</div>

        <div class="flex justify-between">
            <p class="text-24px">{{balance}}</p>
            <img src="@/assets/icon/next.svg" />
        </div>

        <BlueContainer class="mt-12 mb-20px">
			<div class="flex h-28 justify-evenly items-center">
				<router-link :to="'/crypto/deposit'">
					<div >
						<img class="m-auto" src="@/assets/icon/deposit.svg" />
						<p class="mt-1">充值/收款</p>
					</div>
				</router-link>
				<router-link :to="'/crypto/withdraw'">
					<div>
						<img class="m-auto" src="@/assets/icon/withdraw.svg" />
						<p class="mt-1">提現/轉帳</p>
					</div>
				</router-link>
			</div>
		</BlueContainer>

        <CryptoItem />
    </div>
</template>
<script>
import BlueContainer from "@/components/BlueContainer"
import CryptoItem from "./CryptoItem"

export default {
	data() {
		return {
			balance: localStorage.getItem('balance')
		}
	},
	components: {
        BlueContainer,
        CryptoItem
	}
}
</script>
