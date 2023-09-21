import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../components/Home/Home';
import Register from '../components/RegisterPage/Register';
import Login from '../components/RegisterPage/Login';
import Blog from '../components/Pages/Blog/Blog';
import Services from '../components/Pages/Services/Services';
import Reviews from '../components/Pages/Reviews/Reviews';
import AddService from '../components/Pages/AddService/AddService';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/addservice',
                element: <AddService></AddService>,
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
]);