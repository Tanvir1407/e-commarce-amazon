import React from 'react';
import './Products.css'

const Products = ({product,handleAddToCart}) => {
    const { img, name, price, seller, ratings } = product;
    
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='m__left'>
                <h4>{name}</h4>
                <h5>Price: ${ price }</h5>
            </div>
            <div className='m__left' style={{marginBottom:'50px'}}>
                <p><small>Manufacturer: {seller}</small></p>
                <p style={{marginTop:"-15px"}}><small>Ratting: {ratings }</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Products;