import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api.105paolian.com/',
});

export default request;
