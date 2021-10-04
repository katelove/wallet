import { getBalance } from "@/api";

const user = {
    state: {
        balances: [],
        pairList: [
            'btcusdt',
            'ethusdt',
            'bnbusdt'
        ],
        listenkey: '',
        userId: '',
        amountTotal: 0
    },
    mutations: {
        SET_BALANCES: (state, balances) => {
            state.balances = balances;
        },
        SET_AMOUNT_TOTAL: (state, amountTotal) => {
            state.amountTotal = amountTotal;
        },
        SET_USERID: (state, userId) => {
            state.userId = userId;
        },
        SET_LISTENKEY: (state, listenkey) => {
            state.listenkey = listenkey;
        },
    },
    actions: {
        UpdateBalances ({ commit }) {
            getBalance()
            .then(rep => {
                const { balances } = rep.data;
                let balancesObj = {};
                let amountTotal = 0;
                balances.forEach(element => {
                    balancesObj[element.asset] = element;
                    amountTotal += parseFloat(element.free) + parseFloat(element.locked);
                });
                commit('SET_AMOUNT_TOTAL', amountTotal.toFixed(2));
                commit('SET_BALANCES', balancesObj);
            });
        },
        UpdateUserId ({ commit }, state) {
            commit('SET_USERID', state);
        },
        UpdateListenkey ({ commit }, state) {
            commit('SET_LISTENKEY', state);
        },
    }
};

export default user;
