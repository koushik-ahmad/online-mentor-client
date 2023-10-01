import React, { useEffect, useState } from 'react';
import Card from './Card';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-2xl text-success font-bold'>Our Latest Service</h2>
                <p className='w-2/5 mx-auto pb-8 font-thin'>We are committed to providing our customers with the best possible online course service experience. We believe that everyone should have access to high-quality education.</p>
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
                <button className='btn btn-success px-6'>
                    See All
                </button>
            </div>
        </div>
    );
};

export default Service;