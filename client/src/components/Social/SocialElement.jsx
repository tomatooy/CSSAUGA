import React from 'react'
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import {AiFillWechat} from "react-icons/ai"
import styles from './Social.module.css'

const listElement = [
[<BsInstagram style={{margin:"auto",display:'block'}} />, 'Instagram', '@ugacssa','https://www.instagram.com/ugacssa/'], 
[<BsFacebook style={{margin:"auto",display:'block'}} />, 'FaceBook', '@cssa.uga','https://ne-np.facebook.com/cssa.uga'], 
[<BsLinkedin style={{margin:"auto",display:'block'}} />, 'Linkedin', 'CSSA','https://www.linkedin.com/company/chinese-student-scholar-association/about/'], 
[<AiFillWechat style={{margin:"auto",display:'block'}} />, 'WeChat', 'WeChat ID: UGACSSA','https://wx.qq.com/']
]
export default function SocialElement() {

    const list = listElement.map((element) => {
        return (
            <li className={styles.socialElement}>
                <div className={styles.liContainer}>
                    <a href={element[3]} className={styles.iconLink}>
                        {element[0]}
                    </a>
                    <div className={styles.socialText}>
                        <span className={styles.footerBold}>{element[1]}</span>
                        <br></br>
                        <span className={styles.grayText}>{element[2]}</span>
                    </div>
                </div>
            </li>
        )
    })
    return list

}