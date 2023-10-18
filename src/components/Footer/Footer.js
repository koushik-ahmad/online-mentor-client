import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="w-full text-slate-500">
                <div className="border-t border-slate-200 bg-slate-50 pt-16 pb-8 text-sm">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <div
                                className="col-span-4 md:col-span-8 lg:col-span-4"
                                aria-labelledby="footer-header"
                            >
                                <Link
                                    id="WindUI-5-logo"
                                    aria-label="WindUI logo"
                                    aria-current="page"
                                    className="mb-6 flex items-center gap-2 whitespace-nowrap text-lg font-medium leading-6 text-slate-700 focus:outline-none"
                                    to='/'
                                >
                                    <img className='w-20' src="https://i.ibb.co/JrJgHGD/mentor.png" alt="" />
                                    <h2>Online Mentor</h2>
                                </Link>
                                <p>
                                    Our online courses are built in partnership with technology leaders and are relevant to industry needs.
                                    Upon completing a Online course, you’ll receive a verified completion certificate recognized by industry leaders.
                                </p>
                            </div>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-2"
                                aria-labelledby="footer-product-5-logo"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-slate-700"
                                    id="footer-product-5-logo"
                                >
                                    Product
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Customers
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Why us?
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-2"
                                aria-labelledby="footer-docs-5-logo"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-slate-700"
                                    id="footer-docs-5-logo"
                                >
                                    Docs & Help
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Documentation
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Training
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            System status
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            FAQ's
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Help Center
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-2"
                                aria-labelledby="footer-about-5-logo"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-slate-700"
                                    id="footer-about-5-logo"
                                >
                                    About us
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Leadership
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Events
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                className="col-span-2 md:col-span-4 lg:col-span-2"
                                aria-labelledby="footer-get-in-touch-5-logo"
                            >
                                <h3
                                    className="mb-6 text-base font-medium text-slate-700"
                                    id="footer-get-in-touch-5-logo"
                                >
                                    Get in touch
                                </h3>
                                <ul>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Support
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Partners
                                        </Link>
                                    </li>
                                    <li className="mb-2 leading-6">
                                        <Link
                                            to='/'
                                            className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                        >
                                            Join research
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <hr />
                        <div className='pt-5'>
                            <p className='flex items-center justify-center text-md font-serif gap-1'>
                                <FaRegCopyright />
                                Copyright 2023. <span className='text-emerald-600 font-semibold'>Online Mentor.</span> All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;