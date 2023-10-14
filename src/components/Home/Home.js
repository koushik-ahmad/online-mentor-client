import React from 'react';
import Slider from './Slider';
import Instructor from './Instructor';
import Message from './Message';
import ServiceSection from './ServiceSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ServiceSection></ServiceSection>
            <Instructor></Instructor>
            <Message></Message>
        </div>
    );
};

export default Home;