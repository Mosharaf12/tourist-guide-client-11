import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const services = useLoaderData();
    const {img,title,description,price}= services;

    return (
      <div className='shadow-md'>
          <div className=" rounded-md  bg-gray-50 text-gray-800">
        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                <p className="text-gray-800">{description}</p>
                <h2 className='text-xl text-sky-600 font-semibold'>Price: ${price}</h2>
            </div>
            <div className=''>
           <Link to=''>
           <button type="button" className="flex justify-end p-3 font-semibold rounded-md bg-sky-600 text-gray-50">More Details</button>
           </Link>
            </div>
        </div>
    </div>

    {/* reviews section  */}

    <div className='p-10'>
            <h1 className='uppercase text-3xl py-4'>Reviews about journey</h1>
            <div className='flex items-center'>
            <div className='flex items-center'>
                <img style={{width: '60px'}} src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=612x612&w=0&k=20&c=IJ1HiV33jl9wTVpneAcU2CEPdGRwuZJsBs_92uk_xNs=" alt="" />
                <h2 className='mx-3'>Mr jhankar</h2>
            </div>

            {/* form input review  */}
            <div>
                <form className='flex items-center'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full  mr-5"/>
                    <button type='submit' className='btn btn-primary'>Post</button>
                </form>
            </div>
            </div>
        </div>
    
      </div>
    );
};

export default CardDetails;