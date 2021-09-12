import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  user: {
    account: "",
    password: "",
    isLogin: false,
  },
};

const mutations = {
  setUserData(state, { userData }) {
    console.log('state:'+state);
    state.user.account = userData.account;
    state.user.password = userData.password;
    state.user.isLogin = true;
  },
};

const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
