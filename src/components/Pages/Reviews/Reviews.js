import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { UserContext } from '../../../contexts/AuthContext';
import { useLoaderData } from 'react-router-dom';
import ReviewsCard from './ReviewsCard';

const Reviews = ({ rv }) => {
    const review = useLoaderData();
    const { user } = useContext(UserContext);
    console.log(review);

    return (
        <div className='py-5'>
            {
                review.map(rvs => <ReviewsCard
                    key={rvs._id}
                    rvs={rvs}
                ></ReviewsCard>)
            }
        </div>
    );
};

export default Reviews;