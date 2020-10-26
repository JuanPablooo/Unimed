import React, { useEffect, useState } from 'react';

import unimedService from '../../services/unimed';
import Search from '../../components/Search';
import UnimedView from '../../components/Unimed';

import './home.css';

const Home = () => {

    const [unimeds, setUnimeds] = useState([]);

    const [findedUnimeds, setFindedUnimeds] = useState([]);

    const findUnimeds = async ()=>{
        const { data } = await unimedService.findAll();
        setUnimeds(data);
        setFindedUnimeds(data);
    }

    useEffect(  () => {
        findUnimeds();
    }, []);
    
    const searchUnimed = ( title ) => {
        const searched = title.target.value;
        const finded = unimeds.filter((currentValue) =>{
            const name = currentValue.nmUnimed.toUpperCase();
            return name.includes(searched.toUpperCase());
        });
        setFindedUnimeds(finded)
    }

    return (
        <div className="container-unimeds">
            <Search searcherOnChange={ searchUnimed }/>
            <ul>
                {
                    findedUnimeds.map(unimed => <UnimedView key={unimed.cdUnimed} unimed={ unimed } /> )
                }
            </ul>
        </div>
    );
}


export default Home;