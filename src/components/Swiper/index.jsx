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
    <div className={styles.swiperWrapper}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" calculateHeight={true}>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><img src="https://cdn.discordapp.com/attachments/940402118953668642/989613875836117032/IMG_4382.jpg" alt="x" /></SwiperSlide>
        <SwiperSlide><img src="https://media.discordapp.net/attachments/940402118953668642/989613875580272761/IMG_4383.jpg" alt="x" /></SwiperSlide>
      </Swiper>

    </div>
  );
};