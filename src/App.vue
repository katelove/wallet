<template>
	<div id="app" class="relative">
		<TopNav />
		<router-view/>
		<BottomNav />
	</div>
</template>

<script>
import './index.css'
import TopNav from "@/components/TopNav"
import BottomNav from "@/components/BottomNav"
import axios from "axios"

export default {
	name: 'App',
	created() {
		axios.get('https://api.105paolian.com/toychain/accounts/RyAc7Si4rWWuV3TxXu2mqa9jqg1RSbhnRjKWzJ4PiXf6nqSNK')
		.then(rep => {
			localStorage.setItem('balance', rep?.data?.balance || 0)
		})
	},
	components: {
		TopNav,
		BottomNav
	}
}
</script>
