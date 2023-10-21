import React from 'react';
import useTitle from '../../../hooks/useTitle';


const AddService = () => {

    useTitle('Add Service');

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.serviceName.value;
        const price = form.price.value;
        const img = form.image.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const details = { name, img, rating, price, description }


        fetch('https://online-mentor-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service added successfully');
                    form.reset();
                }
            })

        // console.log(details);
    }



    return (
        <div className='pb-10 px-10'>
            <h2 className='text-xl text-center text-success font-semibold py-5'>Add Latest Service</h2>
            <section className="px-6 dark:bg-gray-800 dark:text-gray-50">
                <form onSubmit={handleAddService} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 px-6 rounded-md dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Online Course</p>
                            <p className="text-sm">We believe that everyone should have access to high-quality education.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="serviceName" className="text-sm ">Service Name:</label>
                                <input id="serviceName" type="text" placeholder="Enter service name" className="w-full rounded-md" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="price" className="text-sm">Price:</label>
                                <input id="price" type="text" placeholder="Enter price" className="w-full rounded-md" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="image" className="text-sm ">Image:</label>
                                <input id="image" type="text" placeholder="Enter image link" className="w-full rounded-md" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="rating" className="text-sm">Rating:</label>
                                <input id="rating" type="text" placeholder="Enter rating" className="w-full rounded-md" required />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="text-sm">Description: </label>
                                <textarea id="description" placeholder="Enter description" className="w-full rounded-md" required ></textarea>
                            </div>
                            <div className="col-span-full">
                                <div className="flex items-center ">
                                    <button className="btn btn-success hover:bg-green-300">Add Service</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddService;