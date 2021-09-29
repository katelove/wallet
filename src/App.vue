<template>
	<div id="app" class="relative">
		<TopNav />
		<div
			class="overflow-y-scroll overflow-x-hidden"
			:style="`height: ${hideBottomNav ? '90vh' : '75vh'}`">
			<router-view/>
		</div>
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
	computed: {
		hideBottomNav: function() {
			return this.$route.meta.hideBottomNav
		}
	},
	created() {
		getBalance()
	},
	components: {
		TopNav,
		BottomNav
	}
}
</script>
