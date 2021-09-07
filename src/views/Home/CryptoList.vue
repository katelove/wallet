<template lang="">
    <div class="rounded-10px border border-melancholyBlue">
        <div class="flex py-2 px-22px text-12px border-b border-melancholyBlue">
            <p style="width: 183px">名称</p>
            <p style="width: 70px">最新价</p>
            <p>24小時漲跌</p>
        </div>
        <div class="my-2">
            <div v-for="(value, symbol, index) in spot" :key="symbol"
                class="flex px-22px text-12px items-center"
                :class="[index === Object.keys(spot).length - 1 ? '' : 'mb-21px']"
            >
                <img :src="value.image" style="width: 25px;height: 25px"/>
                <p
                    class="ml-2 mr-3"
                    style="width: 34px"
                >
                    {{symbol}}
                </p>
                <p
                    class="text-yewLime"
                    style="width: 80px"
                >
                    {{value.name}}
                </p>
                <p
                    class="text-right"
                    style="width: 60px"
                >
                    ${{value.bidPrice}}
                </p>
                <p
                    class="text-right"
                    :class="[value.priceChangePercent >= 0 ? 'text-grassGreen' : 'text-plumRed']"
                    style="width: 95px"
                >
                    {{value.priceChangePercent ? value.priceChangePercent.toFixed(2) + '%' : ''}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
		return {
			spot: {
                btc: {
                    image: require("@/assets/crypto/btc.svg"),
                    name: "Bitcoin"
                },
                eth: {
                    image: require("@/assets/crypto/eth.svg"),
                    name: "Ethereum"
                },
                busd: {
                    image: require("@/assets/crypto/busd.svg"),
                    name: "BUSD"
                },
                bnb: {
                    image: require("@/assets/crypto/bnb.svg"),
                    name: "BNB"
                },
            },
			timer: []
		}
	},
	mounted() {
		this.timer.push(this.getSymbol('busd', 'BUSDUSDT'))
		this.timer.push(this.getSymbol('btc', 'BTCUSDT'))
		this.timer.push(this.getSymbol('eth', 'ETHUSDT'))
		this.timer.push(this.getSymbol('bnb', 'BNBUSDT'))
	},
	methods: {
		async getSymbol(symbol, pair) {
			const rep = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${pair}`)
			const { priceChangePercent, bidPrice } = rep.data;
			let newObj = Object.assign({}, this.spot)
			newObj[symbol].priceChangePercent = parseFloat(priceChangePercent)
            newObj[symbol].bidPrice = parseFloat(bidPrice).toFixed(1)
			this.spot = newObj
			setTimeout(() => {
				this.getSymbol(symbol, pair)
			}, 1000)
		}
	},
	beforeDestroy() {
		this.timer.forEach(e => clearInterval(e))
    }
}
</script>
