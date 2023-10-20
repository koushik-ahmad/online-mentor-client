import React from 'react';
import img1 from '../../assets/instructor/img1.jpg'
import img2 from '../../assets/instructor/img2.jpg'
import img3 from '../../assets/instructor/img3.jpg'

const Instructor = () => {
    return (
        <div className='pt-5'>
            <h2 className='text-3xl text-center font-bold text-success pb-1'>Our Instructor</h2>
            <p className='lg:w-2/5 md:w-2/3 w-full px-6 mx-auto text-center'>Being an online class instructor involves teaching and facilitating learning in a virtual or remote environment. Just like your physical classroom.</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-10'>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl border-2 pt-8">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h3 className="text-xl font-medium text-success">
                            Nichole Jones
                        </h3>
                        <p className=" text-slate-400">Junior Developer</p>
                    </div>
                </div>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl border-2 pt-8">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h3 className="text-xl font-medium text-success">
                            Nichole Jones
                        </h3>
                        <p className=" text-slate-400">Senior Developer</p>
                    </div>
                </div>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl border-2 pt-8">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h3 className="text-xl font-medium text-success">
                            Nichole Jones
                        </h3>
                        <p className=" text-slate-400">Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;