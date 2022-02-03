import axios from "axios";

export const key = "d40ff6aa8c273bc3ddd20f875b7ae2653a98e6b2"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;