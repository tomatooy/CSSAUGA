import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import DepartmentEle from './DepartmentEle';
import styles from './Department.module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
export default function Departments() {
    const [isMobile, setIsMobile] = useState(window.innerWidth<400)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    return (
        <>
            <div className={styles.departmentBanner}>
                <h1 className={styles.bannerH1}>OUR STRUCTURE</h1>
                <Swiper
                    slidesPerView={isMobile?1:3}
                    spaceBetween={40}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className={styles.departmentSwiper}
                >
                    <SwiperSlide className={styles.departmentSlide}><DepartmentEle /></SwiperSlide>
                    <SwiperSlide className={styles.departmentSlide}><DepartmentEle /></SwiperSlide>
                    <SwiperSlide className={styles.departmentSlide}><DepartmentEle /></SwiperSlide>
                    <SwiperSlide className={styles.departmentSlide}><DepartmentEle /></SwiperSlide>
                    <SwiperSlide className={styles.departmentSlide}><DepartmentEle /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
