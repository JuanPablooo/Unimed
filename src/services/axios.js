import Axios from 'axios';
const BASE_URL = 'https://api.unimed.coop.br/unimed/v3/unimeds/';

const instance = Axios.create({
    baseURL: BASE_URL,
    
});
export default instance;