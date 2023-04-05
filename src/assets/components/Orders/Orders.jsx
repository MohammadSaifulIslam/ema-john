import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const cart = useLoaderData()
    return (
        <div className='shop-container grid grid-cols-5'>
        <div className="product-contaier col-span-3 m-8 flex justify-center items-center">
           <div>
            {
                cart.map(product => <ReviewItem
                key={product.id}
                product={product}
                >

                </ReviewItem>)
            }
           </div>
        </div>
        <div className="cart-container col-span-2 bg-neutral sticky top-0 px-4 py-7">
          <Cart cart={cart}></Cart>
        </div>
        
    </div>
    );
};

export default Orders;