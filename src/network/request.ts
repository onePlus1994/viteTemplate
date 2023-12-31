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

export const getLoginData = () => api({
    method: 'get',
    url: './data/login.json'
})

export const getMenuData = () => api({
    method: 'get',
    url: './data/menu.json'
}) 