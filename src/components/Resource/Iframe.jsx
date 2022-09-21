import React from 'react'
import styles from './Resource.module.css'


export default function Frame() {
    return (
        <div className={styles.resourceWrapper}>
            <div className={styles.resourceHeader}>New Student Handbook</div>
            <a href='https://drive.google.com/u/1/uc?id=1BxfGh16fSAJl2Vs_jgnrsxTrFJQifdft&export=download' className={styles.downloadButton}>DOWNLOAD PDF</a>
            <div className={styles.iframe}>
                <iframe src="https://drive.google.com/u/1/uc?id=1BxfGh16fSAJl2Vs_jgnrsxTrFJQifdft&export=view#view=Fit" title='guidepdf'></iframe>
            </div>
        </div>
    )
}
