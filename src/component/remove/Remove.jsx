import React from 'react';
import './Remove.css'
// jokhon remove korbo tokhon unnique kichu nea kaj korte hobe tai id nite hobe...
const Remove = ({ cart, removeCart }) => {
    
    return (
        <div className='remove-container'>
            {cart.map((cartId,index )=> (
                <div key={index}>
                    <img src={cartId.img} alt="" />
                    <button onClick={() => removeCart(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Remove;
