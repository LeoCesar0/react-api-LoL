

import axios from 'axios'

const apikey = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol/platform/v3',
  });

  export default apikey