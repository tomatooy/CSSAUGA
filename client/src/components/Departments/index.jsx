import React from 'react'
import styles from './Department.module.css'
import Departments from './Departments'
export default function index() {
    return (

        <div className={styles.swiperWrapper}>
            <Departments />
        </div>

    )
}
