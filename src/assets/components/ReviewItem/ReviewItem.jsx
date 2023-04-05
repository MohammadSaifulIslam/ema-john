import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product,handleRemoveItem }) => {
    const { id, name, img, price, quantity, shipping } = product


    return (
        <div className='w-[570px] border border-gray rounded-lg py-2 pl-2 pr-5 flex gap-4 mb-5 items-center'>
            <img className='h-28 rounded-md' src={img} alt="" />
            <div className='grow'>
                <h3 className='text-xl tracking-tighter mt-1'>{name}</h3>
                <p>Price: <span className='text-secondary'>${price}</span></p>
                <p>Quantity: <span className='text-secondary'>{quantity}</span></p>
                <p>Shipping Charge: <span className='text-secondary'>${shipping}</span></p>
            </div>
            <button onClick={()=> handleRemoveItem(id)} className='w-14 h-14 rounded-full bg-red-300'> <FontAwesomeIcon className='text-error' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;