import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, price, seller, ratings, img } = props.product
    return (
        <div className=''>
            <div className=" w-full border-2 border-gray rounded-lg">
                <figure className='px-3 h-[288px] m-3 mx-auto'><img src={img} alt="Shoes" className='w-full h-full rounded-lg' /></figure>
                <div className="card_body mx-4 h-40 relative">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-lg'>Price: ${price}</p>
                    <div className='absolute bottom-0 mb-3'>
                        <p>Manufacturer : {seller}</p>
                        <p>Rating : {ratings} star</p>
                    </div>
                </div>
                <div className="card-footer text-lg">
                    <button onClick={() => props.handleAddToCart(props.product)} className='w-full btn bg-neutral py-3 rounded-none rounded-b-lg  hover:bg-secondary hover:text-white'>Add to Cart   <FontAwesomeIcon className='pl-2' icon={faShoppingCart} /></button>
                  
                </div>
            </div>
        </div>
    );
};

export default Product;