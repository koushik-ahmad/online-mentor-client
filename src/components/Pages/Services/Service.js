import { Label, Textarea } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import Review from './Review';
import { UserContext } from '../../../contexts/AuthContext';

const Service = () => {
    const { user } = useContext(UserContext);
    const service = useLoaderData();
    const [review, setReview] = useState([]);
    const { _id, img, name, price, rating, description } = service;
    // console.log(service);


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const serviceId = _id;
        const email = user?.email;
        const displayName = user?.displayName;
        const photoURL = user?.photoURL;
        const details = { serviceId, img, name, email, displayName, photoURL, review }


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review added successfully');
                    form.reset();
                }
            })

        console.log(details);
    }

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [review]);



    return (
        <div className='grid lg:grid-cols-2 p-10 gap-5'>
            <div className="overflow-hidden rounded bg-blue-50 text-slate-500 p-5 border-2">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} className="aspect-video rounded w-full" alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="p-6">
                    <h2 className='text-2xl text-blue-500 pb-2'>{name}</h2>
                    <p className='text-xl text-success pb-2'> Price: ${price}</p>
                    <p> Description: {description} </p>
                    <div className='flex items-center gap-10 pt-2'>
                        <p className='text-md'> Rating: {rating} </p>
                        <div className='flex gap-2 text-yellow-400'>
                            <FaStarHalfAlt />
                            <FaStarHalfAlt />
                            <FaStarHalfAlt />
                            <FaStarHalfAlt />
                            <FaStarHalfAlt />
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <h2 className='text-2xl text-blue-500 pb-2'>Review Section: {name}</h2>
                <h2 className='text-lg pb-2'>Write a review :</h2>
                <div className='flex items-center gap-5'>
                    <p className='text-success'>Your rating...</p>
                    <div className='flex gap-2 text-yellow-400'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

                <div >
                    <form onSubmit={handleReview} className='grid grid-cols-2 justify-center items-end gap-8 '>
                        <div className="max-w-md" id="textarea" >
                            <div className="mb-2 block">
                                <Label htmlFor="review" value=" " />
                            </div>
                            <Textarea id="review" placeholder="Enter your review..." required rows={4} />
                        </div>
                        {
                            user?.email ?
                                <button className='btn btn-success w-1/2'>Add review</button>
                                :
                                <button className='btn btn-success w-1/2 disabled:text-gray-400 disabled:bg-green-200' disabled >Add review</button>
                        }
                    </form>
                </div>
                {
                    review.map(rv => <Review
                        key={rv._id}
                        rv={rv}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Service;