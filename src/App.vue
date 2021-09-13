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
import { getBalance } from "@/api"

export default {
	name: 'App',
	created() {
		getBalance()
	},
	components: {
		TopNav,
		BottomNav
	}
}
</script>
