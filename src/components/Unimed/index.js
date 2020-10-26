import React from 'react';
import { Link } from 'react-router-dom';

import iconWolrd  from '../../images/world.svg';
import iconTel from '../../images/tel.svg';
import iconLocale from '../../images/locale.svg';
import './unimed.css'

const Unimed = ({ unimed }) => {
    const {site, telefone, endereco, cidade, uf, nmUnimed } = unimed;
    const  openTab = link => window.open(`http://${link}`);

    return(
    <>
    <li className="unimed-item">
        <div>
        <h3><Link to={site} onClick={()=>openTab(site)}  className="my-title" > {nmUnimed} </Link></h3>
        </div>
        <div>
            <Link className="ml mr info-unimed border-none" to={site} onClick={()=>openTab(site)} > <img alt="site" className="mr-min" src={iconWolrd} /> {site} </Link> |
            <div className="info-unimed mr"> <img src={iconTel} alt="telefone"/> {telefone} </div> |
            <img className="mr ml" src={iconLocale} alt="local"/> <>{endereco}  {cidade} {uf}</> 
        </div>
    </li>
    </>
    )
}

export default Unimed;