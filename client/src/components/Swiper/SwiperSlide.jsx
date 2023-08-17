import React from 'react'
import styles from './Swiper.module.css'
import { Link } from 'react-router-dom'
export default function Slide(props) {
    const linkStyle = {
        "text-decoration": "none",
        "color": "black"
    }
    const { data } = props
    const { coverUrl, _id, title, header } = data
    return (
        <Link to={`/post/${_id}`} style={linkStyle}>
            <div className={styles.swiperSlide}>
                <img className={styles.swiperImg} src={coverUrl} alt="x" />
                <div className={styles.slideCaption}>
                    <div className={styles.textHolder}>
                        <h1>{title}</h1>
                        <h4>{header}</h4>
                    </div>
                </div>
            </div>
        </Link>
    )
}
