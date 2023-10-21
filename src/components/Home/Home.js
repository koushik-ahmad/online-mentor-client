import React from 'react';
import Slider from './Slider';
import Instructor from './Instructor';
import Message from './Message';
import ServiceSection from './ServiceSection';
import useTitle from '../../hooks/useTitle';

const Home = () => {

    useTitle('Home');

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