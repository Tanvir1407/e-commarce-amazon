import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [total, setTotal] = useState(0)

    const handleAddToCart = (e) => {
        const newCart = [...cart, e];
        setCart(newCart);

          setTotal(total + parseInt(e.price))
    }

    console.log(cart)
    return (
        <div className='shop__container'>
            <div className='products__container'>
                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className='card__container'>
                <h2>Order Summary</h2>
                <h4>Select Item: {cart.length}</h4>
                <h4>Total Price: {total }</h4>
                <h4>Total Shipping Charge: {cart.length * 60  } </h4>
                <h4>Tax: {parseInt(total *0.1) }</h4>
                <h4>Grand Total: {total + (cart.length * 60 )+ parseInt(total *0.1) } </h4>
                <div className='button'>
                    <button className='button__one'>Clear Cart</button> <br />
                    <button className='button__two'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;