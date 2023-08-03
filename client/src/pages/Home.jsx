import React from 'react'
import Swiper from '../components/Swiper'
import Social from '../components/Social'
import Departments from '../components/Departments'
import Events from '../components/Events';
import UGAfooter from '../components/UGAfooer';
import About from '../components/About';

export default function Home() {
    return (
        <div>
            <Swiper />
            <About />
            <Departments />
            <Events />
            <Social />
            <UGAfooter />
        </div>
    )
}
