import { appendUpdatedId } from '@/helper/utils';
import { getDepthBySymbol } from '@/api';
import Big from 'big.js';

const processOrderBookSnapshot = (orderBook, snapshotOrderbook) => {
    const { lastUpdateId, bids, asks } = snapshotOrderbook;
    const { ask: orderBookAsk, bid: orderBookBid } = orderBook;

    // clean the order that is out of date
    const cleanOutOfDateOrder = (order) => order[2] > lastUpdateId;
    let askCount = Big(0);
    let bidCount = Big(0);

    const filterAsk = orderBookAsk.filter(cleanOutOfDateOrder);

    const filterBid = orderBookBid.filter(cleanOutOfDateOrder);

    const snapshotOrders = appendUpdatedId(lastUpdateId, asks, bids);
    orderBook.ask = [...snapshotOrders[0], ...filterAsk]
    .sort((a, b) => (new Big(a[0])).minus(b[0]))
    .slice(0, 6)
    .map(e => {
        e[0] = Big(e[0]);
        e[1] = Big(e[1]);
        const timesNumber = e[0].times(e[1]);
        e[3] = timesNumber;
        askCount = askCount.plus(timesNumber);
        return e;
    });

    orderBook.bid = [...snapshotOrders[1], ...filterBid]
    .sort((a, b) => (new Big(b[0])).minus(a[0]))
    .slice(0, 6)
    .map(e => {
        e[0] = Big(e[0]);
        e[1] = Big(e[1]);
        const timesNumber = e[0].times(e[1]);
        e[3] = timesNumber;
        bidCount = bidCount.plus(timesNumber);
        return e;
    });

    orderBook.askCount = askCount;
    orderBook.bidCount = bidCount;
};

const processOrderBookUpdate = (orderBook, ask, bid) => {
    const purgeEmptyVolume = (v) => Big(v[1]).gt(0);
    let askCount = Big(0);
    let bidCount = Big(0);

    orderBook.ask = ask
    .filter(purgeEmptyVolume)
    .sort((a, b) => (new Big(a[0])).minus(b[0]))
    .slice(0, 6)
    .map(e => {
        e[0] = Big(e[0]);
        e[1] = Big(e[1]);
        const timesNumber = e[0].times(e[1]);
        e[3] = timesNumber;
        askCount = askCount.plus(timesNumber);
        return e;
    });

    orderBook.bid = bid
    .filter(purgeEmptyVolume)
    .sort((a, b) => (new Big(b[0])).minus(a[0]))
    .slice(0, 6)
    .map(e => {
        e[0] = Big(e[0]);
        e[1] = Big(e[1]);
        const timesNumber = e[0].times(e[1]);
        e[3] = timesNumber;
        bidCount = bidCount.plus(timesNumber);
        return e;
    });
    orderBook.askCount = askCount;
    orderBook.bidCount = bidCount;
};

const orderBookUpdateFromRESTfulAPI = (orderBook) => {
    getDepthBySymbol(orderBook.pair)
    .then((data) => {
        processOrderBookSnapshot(orderBook, data);
    });
};

const validateEventUpdateId = (orderBook, U) => {
    const { lastUpdateId, ask } = orderBook;
    if (U - lastUpdateId !== 1 && !ask.length === 0) {
        throw (`Event id is not continued, lastUpdateId: ${lastUpdateId}, Event Id: ${U}`);
    }
};

const orderbookUpdateFromWebsocket = (orderBook, data) => {
    try {
        // has to be uppcase 'U'
        validateEventUpdateId(orderBook, data.U);
        const orders = appendUpdatedId(data.u, data.a, data.b);
        processOrderBookUpdate(orderBook, ...orders);
        orderBook.lastUpdateId = data.u;
    } catch (e) {
        orderBookUpdateFromRESTfulAPI(orderBook);
    }
};

export {
    orderbookUpdateFromWebsocket,
    orderBookUpdateFromRESTfulAPI,
};
