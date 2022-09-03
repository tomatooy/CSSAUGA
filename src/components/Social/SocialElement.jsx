import React from 'react'
import { BsInstagram, BsFacebook, BsEnvelope, BsLinkedin } from "react-icons/bs";
import styles from './Social.module.css'

const listElement = [[<BsInstagram style={{margin:"auto",display:'block'}} />, 'Instagram', '@ugacssa'], [<BsFacebook style={{margin:"auto",display:'block'}} />, 'FaceBook', '@cssa.uga'], [<BsLinkedin style={{margin:"auto",display:'block'}} />, 'Linkedin', 'CSSA'], [<BsEnvelope style={{margin:"auto",display:'block'}} />, 'Email', 'china@uga.edu']]
export default function SocialElement() {

    const list = listElement.map((element) => {
        return (
            <li className={styles.socialElement}>
                <div className={styles.liContainer}>
                    <a href='..' className={styles.iconLink}>
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