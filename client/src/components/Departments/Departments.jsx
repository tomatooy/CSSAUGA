import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import styles from './Department.module.css'
import { Link } from 'react-router-dom'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


const departments = [
    ['Advertising(AD)', 'Responsible for event promotion and manage social media on different platforms'],
    ['Information Technologhy(IT)', 'Provide technical assitance for events and other deparments and internal informations management'],
    ['Plan and Administration(PA)', 'Core department of CSSA, responsible for major events from planning to hosting'],
    ['Public Relationships(PR)', 'Primary job is to asscoiate with merchants and companies to set up partnership and sponsorship for events'],
    ['Treasure(TR)', 'Treasurers are responsible for approving all student organization financial transactions. Treasurers are expected to maintain records tracking every income and expense financial transaction.'],
    ['Information Technologhy', 'babababablal'],
  ]

export default function Departments() {
    const slides = departments.map(department => {
        return(
          <SwiperSlide className={styles.departmentSlide}>
            <div className={styles.departmentEle}>
            <h2 className={styles.departmentName}>{department[0]}</h2>
            <div className={styles.departmentDetails}>
              <p>{department[1]}</p>
            </div>
            <Link to="/detail?department=IT" className={styles.detailButton}>
              LEARN MORE
            </Link>
          </div>
          </SwiperSlide>)
    })

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
                    {slides}
                </Swiper>
            </div>
        </>
    )
}
