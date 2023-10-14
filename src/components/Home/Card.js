import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Card = ({ service }) => {
    const { _id, name, img, rating, price, description } = service;
    // console.log(service);

    return (
        <>
            <div className="overflow-hidden rounded bg-blue-50 text-slate-500 shadow-xl shadow-gray-300 p-5 border-2 border-2 ">
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
                    <p> Description:
                        {
                            description.slice(0, 100) + '...'
                        }
                    </p>

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
                <div className="flex justify-end gap-2 p-2 pt-0">
                    <Link to={`/service/${_id}`}>
                        <button className="inline-flex items-center justify-center btn btn-success ">
                            Details Course
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Card;