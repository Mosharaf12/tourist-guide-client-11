import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('service add success');

const AddServices = () => {
    const handlePlaceOrder=(event)=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img =form.photoURL.value;
        const price = form.price.value;
        const message = form.message.value;
        console.log(title,img,price,message);
        
        const newServices = {
            title: title,
            img: img,
            price: price,
            description: message
        }
        fetch(`https://services-assignment-server.vercel.app/service`,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServices)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
             notify();
            form.reset();
        })
        .catch(error=> console.error(error))


    }
    return (
        <div>
            <h3 className='text-5xl font-semibold text-primary text-center my-5 uppercase'>Add a Service</h3>
        <form onSubmit={handlePlaceOrder}>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input name='title' type="text" placeholder="title" className="input input-bordered w-full" />

            <input name='photoURL' type="text" placeholder="photoURL" className="input input-bordered w-full" />

            <input name='price' type="text" placeholder="price" className="input input-bordered w-full" />

            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Add description"></textarea>
            <input className='btn btn-info my-3' type="submit" value="Add to services" />
        </form>
        <Toaster></Toaster>
        
    </div>
    );
};

export default AddServices;