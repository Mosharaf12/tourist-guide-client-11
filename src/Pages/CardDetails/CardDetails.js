import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import UseTitle from '../../Hooks/UseTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Reviews from '../Reviews/Reviews';

const CardDetails = () => {
    const {user}= useContext(AuthContext);
    const services = useLoaderData();
    const {img,title,description,price}= services;
    UseTitle(`${title}`);

    return (
      <div className='shadow-md'>
          <div className=" rounded-md  bg-gray-50 text-gray-800">
          <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt="" className="cursor-zoom-in object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
       
      </PhotoView>
    </PhotoProvider>
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                <p className="text-gray-800">{description}</p>
                <h2 className='text-xl text-sky-600 font-semibold'>Price: ${price}</h2>
            </div>
            <div className=''>
           <Link to=''>
           <button type="button" className="flex justify-end p-3 font-semibold rounded-md bg-sky-600 text-gray-50">Check Out</button>
           </Link>
            </div>
        </div>
    </div>

    {/* reviews section  */}

   <Reviews></Reviews>
      </div>
    );
};

export default CardDetails;

