import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(result =>{})
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <nav className='px-10 bg-primary text-white'>
            <div className="navbar ">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /> </Link>
                </div>
                <div className="flex-none">
                    <ul className='flex gap-4'>
                        <li><NavLink to='/' className='hover:text-secondary duration-200' >Shop</NavLink></li>
                        <li><NavLink  to='/orders' className='hover:text-secondary duration-200' >Order Review</NavLink></li>
                        <li><NavLink  to='/inventory' className='hover:text-secondary duration-200' >Manage Inventory</NavLink></li>
                        <li><NavLink  to='/register' className='hover:text-secondary duration-200' >Register</NavLink></li>
                        <li><NavLink  to='/login' className='hover:text-secondary duration-200' >Login</NavLink></li>
                        {user && 
                       <>
                        <li><p>{user.email}</p></li>
                        <li><button onClick={handleLogOut} className='hover:text-secondary duration-200'>log out</button></li>
                       </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;