import { Navigation } from 'swiper';
import styles from './Swiper.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './SwiperSlide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperMain() {
  return (
      <Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper} calculateHeight={true}>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
      </Swiper>
   
  );
};