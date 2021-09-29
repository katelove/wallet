import axios from 'axios';

const request = axios.create({
    headers: {
        'content-type': 'application/json',
    },
    baseURL: 'https://api.binance.com',
});

export default request;
