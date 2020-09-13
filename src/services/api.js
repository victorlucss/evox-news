import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/everything?q=apple&from=2020-09-11&to=2020-09-11&sortBy=popularity&apiKey=05464b99b3b247f0aff76bc370e05ec0'
})

export default api;
