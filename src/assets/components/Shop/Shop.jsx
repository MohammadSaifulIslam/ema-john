import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart()
        console.log(storedCart)
    },[])
    // add to cart function
    const handleAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container grid grid-cols-5'>
            <div className="product-contaier col-span-4 m-8">
               <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
               </div>
            </div>
            <div className="cart-container bg-neutral h-screen sticky top-0 px-4 pt-7">
              <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;