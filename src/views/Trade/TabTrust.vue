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
                :side="order.S"
                :transact-time="order.O"
                :symbol="order.s"
                :orig-qty="order.q"
                :price="order.p"
                :accumulate="order.z"
                @cleanOrders="orders = []"
            />
        </div>
    </div>
</template>
<script>
import OrderBlock from "@/components/OrderBlock.vue";
import Websocket from "@/helper/websocket";

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
        this.ws = new Websocket();
        this.ws.userData("f8Pvg5hydOYf1cf8Gp1ujvC53pTlXX0kxwU2ZUzG1uaEstEv7oWc2Os4xrOS", {
            message: (evt) => {
                const data = JSON.parse(evt.data);
                const event = data.e;
                const status = data.X;
                const orderId = data.i;
                const orders = this.orders;
                if (event === "executionReport") {
                    if (status === "NEW") {
                        orders.push(data);
                    } else if (status === "FILLED" || status === "CANCELED") {
                        const index = orders.find((e) => e.i === orderId);
                        orders.splice(index, 1);
                    }
                    this.orders = orders;
                }
            },
        });
    },
};
</script>
