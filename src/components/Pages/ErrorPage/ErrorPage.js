import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl mb-4">Sorry, we couldn't find this page.</p>
                    <p className='text-xl font-thin mb-4'>Please try again </p>
                    <Link to='/' className="btn btn-outline btn-primary font-semibold">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;   