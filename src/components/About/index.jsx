import React from 'react'
import styles from './About.module.css'


export default function About() {
    return (
        <div className='bannerCSSA'>
            
            <h1 className={styles.bannerH1}>WHAT IS<span style={{ color: '#BA0C2F' }}> CSSA.</span></h1>
            <div className={styles.main}>
                <div className={styles.bannerText}>
                    <div className={styles.textWrapper}>
                        <div className={styles.borderWrapper}>
                            <p>
                                CSSA mainly consists of Chinese students and scholars from different areas in China. We tried to make all Chinese students united and establish more friendships. Many annual festivals will also be celebrated by some large activities that we will organize.
                            </p>
                            <div className={styles.buttonWrapper}>
                            <button className={styles.joinUs} type='button'>JOIN US</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.bannerPic}>
                    <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/69648819_1288308117999805_8347645599817924608_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=x9wtKXVC_kIAX9zpFxl&_nc_ht=scontent-atl3-1.xx&oh=00_AT9PqDhVnxU3tiKNASluMiIseBe4YP6GfBtDZqhBIf87IA&oe=62F58D91" alt="" />
                </div>
            </div>
        </div>
    )
}
