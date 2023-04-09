import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirtData = useLoaderData();
    console.log(tshirtData);
    return (
        <div>
            <h1>This is home section: {tshirtData.length}</h1>
            {
                // tshirtData.map(tshirt => )
            }
        </div>
    );
};

export default Home;