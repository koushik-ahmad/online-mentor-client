import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl text-success font-bold'>Our Latest Service</h2>
                <p className='lg:w-2/5 md:w-2/3 w-full px-4 mx-auto pb-8'>We are committed to providing our customers with the best possible online course. We believe that everyone should have access to high-quality education.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-10'>
                {
                    services.map(service => <Card
                        key={service._id}
                        service={service}
                    ></Card>)
                }
            </div>
            <div className='text-center pb-10'>
                <Link to='/services'>
                    <button className='btn btn-success px-6'>
                        See All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceSection;