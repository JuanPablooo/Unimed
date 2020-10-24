import Axios from './axios';

const unimed = {
     async buscando (){
        return await Axios.get("https://api.unimed.coop.br/unimed/v3/unimeds/");
    }
}
export default unimed;