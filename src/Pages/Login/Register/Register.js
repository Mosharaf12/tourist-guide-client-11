import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
const notify = () => toast.success('Login successful');

const googleProvider = new GoogleAuthProvider()

const Register = () => {
    const {createUser,updateUser,googleSingPop}= useContext(AuthContext)
    const [error,setError]= useState('')
    const [success, setSuccess] =useState('')

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photoURL,email,password);
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('')
            setSuccess(true)
            notify()
            form.reset()
            handleUpdateUser(name,photoURL)
        })
        .catch(error=> {
            console.error(error)
            setError(error.message)
        })

    }
    const handleUpdateUser=(name,photoURL)=>{
        const profile={
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
        .then(()=>{

        })
        .catch(()=>{

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
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 mx-auto my-8">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-1 text-sm">
                <label for="name" className="block text-gray-600">name</label>
                <input type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600" />
            </div>
            <div className="space-y-1 text-sm">
                <label for="photoURL" className="block text-gray-600">photoURL</label>
                <input type="text" name="photoURL" id="photoURL" placeholder="photoURL" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600" />
            </div>
            <div className="space-y-1 text-sm">
                <label for="email" className="block text-gray-600">email</label>
                <input type="text" name="email" id="email" placeholder="email" required   className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600" />
            </div>
            <div className="space-y-1 text-sm">
                <label for="password" className="block text-gray-600">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" required  className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600" />
                
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-sky-600">Sign Up</button>
            <Toaster></Toaster>

            {/* error and success message  */}
            
            {success && <p className='text-success'> Registration successful </p>}

           <p className='text-error'>
           {error}
           </p>
        </form>
        <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleSign} className='btn btn-outline btn-info w-full'>
                Login With Google
            </button>
        </div>
        <div className="flex justify-center space-x-4">  
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
            <Link to='/login' className="underline text-gray-800">Login</Link>
        </p>
    </div>

    );
};

export default Register;