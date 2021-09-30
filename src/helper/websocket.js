/* eslint-disable no-console */
const { isEmptyValue } = require('./utils');

class Websocket {
    constructor (options = {}) {
        this.wsURL = options.wsURL || 'wss://stream.binance.com:9443';
        // this.wsURL = options.wsURL || 'wss://testnet.binance.vision';
        this.reconnectDelay = 5000;
        this.wsRef = {};
    }

    diffBookDepth (symbol, speed, callbacks) {
        const url = `${this.wsURL}/ws/${symbol.toLowerCase()}@depth@${speed}`;
        return this.subscribe(url, callbacks);
    }

    tickerWS (symbol = null, callbacks) {
        let path = '!ticker@arr';
        if (!isEmptyValue(symbol)) {
            path = `${symbol.toLowerCase()}@ticker`;
        }
        const url = `${this.wsURL}/ws/${path}`;
        return this.subscribe(url, callbacks);
    }

    miniTickerWS (symbol = null, callbacks) {
        let path = '!miniTicker@arr';
        if (!isEmptyValue(symbol)) {
            path = `${symbol.toLowerCase()}@miniTicker`;
        }
        const url = `${this.wsURL}/ws/${path}`;
        return this.subscribe(url, callbacks);
    }

    partialBookDepth (symbol, levels, speed, callbacks) {
        const url = `${this.wsURL}/ws/${symbol.toLowerCase()}@depth${levels}@${speed}`;
        return this.subscribe(url, callbacks);
    }

    userData (listenKey, callbacks) {
        const url = `${this.wsURL}/ws/${listenKey}`;
        return this.subscribe(url, callbacks);
    }

    combinedStreams (streams, callbacks) {
        let arrStreams = streams;
        if (!Array.isArray(arrStreams)) {
            arrStreams = [arrStreams];
        }

        const url = `${this.wsURL}/stream?streams=${arrStreams.join('/')}`;
        return this.subscribe(url, callbacks);
    }

    subscribe (url, callbacks) {
        this.wsRef.closeInitiated = false;
        const initConnect = () => {
            const ws = new WebSocket(url);
            this.wsRef.ws = ws;

            Object.keys(callbacks).forEach((event) => {
                ws.addEventListener(event, callbacks[event]);
            });

            ws.addEventListener('open', () => {
                console.log('open');
            });

            ws.addEventListener('close', () => {
                console.log('closed');
                if (!this.wsRef.closeInitiated) {
                    setTimeout(() => {
                        initConnect();
                    }, this.reconnectDelay);
                } else {
                    this.wsRef.closeInitiated = false;
                }
            });
        };
        initConnect();
    }

    unsubscribe () {
        this.wsRef.closeInitiated = true;
        this.wsRef.ws.close();
    }
}

module.exports = Websocket;
