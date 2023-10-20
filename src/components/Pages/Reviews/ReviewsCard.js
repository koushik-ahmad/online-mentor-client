import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { UserContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const ReviewsCard = ({ rvs, handleDelete }) => {
    const { user } = useContext(UserContext);
    const { _id, img, displayName, photoURL, review } = rvs;

    // console.log(rvs);
    

    return (
        <div className="lg:w-2/3 md:w-2/3 w-full px-4 mx-auto py-4">
            <div className="flex gap-4 border-2 rounded py-4 pl-4">
                <div className="flex-none">
                    <img alt="profile" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/cFbh1q5/avatar.jpg'} className="mx-auto object-cover rounded-full border-2 border-success h-16 w-16 " />
                </div>
                <div className="w-5/6 ">
                    <div className='grid grid-cols-2 justify-end items-end'>
                        <div className=''>
                            <h2 className="text-lg font-semibold">{displayName}</h2>
                            <div className='flex gap-1 text-xs py-1 text-yellow-400'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div className='flex justify-end items-end gap-5'>
                            <button onClick={() => handleDelete(rvs)} className='btn bg-red-400 w-1/3'>Delete</button>
                            
                            <Link to={`/update/${rvs._id}`} className='btn bg-green-400  w-1/3'>
                                <button>Edit</button>
                            </Link>
                        </div>
                    </div>
                    <p className="text-sm ">Review: {review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;