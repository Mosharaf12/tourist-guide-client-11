import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import UseTitle from '../../Hooks/UseTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Reviews from '../Reviews/Reviews';
import ReviewSection from '../ReviewSection/ReviewSection';

const CardDetails = () => {
    const {user}= useContext(AuthContext);
    const services = useLoaderData();
    const {_id,img,title,description,price}= services;
    UseTitle(`${title}`);


    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://services-assignment-server.vercel.app/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [reviews])

    const handleDelete =id=>{
        const proceed = window.confirm('Are you sure, you want to cancel this order')
        if(proceed){
            fetch(`https://services-assignment-server.vercel.app/reviews/${id}`,{
                method: 'DELETE',
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('delete successfully')
                    const remaining =reviews.filter(odr=> odr._id!==id);
                    setReviews(remaining);
                }
            })
        }
    }


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

        fetch('https://services-assignment-server.vercel.app/reviews', {
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
    };        

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

   <Reviews handlePostReview={handlePostReview}></Reviews>

        {/* review section  */}

   <div>
        <ReviewSection
        reviews={reviews}
        handleDelete={handleDelete}
        >

        </ReviewSection>
   </div>
   
      </div>
    );
};

export default CardDetails;

