const getters = {
    symbolList: state => state.user.symbolList,
    balances: state => state.user.balances,
    amountTotal: state => state.user.amountTotal,
    listenkey: state => state.user.listenkey,
    userId: state => state.user.userId,
};

export default getters;
