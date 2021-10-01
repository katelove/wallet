const getters = {
    pairList: state => state.user.pairList,
    balances: state => state.user.balances,
    amountTotal: state => state.user.amountTotal,
    listenkey: state => state.user.listenkey,
    userId: state => state.user.userId,
};

export default getters;
