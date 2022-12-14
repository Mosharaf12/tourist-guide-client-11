import React, { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import UseTitle from '../../Hooks/UseTitle';
const notify = () => toast.success('Login successful');

const googleProvider = new GoogleAuthProvider()

const Login = () => {
    UseTitle('Login');
    const {signIn, googleSingPop}= useContext(AuthContext)
    const [error,setError]= useState('')
    const [success, setSuccess] =useState('')
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const handleSubmitLogin=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            setSuccess(true);
            notify();
            console.log(user);
            form.reset();
            setError('')
            navigate(from,{replace: true})

        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        })
        
    }
    const handleGoogleSign=()=>{
        googleSingPop(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setSuccess(true);
            notify();
        })
        .catch(error=>{
            console.error(error);
        })


    }

    return (
     <div className='pt-24'>
           <div className="w-full max-w-md space-y-3 rounded-xl p-3 bg-blue-100 text-gray-800 mx-auto my-12">
        <h1 className="text-4xl font-bold text-blue-500 text-center">LOGIN</h1>
        <form onSubmit={handleSubmitLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-1 text-sm">
                <label for="email" className="block text-md text-gray-600">Email</label>
                <input type="email" name="email" id="email" placeholder="email" required   className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600" />
            </div>
            <div className="space-y-1 text-sm">
                <label for="password" className="block text-md text-gray-600">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600" />
               
            </div>
            <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-50 bg-sky-600">Sign in</button>
            <Toaster></Toaster>

            <p className='text-error'>
                {error}
            </p>

        </form>
        <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 text-md text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        
        <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleSign} className='btn btn-outline btn-info w-full'>
                Login With Google
            </button>
        </div>
        <p className="text-md text-center sm:px-6 text-gray-600">Don't have an account?
            <Link to='/register' className="underline text-gray-800">Sign Up</Link>
        </p>
    </div>
     </div>

    )
        
};

export default Login;