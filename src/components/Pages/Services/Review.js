import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/AuthContext';

const Review = ({ rv }) => {
    const { user } = useContext(UserContext);
    const { _id, serviceId, img, name, email, displayName, photoURL, review } = rv;
    console.log(review);



    return (
        <div className="pt-3">
            <div className="flex gap-4">
                <div className="flex-none">
                    <img alt="profile" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/cFbh1q5/avatar.jpg'} className="mx-auto object-cover rounded-full border-2 border-success h-16 w-16 " />
                </div>
                <div className="w-5/6">
                    <h2 className="text-lg font-semibold">{displayName}</h2>
                    <div className='flex gap-1 text-xs py-1 text-yellow-400'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p className="text-sm ">Review: {review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review; 