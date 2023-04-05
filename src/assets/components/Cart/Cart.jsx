import React from 'react';

const Cart = ({cart}) => {
    // calculate cart
    let totalPrice = 0;
    let shippingCost = 0;
    let quantity = 0;
    for(const product of cart){
     
        quantity += product.quantity;
        totalPrice = totalPrice + product.price * quantity;
        shippingCost += product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + shippingCost + tax;

    return (
        <div>
              <h2 className='text-center text-2xl font-semibold mb-12'>Order Summary</h2>
            <div className='text-lg mb-12'>
            <p className='pt-5'>Selected Items: {quantity}</p>
            <p className='pt-5'>Total Price: ${totalPrice}</p>
            <p className='pt-5'>Total Shipping Charge: ${shippingCost}</p>
            <p className='pt-5'>Tax: ${tax.toFixed(2)}</p>
            <h6 className='pt-5 text-xl font-medium'>Grand Total: ${grandTotal}</h6>
            </div>
            <button className='btn bg-error w-full normal-case text-white hover:bg-error'>Clear Cart</button>
            <button className='btn bg-secondary w-full normal-case text-white hover:bg-secondary'>Review Order</button>            <button></button>
        </div>
    );
};

export default Cart;