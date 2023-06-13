import axios from 'axios'

export const api = axios.create({
    baseURL: '',
    timeout: 5000
})

api.interceptors.request.use(
    (res) => res,
    (err) => console.log(err)
)

api.interceptors.response.use(
    (res) => res.data,
    (err) => console.log(err)
)

export const getDefaultData = () => api({
    method: 'get',
    url: '@/public/data/asd.json'
    // url:'./data/asd.json'
})