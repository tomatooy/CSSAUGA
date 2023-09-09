import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import styles from './Department.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";



const departments = [
    ['AD','AD_b'],['IT','IT_b'],['PA','PA_b'],['PR','PR_b'],['TR','TR_b']
]

export default function Departments() {
    const { t } = useTranslation();
    const slides = departments.map(department => {
        return(
          <SwiperSlide className={styles.departmentSlide}>
            <div className={styles.departmentEle}>
            <h2 className={styles.departmentName}>{t(department[0])}</h2>

            <div className={styles.departmentDetails}>
             <p>{t(department[1])}</p>

            </div>
            <Link to={`/detail?department=${department[0]}`} className={styles.detailButton}>
              {t('learn_more')}
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
                <h1 className={styles.bannerH1}>{t('our_structure')}</h1>
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
