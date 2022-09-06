import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import DepartmentEle from './DepartmentEle';
import styles from './Department.module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
export default function Departments() {
    return (
        <>
            <div className={styles.departmentBanner}>
                <h1 className={styles.bannerH1}>OUR STRUCTURE</h1>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={40}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={styles.departmentSwiper}
                >
                    <SwiperSlide className={styles.departmentSlide}><DepartmentEle/></SwiperSlide>
                    <SwiperSlide className={styles.departmentSlide}><DepartmentEle/></SwiperSlide>
                    <SwiperSlide className={styles.departmentSlide}><DepartmentEle/></SwiperSlide>
                    <SwiperSlide><DepartmentEle/></SwiperSlide>
                    <SwiperSlide><DepartmentEle/></SwiperSlide>
                    <SwiperSlide><DepartmentEle/></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
