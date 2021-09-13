import axios from 'axios'

export const getBalance = async () => {
    const rep = await axios.get('https://api.105paolian.com/wallet/users/00001')
    let total = 0
    rep?.data?.wallets?.forEach(({ balance }) => {
        total += balance;
    })
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
