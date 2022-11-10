import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Reviews = () => {
    const {user} =useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    const handlePostReview = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        const name = user?.displayName;
        const img = user?.photoURL;
        console.log(message, name, img)
        const review = {
            message: message,
            name: name,
            img: img,
            email: user.email
        }

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())        
        .then(data => {
            console.log(data)
            event.target.reset()
        })
        .catch(err => console.error(err))
    }      
    return (
        <div>
             <div className='p-10'>
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

            <div>
                {
                    reviews.map(review=> <p key={review._id}>{review.message}</p> )
                }
            </div>
    
        </div>
    );
};

export default Reviews;