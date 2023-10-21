import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/AuthContext';
import ReviewsCard from './ReviewsCard';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Reviews = () => {
    const { user , logOut} = useContext(UserContext);
    const [displayReview, setDisplayReview] = useState({});

    useTitle('My Reviews');

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('online-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403){
                    return logOut();
                };
                return res.json()
            })
            .then(data => {
                // console.log('received', data);
                setDisplayReview(data)
            })
    }, [user?.email, logOut]);

    const handleDelete = review => {
        const agree = window.confirm(`Are you sure you want to deleted: ${review.name}`);

        if (agree) {
            fetch(`http://localhost:5000/review/${review._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Review deleted');
                        const remainingReview = displayReview.filter(rev => rev._id !== review._id);
                        setDisplayReview(remainingReview);
                    }

                })
        }
    }

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
                    <div className='text-center pt-5 pb-60'>
                        <h2 className='text-2xl '>No review here...</h2>
                        <p><Link className='underline text-success' to='/services'>services</Link></p>

                    </div>
            }
        </div>
    );
};

export default Reviews;