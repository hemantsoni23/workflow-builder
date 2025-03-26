import axios from 'axios'
import { baseURL } from '@/store/constant'

const apiClient = axios.create({
    baseURL: `${baseURL}/api/v1`,
    headers: {
        'Content-type': 'application/json',
        'x-request-from': 'internal'
    }
})

apiClient.interceptors.request.use(function (config) {
    const userId = localStorage.getItem('userId')

    if (userId) {
        config.headers['x-user-id'] = userId
    }

    return config
})

export default apiClient
