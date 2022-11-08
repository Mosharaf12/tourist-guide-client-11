import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServicesItems from './ServicesItems';

const Services = () => {
    const services = useLoaderData();

    return (
       <div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 my-12 '>
            {
                services.map(service=> <ServicesItems
                key={service._id}
                service={service}
                
                ></ServicesItems>)
            }
            
        </div>
        <div className='flex justify-center my-5'>
            <Link to='/services'>
            <button className='btn btn-outline btn-success px-16'>See All</button>
            
            </Link>
        </div>
       </div>
    );
};

export default Services;