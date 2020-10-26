import React from 'react';

import './search.css';

const Search = ( { searcherOnChange } ) => {
    
    return (
        <form>
            <input className="input-search" placeholder="Pesquisar" onChange={ searcherOnChange }/>
        </form>
    );
}

export default Search;