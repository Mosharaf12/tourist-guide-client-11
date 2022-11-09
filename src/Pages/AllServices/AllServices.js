import React, { useEffect, useState } from 'react';
import UseTitle from '../../Hooks/UseTitle';
import ServicesItems from '../Services/ServicesItems';

const AllServices = () => {
    const [services, setServices]= useState([])
    UseTitle('services');

    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res=> res.json())
        .then(data=> setServices(data))

    },[])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 my-12'>
            {
                services.map(service=> <ServicesItems
                key={service._id}
                service={service}
                ></ServicesItems>)
            }
            
        </div>
    );
};

export default AllServices;