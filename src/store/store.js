import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    progress: 0

  },
  mutations: {
    SET_USER_DATA(state, userData) {
      console.log('state:'+ state+' userData:'+userData);
      // 登入==>設置state
      state.user = userData
      // 設置localstorage連到自動登入
      localStorage.setItem('user_id', JSON.stringify(userData))
    },
    CLEAR_USER_DATA() {      
      localStorage.removeItem('user_id')
    },
  },
  actions: {
    // 登入=>帳號和密碼登入
    login ({ commit }) {
      commit('SET_USER_DATA')
    },
    // 登出方法
    logout ({ commit }) {
      console.log('logout')
      commit('CLEAR_USER_DATA')
    },
  },
  // 創造一個Getter取值
  getters: {
    getUser: state => {
      return state.user
    }
  }
})