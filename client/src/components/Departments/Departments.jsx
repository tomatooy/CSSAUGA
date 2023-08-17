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
    ['Advertising','宣传部', 'Responsible for event promotion and manage social media on different platforms','负责活动推广及各平台社交媒体管理',],
    ['Information Technologhy','信息技术', 'Provide technical assitance for events and other deparments and internal informations management','为活动及其他部门及内部信息管理提供技术支持'],
    ['Plan and Administration', '策划管理部','Core department of CSSA, responsible for major events from planning to hosting','CSSA核心部门，负责重大活动的策划与主办'],
    ['Public Relationships', '外联部','Primary job is to asscoiate with merchants and companies to set up partnership and sponsorship for events','主要工作是与商家和公司建立合作伙伴关系并赞助活动'],
    ['Treasure(TR)', '财务部','Treasurers are responsible for approving all student organization financial transactions.','CSSA的经济枢纽，掌控着CSSA平时所有活动的经济来源。'],
    
  ]

export default function Departments() {
    const slides = departments.map(department => {
        return(
          <SwiperSlide className={styles.departmentSlide}>
            <div className={styles.departmentEle}>
            <h2 className={styles.departmentName}>{department[0]}<br/><span>{department[1]}</span></h2>

            <div className={styles.departmentDetails}>
              <p>{department[2]} <br/>{department[3]}</p>

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
