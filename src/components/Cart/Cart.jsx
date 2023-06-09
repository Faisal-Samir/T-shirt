import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className='oder-container'>
            <h2>order summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;