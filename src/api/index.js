import axios from 'axios'
import binancePublicRequest from '@/helper/binancePublicRequest';
import backendRequest from '@/helper/backendRequest';

export const getDepthBySymbol = (symbol) => {
    return binancePublicRequest.get(`/api/v1/depth?limit=100&symbol=${symbol}`)
    .then(({ data }) => data);
};

export const newOrder = (data) => {
    return backendRequest.post('/wallet/orders', data)
};

export const getBalance = (data) => {
    return backendRequest.get('/wallet/me/balance', data)
};

export const getBalance2 = async () => {
    const user_id = localStorage.getItem('user_id') || "00001"
    const rep = await axios.get(`https://api.105paolian.com/wallet/users/${user_id}`)
    let total = 0
    rep?.data?.wallets?.forEach(({ balance }) => {
        total += balance;
    })
    localStorage.setItem('wallets', JSON.stringify(rep.data.wallets))
    localStorage.setItem('balance', total || 0)
    return rep.data
}

export const transfer = async (data) => {
    const rep = await axios.post('https://api.105paolian.com/wallet/transfers', data)
    return rep.data
}

export const getTransferHistory = async () => {
    const rep = await axios.get('https://api.105paolian.com/wallet/history')
    return rep.data
}
