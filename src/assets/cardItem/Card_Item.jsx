import React from 'react';
import'.'

const Card_Item = ({ data }) => {
    console.log("jkh:", data);
    const { name, img, price, stock } = data;
    
    return (
        <div className='item'>

            <img src={img} alt="" />
            <p>Name:{name}</p>
            <p>Price:{price}</p>
            <p>Quantity:{ stock}</p>

        </div>
    );
};

export default Card_Item;