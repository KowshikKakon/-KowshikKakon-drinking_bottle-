import React from 'react';
// css file akoi folder e dite  hoi notuba path find korte parena...
import'./Card_Itm.css'

const Card_Item = ({ data, addToCart }) => {
    const { name, img, price, stock } = data;
    return (
        <div className='item'>

            <img src={img} alt="" />
            
            <p>Name:{name}</p>
            <p>Price:{price}</p>
            <p>Quantity:{stock}</p>
            <button onClick={()=>addToCart(data)}>Buy Now</button>
            </div>
        
    );
};

export default Card_Item;