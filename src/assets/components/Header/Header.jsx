import React from 'react';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <nav className='px-10 bg-primary text-white'>
            <div className="navbar ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Ema-John</a>
                </div>
                <div className="flex-none">
                    <ul className='flex gap-4'>
                        <li><a className='hover:text-secondary' href="#">Order</a></li>
                        <li><a  className='hover:text-secondary' href="">Order Review</a></li>
                        <li><a  className='hover:text-secondary' href=""></a>Manage Inventory</li>
                        <li><a  className='hover:text-secondary' href="">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;