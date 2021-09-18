import axios from 'axios'

const api = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/',
  });

  export default api