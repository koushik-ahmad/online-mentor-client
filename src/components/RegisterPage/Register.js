import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { user, createUser, updateName, googleSignIn } = useContext(UserContext);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState({});
    useTitle('Register');
    
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // password validation 
        if (password.length < 6) {
            setError('Password should be 6 character or more');
            return;
        }

        // createUser
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Register success');

                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('online-token', data.token);
                        navigate('/');
                    });

                // name update 
                updateName(name)
                    .then(() => {
                        toast.success('Name updated');
                        form.reset();
                    })
                    .catch(error => {
                        console.error(error);
                        toast.error(error.message);
                    });
                
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            });
    };

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('online-token', data.token);
                        navigate('/');
                    });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            });
    };



    return (
        <div className='py-10'>
            <div className="w-full mx-auto border-2 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name">Full Name </label>
                        <input type="name" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 border-2 rounded-md " required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email">Email </label>
                        <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 border-2 rounded-md " required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 border-2 rounded-md " required />
                    </div>
                    <div className='text-red-600'>
                        {error}
                    </div>
                    <button className="btn btn-primary block w-full p-3 text-center rounded-md ">Register</button>
                </form>
                <div className="text-center">
                    <p className="px-3 text-lg font-semibold">Login with </p>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-x-3 py-2.5 border border-black rounded-3xl hover:bg-gray-50 duration-150 active:bg-gray-100">
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Continue with Google
                    </button>
                </div>
                <p className="text-center sm:px-6 pt-4">Don't have an account?
                    <Link to='/login' className="underline"> Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;