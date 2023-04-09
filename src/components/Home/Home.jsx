import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import Cart from '../Cart/Cart';
import { toast } from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            toast('Already added');
        }
        else {
            console.log(tshirt);
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }
    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>This is home section: {tshirts.length}</h1>
            <div className="home-container">
                <div className="tshirt-container">
                    {
                        tshirts.map(tshirt => <Tshirt
                            key={tshirt._id}
                            tshirt={tshirt}
                            handleAddToCart={handleAddToCart}
                        ></Tshirt>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;