import Axios from './axios';

const unimed = {
     async findAll (){
        return await Axios.get("https://api.unimed.coop.br/unimed/v3/unimeds/");
    }
}
export default unimed;