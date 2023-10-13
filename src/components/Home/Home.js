import React from 'react';
import Slider from './Slider';
import Service from './Service';
import Instructor from './Instructor';
import Message from './Message';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <Instructor></Instructor>
            <Message></Message>
        </div>
    );
};

export default Home;