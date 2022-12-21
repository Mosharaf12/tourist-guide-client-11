import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Reviews = ({handlePostReview}) => {
    const {user}= useContext(AuthContext);
    
         
    return (
        <div>
             <div className='pt-10'>
            <h1 className='uppercase text-3xl py-4'>Reviews about journey</h1>
            <div className='flex items-center'>
            <div className='flex items-center'>
                <img style={{width: '50px',height: '50px'}} src={user?.photoURL ? user.photoURL : 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=612x612&w=0&k=20&c=IJ1HiV33jl9wTVpneAcU2CEPdGRwuZJsBs_92uk_xNs='} alt="" />
                <h2 className='mx-3'>{user?.displayName ? user.displayName : ''}</h2>
            </div>

            {/* form input review  */}
            <div>
                <form onSubmit={handlePostReview} className='flex items-center'>
               
                <div className='flex items-center my-3'>
                <input name='message' type="text" placeholder="Add Reviews" className="input input-bordered w-full  mr-5"/>
                <button type='submit' className='btn btn-primary px-12'>Post</button>
                </div>
                </form>
                
            </div>
            </div>
        </div>
    
        </div>
    );
            };    
            

export default Reviews;