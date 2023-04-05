import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
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
    // get cart product details from localstore
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step-1 get id
        for(const id in storedCart){
            // get the added product by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // step-3 get and set the product quantity 
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;

                // step-4 add the addedProduct to the saved cart
                savedCart.push(addedProduct)
            }
        }
        // step-5 set the cart 
        setCart(savedCart)

    },[products])

    // add to cart function
    const handleAddToCart = (product) =>{
        let newCart = [];
        // const newCart = [...cart, product]
        // if product dosen't exist in the cart, then set quantity =1
        // if exist then update quantity by 1
        const exist = cart.find(pd => pd.id === product.id)
        console.log('product exist', exist)
        if(!exist){
            product.quantity = 1;
            newCart = [...cart,product]
        }
        else{
            exist.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, product]
        }

        setCart(newCart)
        addToDb(product.id)
    };
    // handle cler cart function
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
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
              <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;