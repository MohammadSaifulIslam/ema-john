import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    // pagination state 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);

    // pagiation data load
    const { totalProducts } = useLoaderData();

    // pagination
    const totalPage = Math.ceil(totalProducts / itemsPerPage);

    const pageNumbers = [...Array(totalPage).keys()]
    console.log({ pageNumbers })

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    // pagination: load data by using current page and itemsPerPage 
    useEffect(() => {
        const fetchData = async () => {
          // Make API call here, passing currentPage and itemsPerPage as query parameters
          const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);
          const result = await response.json();
          setProducts(result);
        };
    
        fetchData();
      }, [currentPage, itemsPerPage]);



    // get cart product details from localstore
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step-1 get id
        for (const id in storedCart) {
            // get the added product by using id
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                // step-3 get and set the product quantity 
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;

                // step-4 add the addedProduct to the saved cart
                savedCart.push(addedProduct)
            }
        }
        // step-5 set the cart 
        setCart(savedCart)

    }, [products])

    // add to cart function
    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product]
        // if product dosen't exist in the cart, then set quantity =1
        // if exist then update quantity by 1
        const exist = cart.find(pd => pd._id === product._id)
        console.log('product exist', exist)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exist.quantity += 1;
            const remaining = cart.filter(pd => pd._id !== product._id)
            newCart = [...remaining, product]
        }

        setCart(newCart)
        addToDb(product._id)
    };
    // handle cler cart function
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    // pagination function 
    const handleSelectChange = (e) => {
        const newValue = parseInt(e.target.value);
        setItemsPerPage(newValue);
        setCurrentPage(1);
    };
    return (
        <>
            <div className='shop-container grid grid-cols-5'>
                <div className="product-contaier col-span-4 m-8">
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            products.map(product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product>)
                        }
                    </div>
                </div>
                <div className="cart-container bg-neutral h-screen sticky top-0 px-4 pt-7">
                    <Cart cart={cart} handleClearCart={handleClearCart}>
                        <Link to='/orders' className='btn bg-secondary w-full normal-case text-white hover:bg-secondary flex justify-between' ><span>Review Order</span> <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </Link>
                    </Cart>
                </div>
            </div>
            {/* pagination */}
            <div className="text-center my-10 space-x-3">
                {
                    pageNumbers.map(number => <button
                        key={number}
                        onClick={()=> setCurrentPage(number + 1)}
                        className={`border border-warning h-10 w-10 rounded-full ${currentPage === number + 1 && 'btn-warning'}`}>
                        {number + 1}
                    </button>)

                }
                {
                    <select value={itemsPerPage} onChange={handleSelectChange} className="p-1 border-2 select-warning">
                        <option value={9}>9</option>
                        <option value={15}>15</option>
                        <option value={30}>30</option>
                    </select>
                }
            </div>
        </>
    );
};
export default Shop;