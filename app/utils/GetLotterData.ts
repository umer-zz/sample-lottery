import axios from "axios"
const api = axios.create({
    baseURL: 'https://testing-luckito-backend.rnssol.com/api'
})
const getData = (key: string) => {
    return api.get(`/luckito/lottery/get-lottery?lotteryType=${key}`).then(res => res.data)
}

export default {
    getData,
}