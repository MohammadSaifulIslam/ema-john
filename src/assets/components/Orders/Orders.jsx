import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart);
    // handle remove review item
    const handleRemoveItem = id =>{
        const remaing = cart.filter(product => product.id !== id);
        setCart(remaing);
        removeFromDb(id);
    }
    return (
        <div className='shop-container grid grid-cols-5'>
        <div className="product-contaier col-span-3 m-8 flex justify-center items-center">
           <div>
            {
                cart.map(product => <ReviewItem
                key={product.id}
                product={product}
                handleRemoveItem={handleRemoveItem}
                >
                </ReviewItem>)
            }
           </div>
        </div>
        <div className="cart-container col-span-2 bg-neutral h-screen px-4 py-7">
          <Cart cart={cart}></Cart>
        </div>
        
    </div>
    );
};

export default Orders;