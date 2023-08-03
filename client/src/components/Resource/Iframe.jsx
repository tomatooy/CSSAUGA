import React,{useState} from 'react'
import styles from './Resource.module.css'


export default function Frame() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600)


    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    window.addEventListener('resize', handleResize);
    const info = isMobile ? (
        <div className={styles.resourceWrapper}>
        <div className={styles.resourceHeader}>New Student Handbook</div>
        <h1>Mobile users please download the pdf to view</h1>
        <br></br>
        <a href='https://drive.google.com/u/1/uc?id=1BxfGh16fSAJl2Vs_jgnrsxTrFJQifdft&export=download' className={styles.downloadButton}>DOWNLOAD PDF</a>
        </div>): 
        (
        <div className={styles.resourceWrapper}>
        <div className={styles.resourceHeader}>New Student Handbook</div>
        <a href='https://drive.google.com/u/1/uc?id=1BxfGh16fSAJl2Vs_jgnrsxTrFJQifdft&export=download' className={styles.downloadButton}>DOWNLOAD PDF</a>
        <div className={styles.iframe}>
            <iframe src="https://drive.google.com/u/1/uc?id=1BxfGh16fSAJl2Vs_jgnrsxTrFJQifdft&export=view#view=Fit" title='guidepdf'></iframe>
        </div>
        </div>)

    return info
    

   
}
