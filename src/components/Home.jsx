import React from 'react'
import Swiper from './Swiper'
import Social from './Social'
import Departments from './Departments'
import Events from './Events';
import UGAfooter from './UGAfooer';
import About from './About';

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
