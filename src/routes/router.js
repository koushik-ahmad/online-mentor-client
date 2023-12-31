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
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../components/Pages/ErrorPage/ErrorPage';
import Service from '../components/Pages/Services/Service';
import UpdateReview from '../components/Pages/Reviews/UpdateReview';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/service/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://online-mentor-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://online-mentor-server.vercel.app/review/${params.id}`)
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