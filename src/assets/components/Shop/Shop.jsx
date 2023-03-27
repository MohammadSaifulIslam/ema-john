import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container grid grid-cols-5'>
            <div className="product-contaier col-span-4 m-8">
               <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
               </div>
            </div>
            <div className="cart-container">
                <h2>Cart Review</h2>
            </div>
            
        </div>
    );
};

export default Shop;