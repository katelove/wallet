<template lang="">
  <div class="bg-lightGray">
    <div>目前尚無委託</div>
    <div>
      <Block side="BUY" progress="60"></Block>
    </div>
  </div>
</template>
<script>
import Block from "@/components/Block.vue";
export default {
  name: "TabTrust",
  // created() {
  //     const dataJson=  {
  //                 clientOrderId: "H3a9ZkEAtVJwgzmTCkmP17",
  //                 cummulativeQuoteQty: "42.51250000",
  //                 executedQty: "0.00100000",
  //                 fills: [
  //                     {
  //                         commission: "0.00000000",
  //                         commissionAsset: "BTC",
  //                         price: "42512.50000000",
  //                         qty: "0.00100000",
  //                     },
  //                 ],
  //                 isIsolated: false,
  //                 marginBuyBorrowAmount: "",
  //                 marginBuyBorrowAsset: "",
  //                 orderId: 5332709,
  //                 origQty: "0.00100000",
  //                 price: "0.00000000",
  //                 side: "BUY",
  //                 status: "FILLED",
  //                 symbol: "BTCUSDT",
  //                 timeInForce: "GTC",
  //                 transactTime: 1632477836609,
  //                 type: "MARKET",
  //             }
  // }
  components: {
    Block,
  },
};
</script>
<style lang=""></style>
