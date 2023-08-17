import { Navigation } from 'swiper';
import styles from './Swiper.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './SwiperSlide';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperMain() {
  const [slideData, changeSlide] = useState()
  useEffect(() => {
      fetch()
  }, [])
  return (
    <Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper} calculateHeight={true}>
      {
          slideData?(
          slideData.map((slide)=>{
            return <SwiperSlide><Slide data={slide}/></SwiperSlide>
          })):(<></>)
        }
    </Swiper>

  );

  async function fetch() {
    try {
      const res = await axios.get("http://localhost:5001/post/getBanner")
      changeSlide(res.data)
     } catch (err) { 
      console.log(err.message)
     }
  }

};