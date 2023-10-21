import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '../../Home/Card';
import './service.css'
import useTitle from '../../../hooks/useTitle';

const Services = () => {
    // const { services, count } = useLoaderData();
    const [services, setServices] = useState([]);
    useTitle('Services');

    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    const pages = Math.ceil(count / size);

    useEffect(() => {
        const url = `http://localhost:5000/services?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.services);
                // console.log(data);
            })
    }, [page, size]);

    // console.log(services);

    return (
        <>
            <div>
                <div className='text-center'>
                    <h2 className='text-2xl text-success font-bold pt-8'>Our All Services</h2>
                    {/* <p className='w-2/5 mx-auto pb-8'>We are committed to providing our customers with the best possible online course. We believe that everyone should have access to high-quality education.</p> */}
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-10 pb-20 pt-5'>
                    {
                        services.map(service => <Card
                            key={service._id}
                            service={service}
                        ></Card>)
                    }
                </div>
            </div>
            <div className='w-72 mx-auto pagination'>
                <p className='my-2'>Currently selected page: {page} & size: {size}</p>

                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page === number ? 'selected' : ' '}
                        onClick={() => setPage(number)}
                    >
                        {number + 1}
                    </button>)
                }

                <select defaultValue='6' onChange={event => setSize(event.target.value)}>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                </select>
            </div>
        </>
    );
};

export default Services;