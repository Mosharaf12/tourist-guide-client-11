import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewSection from '../ReviewSection/ReviewSection';

const MyReviews = () => {
    const {user}= useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://services-assignment-server.vercel.app/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [reviews])

    return (
        <div>
            <ReviewSection reviews={reviews}></ReviewSection>
        </div>
    );
};

export default MyReviews;