import axios from "axios"

 const baseUrlCoinGecko = 'https://api.coingecko.com/'
 const baseUrlHeroku = 'https://fast-headland-89130.herokuapp.com/'
 //    const baseUrlHeroku = 'http://localhost:5000/'

export const apiCoinGecko = axios.create({
    baseURL: baseUrlCoinGecko + `api/v3/`,
})

export const apiHeroku = axios.create({
    baseURL: baseUrlHeroku,
    headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
})
