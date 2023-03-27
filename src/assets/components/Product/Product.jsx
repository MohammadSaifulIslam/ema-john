import React from 'react';
const Product = (props) => {
    console.log(props)
    const {name,price,seller,ratings,img} = props.product
    return (
        <div className=''>
            <div className=" w-full border-2 border-gray rounded-lg">
                <figure className='w-72 h-[288px] m-3 mx-auto'><img src={img} alt="Shoes" className='w-full h-full rounded-lg' /></figure>
                <div className="mx-4">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-lg'>Price: ${price}</p>
                    <div className='mt-11 mb-3'>
                        <p>Manufacturer : {seller}</p>
                        <p>Rating : {ratings} star</p>
                    </div>
                </div>
                    <div className="card-footer">
                       <button className='w-full bg-neutral py-3 rounded-b-lg hover:bg-secondary'>Add to Cart</button>
                    </div>
            </div>
        </div>
    );
};

export default Product;