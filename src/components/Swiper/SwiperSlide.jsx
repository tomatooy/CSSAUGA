import React from 'react'
import styles from './Swiper.module.css'
export default function Slide() {
    return (
        <div className={styles.swiperSlide}>
            <img src="https://cdn.discordapp.com/attachments/940402118953668642/989613875836117032/IMG_4382.jpg" alt="x" />
            <div className={styles.slideCaption}>
                <div className={styles.textHolder}>
                <h1>Place holder for slide header</h1>
                <h4>Place holder for slide brief description
                </h4>
                </div>
            </div>
        </div>
    )
}
