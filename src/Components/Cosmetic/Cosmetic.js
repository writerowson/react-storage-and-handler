import React, { useEffect, useState } from 'react';
import Product from './Product';
import "./Cosmetic.css"


const Cosmetic = () => {
    const [cosmetics, setCosmetic] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetic(data))
    }, [])
    return (
        <div >
            <h1>Welcome to cosmetic store</h1>
            {cosmetics.map(product => <Product
                key={product.id}
                product={product}
            ></Product>)}
        </div>
    );
};

export default Cosmetic;