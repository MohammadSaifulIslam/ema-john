import React from 'react';
import logo from '../../images/Logo.svg';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='px-10 bg-primary text-white'>
            <div className="navbar ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /> </a>
                </div>
                <div className="flex-none">
                    <ul className='flex gap-4'>
                        <li><NavLink to='/' className='hover:text-secondary duration-200' href="#">Shop</NavLink></li>
                        <li><NavLink  to='/orders' className='hover:text-secondary duration-200' href="">Order Review</NavLink></li>
                        <li><NavLink  to='/inventory' className='hover:text-secondary duration-200' href="">Manage Inventory</NavLink></li>
                        <li><NavLink  to='/login' className='hover:text-secondary duration-200' href="">Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;