import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {userLogin} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/' ;

    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)


        userLogin(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            event.target.reset()
            navigate(from,  { replace: true })
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <form onSubmit={handleLogin} className='p-10 border border-gray w-full md:w-[500px] mx-auto my-20 rounded-xl'>
            <h3 className='text-3xl text-center'>Login</h3>
            <div className="form-control mb-5">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' className="input input-bordered w-full mt-3" required/>
            </div>
            <div className="form-control mb-5">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' className="input input-bordered w-full mt-3" required/>
            </div>
            <button className='w-full py-4 bg-neutral rounded cursor-pointer mt-5 duration-200 hover:bg-secondary hover:text-white'>Login</button>
            <p className='mt-2 text-center'>New to Ema-john? <Link className='text-secondary ml-1' to='/register'>  Create New Account</Link></p>
        </form>
    );
};

export default Login;