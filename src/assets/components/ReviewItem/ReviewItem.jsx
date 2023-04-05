import React from 'react';

const ReviewItem = ({ product }) => {
    const { id, name, img, price, quantity, shipping } = product
    console.log(product)
    return (
        <div className='h-[120px] w-[570px] border border-gray rounded-lg p-2 flex gap-4 mb-5'>
            <img className='h-full rounded-md' src={img} alt="" />
            <div>
                <div>
                    <h3 className='text-xl tracking-tighter mt-1'>{name}</h3>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping Charge:${shipping}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;