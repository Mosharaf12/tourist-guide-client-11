import React from 'react';

const ServicesItems = ({service}) => {
    const {_id,img,title,price, description}= service
    return (
        <div className=" rounded-md shadow-md bg-gray-50 text-gray-800">
        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                <p className="text-gray-800">{description.slice(0,100)}...</p>
                <h2 className='text-xl text-sky-600 font-semibold'>Price: ${price}</h2>
            </div>
            <div className=''>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50">More Details</button>
            </div>
        </div>
    </div>
    );
};

export default ServicesItems;