import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_REACT_BASE_URL_PRODUCTION,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance