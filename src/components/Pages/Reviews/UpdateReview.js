import React, { useContext, useState } from 'react';
import { UserContext } from '../../../contexts/AuthContext';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { Label, Textarea } from 'flowbite-react';
import useTitle from '../../../hooks/useTitle';

const UpdateReview = ({ rvs }) => {
    const reviewUser = useLoaderData();
    const { user } = useContext(UserContext);
    const { _id, img, displayName, name, photoURL, review } = reviewUser;

    useTitle('Update Review')

    console.log(reviewUser);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const details = { review };

        fetch(`http://localhost:5000/review/${reviewUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated')
                }
                console.log(data);
            })

    }


    return (
        <div className='pb-10'>
            <h2 className='text-2xl text-center font-semibold pt-5'>Update Review : {name} </h2>
            <div className="lg:w-2/4 md:w-2/4 mx-auto py-4">
                <div className="flex gap-4 py-4 pl-4">
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
                        </div>
                        <form onSubmit={handleUpdate} className="max-w-md" id="textarea" >
                            <div className="mb-2 block">
                                <Label htmlFor="review" value=" " />
                            </div>
                            <Textarea id="review" defaultValue={review} placeholder="Enter your review..." required rows={5} />
                            <button className='btn btn-success mt-4'>Update Review</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpdateReview;