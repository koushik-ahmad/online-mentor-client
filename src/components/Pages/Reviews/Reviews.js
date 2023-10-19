import React, { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { UserContext } from '../../../contexts/AuthContext';
import { useLoaderData } from 'react-router-dom';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const review = useLoaderData([]);
    const [displayReview, setDisplayReview] = useState(review);
    const { user } = useContext(UserContext);
    // console.log(review);

    const handleDelete = review => {
        const agree = window.confirm(`Are you sure you want to deleted: ${review.name}`);

        if (agree) {
            fetch(`http://localhost:5000/review/${review._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Review deleted');
                        const remainingReview = displayReview.filter(rev => rev._id !== review._id);
                        setDisplayReview(remainingReview);
                    }

                })
        }
    }

    console.log(displayReview.length);

    return (
        <div className='py-5'>
            {
                displayReview.length > 0 ?
                    displayReview.map(rvs => <ReviewsCard
                        key={rvs._id}
                        rvs={rvs}
                        handleDelete={handleDelete}

                    ></ReviewsCard>)
                    :
                    <div className='text-2xl text-center pt-5 pb-60'>
                        <h2>No review here.</h2>
                    </div>
            }
        </div>
    );
};

export default Reviews;