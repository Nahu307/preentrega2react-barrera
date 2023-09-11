import React from 'react'
import propTypes from 'prop-types';
import {Link} from "react-router-dom";

const ItemList = ({items, isLoading}) => {
    if(isLoading)
    return <h2>Loading...</h2>
    return (
    <div>
        <h1>ItemList</h1>

        <ul>
            {items.map((item) =>(
                <li key={item.id}>
                    <Link to={'/item/${item.id}'}>
                    <h3 className='titleH3'>{item.name}</h3>
                    <p className='price'>${item.price}</p>
                    <p className='category'>{item.category}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)
}

ItemList.propTypes  = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
};

export default ItemList