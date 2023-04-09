import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,handleAddToCart}) => {
    return (
        <div className='tshirt'>
            <img className='shirt-image' src={tshirt.picture} alt="" />
            <h3>Price: ${tshirt.price}</h3>
            <p>Name: {tshirt.name}</p>
            <button onClick={() => handleAddToCart(tshirt)} className='btn-buyNow'>Buy Now</button>
        </div>
    );
};

export default Tshirt;