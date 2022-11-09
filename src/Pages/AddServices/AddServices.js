import React from 'react';

const AddServices = () => {
    const handlePlaceOrder=(event)=>{

    }
    return (
        <div>
        <form onSubmit={handlePlaceOrder}>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <input name='title' type="text" placeholder="title" className="input input-bordered w-full" />

            <input name='photoURL' type="text" placeholder="photoURL" className="input input-bordered w-full" />

            <input name='Price' type="text" placeholder="Price" className="input input-bordered w-full" />

            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Add description"></textarea>
            <input className='btn btn-info my-3' type="submit" value="Add to services" />
        </form>
        
    </div>
    );
};

export default AddServices;