import React from 'react'
import styles from './Department.module.css'
import { Link } from 'react-router-dom'
// import { SwiperSlide } from "swiper/react"

// const departments =[
//     ['Information Technologhy','babababablal'],
//     ['Information Technologhy','babababablal'],
//     ['Information Technologhy','babababablal'],
//     ['Information Technologhy','babababablal'],
//     ['Information Technologhy','babababablal'],
//     ['Information Technologhy','babababablal'],
// ]
export default function DepartmentEle() {
  return (

    <div className={styles.departmentEle}>
      <h2 className={styles.departmentName}>Information Technologhy</h2>
      <div className={styles.departmentDetails}>
        <p>Whatever this department doesWhatever this department doesWhatever this department doesWhatever this department doesWhatever this department doesWhatever this department doesWhatever this department does</p>
      </div>
      <Link to="/detail?department=IT" className={styles.detailButton}>
        LEARN MORE
      </Link>
    </div>
  )
}
