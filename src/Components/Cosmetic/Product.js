import React from 'react';
import { addToDB, removeFromDb } from '../../Utilities/fakedb';
import "./Product.css"
const Product = (props) => {
    const { name, price, id } = props.product
    const addToCart = (id) => {
        // localStorage.setItem(id, 1) 
        // -------or-------
        addToDB(id)
    }
    const removeFromCart = id => {
        removeFromDb(id)
    }

    // const addToCartWithPara = () => addToCart(id)
    return (
        <div className='product'>
            <h3>Buy this cosmetic :{name} </h3>
            <p> Price: ${price}</p>
            <p><small>ID: {id}</small></p>
            <button onClick={() => addToCart(id)}>Purchase</button>
            <button onClick={() => removeFromCart(id)} >Romove</button>
            {/* <button onClick={addToCartWithPara}>Add to cart</button> */}
        </div>
    );
};

export default Product;