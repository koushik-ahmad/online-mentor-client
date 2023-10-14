import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Home/Card';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
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
    );
};

export default Services;