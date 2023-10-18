import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthContext';


const Header = () => {
    const { user, logOut } = useContext(UserContext);
    const [isToggleOpen, setIsToggleOpen] = useState(false)

    return (
        <div>
            <>
                {/*<!-- Component: Navbar with CTA --> */}
                <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-slate-50 shadow-md shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                    <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                        <nav
                            aria-label="main navigation"
                            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                            role="navigation"
                        >
                            {/* <!-- Brand logo --> */}
                            <Link
                                id="WindUI"
                                aria-label="WindUI logo"
                                aria-current="page"
                                className="flex items-center whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                                to='/'
                            >
                                <img className='w-20' src="https://i.ibb.co/JrJgHGD/mentor.png" alt="" />
                                <h2 >Online Mentor</h2>
                            </Link>

                            {/* <!-- Mobile trigger --> */}
                            <button
                                className={`relative order-10 block h-10 w-10 self-center lg:hidden
                                ${isToggleOpen
                                        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                        : ""
                                    }
                                `}
                                onClick={() => setIsToggleOpen(!isToggleOpen)}
                                aria-expanded={isToggleOpen ? "true" : "false"}
                                aria-label="Toggle navigation"
                            >
                                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                    <span
                                        aria-hidden="true"
                                        className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                    ></span>
                                </div>
                            </button>
                            {/*      <!-- Navigation links --> */}
                            <ul
                                role="menubar"
                                aria-label="Select page"
                                className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden gap-5 overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 
                                    ${isToggleOpen
                                        ? "visible opacity-100 backdrop-blur-sm"
                                        : "invisible opacity-0"
                                    }
                                `}
                            >
                                <li role="none" className="flex items-stretch">
                                    <Link
                                        to='/home'
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className="flex items-center lg:px-2 py-4 transition-colors duration-300 hover:text-emerald-500 "
                                    >
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li role="none" className="flex items-stretch">
                                    <Link
                                        to='/services'
                                        role="menuitem"
                                        aria-current="page"
                                        aria-haspopup="false"
                                        className="flex items-center lg:px-2 py-4 transition-colors duration-300 hover:text-emerald-600 "
                                    >
                                        <span>Services</span>
                                    </Link>
                                </li>
                                {
                                    user?.email ?
                                        <>
                                            <li role="none" className="flex items-stretch">
                                                <Link
                                                    to='/addservice'
                                                    role="menuitem"
                                                    aria-haspopup="false"
                                                    className="flex items-center lg:px-2 py-4 transition-colors duration-300 hover:text-emerald-500 "
                                                >
                                                    <span>Add Service</span>
                                                </Link>
                                            </li>
                                            <li role="none" className="flex items-stretch">
                                                <Link
                                                    to='/reviews'
                                                    role="menuitem"
                                                    aria-haspopup="false"
                                                    className="flex items-center lg:px-2 py-4 transition-colors duration-300 hover:text-emerald-500 "
                                                >
                                                    <span>My Reviews</span>
                                                </Link>
                                            </li>
                                        </>
                                        :
                                        ' '
                                }

                                <li role="none" className="flex items-stretch">
                                    <Link
                                        to='/blog'
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 pr-5"
                                    >
                                        <span>Blog</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0 gap-2">
                                {
                                    user?.email ?
                                        <>
                                            <button onClick={logOut} className='btn btn-sm btn-success'>
                                                <span>logOut</span>
                                            </button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'>
                                                <button className='btn btn-sm btn-success hidden lg:flex'>
                                                    <span>Login</span>
                                                </button>
                                            </Link>
                                            <Link to='/register'>
                                                <button className='btn btn-sm btn-success'>
                                                    <span>Register</span>
                                                </button>
                                            </Link>
                                        </>
                                }
                            </div>
                        </nav>
                    </div>
                </header>
                {/*<!-- End Navbar with CTA --> */}
            </>
        </div>
    );
};

export default Header;