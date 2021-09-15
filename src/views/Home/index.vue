<template>
  <div class="mt-2 mx-26px">
    <div class="flex">
      <router-link :to="'/safeCenter'"
        ><Icon :src="require('@/assets/icon/profile.png')"
      /></router-link>
      <p class="text-25px flex-grow text-center">测试钱包</p>
    </div>

    <div class="flex mt-27px mb-21px">
      <p class="mr-10px">总资产折合(USDT)</p>
     <Icon
        :src="require('@/assets/icon/open_eye.png')"
        style="width: 30px;height: 21px"
      />
    </div>
    <div class="flex justify-between items-center relative">
      <p class="text-24px text-melancholyBlue">{{ balance }}</p>
      <router-link to="/wallet"><Icon :src="require('@/assets/icon/next.png')" style="width: 10px;height: 17px"/></router-link>
    </div>
    <BlueContainer class="mt-12 mb-20px">
      <div class="flex h-28 justify-evenly items-center">
        <router-link :to="'/crypto/deposit'">
          <div>
            <Icon class="m-auto" :src="require('@/assets/icon/deposit.png')" />
            <p class="mt-1">充值/收款</p>
          </div>
        </router-link>
        <router-link :to="'/crypto/withdraw'">
          <div>
            <Icon class="m-auto" :src="require('@/assets/icon/withdraw.png')" />
            <p class="mt-1">提現/轉帳</p>
          </div>
        </router-link>
      </div>
    </BlueContainer>

    <Icon
      :src="require('@/assets/banner.png')"
      class="mb-12px"
      style="width: unset;height: unset"
    />

    <CryptoList />
  </div>
</template>

<script>
import BlueContainer from "@/components/BlueContainer";
import CryptoList from "./CryptoList.vue";
import Icon from "@/components/Icon.vue";

export default {
  data() {
    return {
      balance: localStorage.getItem("balance"),
    };
  },
  components: {
    BlueContainer,
    CryptoList,
    Icon,
  },
};
</script>

<style>
.close-top {
  transform: translateY(-50%);
  top: 50%;
}
</style>