import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart);
    // handle remove review item
    const handleRemoveItem = id =>{
        const remaing = cart.filter(product => product._id !== id);
        setCart(remaing);
        removeFromDb(id);
    }
    // handle cler cart function
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container grid grid-cols-5'>
        <div className="product-contaier col-span-3 m-8 flex justify-center items-center">
           <div>
            {
                cart.map(product => <ReviewItem
                key={product._id}
                product={product}
                handleRemoveItem={handleRemoveItem}
                >
                </ReviewItem>)
            }
           </div>
        </div>
        <div className="cart-container col-span-2 bg-neutral h-screen px-4 py-7">
          <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to='/checkout' className='btn bg-secondary w-full normal-case text-white hover:bg-secondary flex justify-between'><span>Procced Checkout</span> <FontAwesomeIcon icon={faCreditCardAlt}></FontAwesomeIcon> </Link>
          </Cart>
        </div>
        
    </div>
    );
};

export default Orders;