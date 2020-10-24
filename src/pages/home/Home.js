import React, { useEffect, useState } from 'react';

import unimed from '../../services/unimed';
import iconWolrd  from '../../images/word.svg'
import iconTel from '../../images/tel.svg'
import iconLocale from '../../images/locale.svg'

import './home.css';

const Home = () => {

    const [unimeds, setUnimeds] = useState([]);

    const [findedUnimeds, setFindedUnimeds] = useState([]);

    const findUnimeds = async ()=>{
        const unimeds = await unimed.buscando();
        setUnimeds(unimeds.data);
        setFindedUnimeds(unimeds.data)
    }

    useEffect(  ()=>{
        findUnimeds();
    });
    const unimedView = (unimed)=>(
        <li>
            <div>
            <h3><a className="my-title" >{unimed.nmUnimed}</a></h3>
            </div>
            <div>
                <> <img src = {iconWolrd}/> {unimed.site} </> |
                <> <img src={iconTel}/> {unimed.telefone} </> |
                <img src={iconLocale}/> <>{unimed.endereco}  {unimed.cidade} {unimed.uf}</> 
            </div>
        </li>
    )
    const searchUnimed = ( title )=>{
        const searched = title.target.value;
        const finded = unimeds.filter((currentValue, index, arr) =>{
        //   currentValue.nmUnimed.str.includes(searched)
            const name = currentValue.nmUnimed.toUpperCase();

            if(name.includes(searched.toUpperCase())){
                return true;
            }

            // ? console.log("encontrou"): console.log("nao")
        });
        setFindedUnimeds(finded)
    }

    return (
        <>
           <form>
               <input placeholder="Pesquisar" onChange={searchUnimed}/>
           </form>

            <ul>
                {
                    findedUnimeds.map(unimed => unimedView(unimed))
                }
            </ul>
        </>
    );
}


export default Home;