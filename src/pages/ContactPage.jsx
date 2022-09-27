import React from 'react'
import Social from '../components/Social'
import ResponsiveNav from '../components/Detail/Offcanvas'
import './contactPage.css'
import styles from '../components/Detail/Detail.module.css'
export default function ContactPage() {
    return (

        <div className={styles.detailMainSocial}>
            <div className='wrapper'>
            <Social className='socialMain'/>
            </div>
            <ResponsiveNav />
        </div>
    )
}
