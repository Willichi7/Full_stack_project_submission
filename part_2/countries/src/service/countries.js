import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'
const apiKey = import.meta.env.VITE_API_KEY



const getAll = () => {
   return axios.get(`${baseUrl}/api/all`)
}


const getCountryWeather = (capital) => {
   return  axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`)
}

export default {getAll, getCountryWeather}
