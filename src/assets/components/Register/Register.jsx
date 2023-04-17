import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if(!password === confirmPassword){
            alert('password must be same')
            return
        }
        console.log(email,password,confirmPassword)
    }
    return (
        <form onSubmit={handleRegister} className='p-10 border border-gray w-full md:w-[500px] mx-auto my-20 rounded-xl'>
            <h3 className='text-3xl text-center'>Sign Up</h3>
            <div className="form-control mb-5">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' className="input input-bordered w-full mt-3" required/>
            </div>
            <div className="form-control mb-5">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' className="input input-bordered w-full mt-3" required/>
            </div>
            <div className="form-control mb-5">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name='confirmPassword' className="input input-bordered w-full mt-3" required/>
            </div>
            <button className='w-full py-4 bg-neutral rounded cursor-pointer mt-5 duration-200 hover:bg-secondary hover:text-white'>Sign Up</button>
            <p className='mt-2 text-center'>Already have an account? <Link className='text-secondary ml-1' to='/login'> Login</Link></p>
        </form>
    );
};

export default Register;