<template lang="">
    <div class="bg-[#f4f4f4] flex flex-col justify-center items-center py-[16px] min-h-[200px]">
        <div
            v-if="orders.length === 0"
            class="text-[#767778] text-[12px]"
        >
            目前尚無委託
        </div>
        <div v-else>
            <OrderBlock
                v-for="order in orders"
                :key="order.i"
                :side="order.side"
                :transact-time="order.time"
                :symbol="order.symbol"
                :orig-qty="order.origQty"
                :executed-qty="order.executedQty"
                :price="order.price"
            />
        </div>
    </div>
</template>
<script>
import OrderBlock from "@/components/OrderBlock.vue";
import Websocket from "@/helper/websocket";
import {getOpenOrder} from "@/api";

export default {
    name: "TabTrust",
    components: {
        OrderBlock,
    },
    data() {
        return {
            orders: [],
        };
    },
    created() {
        this.getOpenOrderHanlder();
        this.ws = new Websocket({
            wsURL: "wss://testnet.binance.vision",
        });
        this.ws.userData("UGHZwotbWScSQlmQm34P460UqE2qqPIG4MGDUE2Ot4dbt1D1SQmzO6KBWWBF", {
            message: (evt) => {
                const data = JSON.parse(evt.data);
                const event = data.e;
                if (event === "executionReport") {
                    this.getOpenOrderHanlder();
                } else if (event === "balanceUpdate") {
                    this.$store.dispatch("UpdateBalances");
                }
            },
        });
    },
    methods: {
        getOpenOrderHanlder() {
            getOpenOrder().then((rep) => {
                this.orders = rep.data;
            });
        },
    },
};
</script>
