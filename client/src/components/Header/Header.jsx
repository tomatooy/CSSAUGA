import React, { useState } from 'react'
import NavItem from './NavItem'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
export default function Header() {
    const [navActive, changeActive] = useState(false);
    const mobileRedirect = () =>{
        changeActive(false);
        window.scrollTo(0, 0);
    }
    return (
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img className={styles.logo} src="https://cdn.discordapp.com/attachments/940402118953668642/986687777531899944/IMG_4370.jpg" alt="UGACSSALogo" />
                    </Link>
                    <span href="." className={styles.toggle} onClick={() => { changeActive(!navActive)}}>
                        <i class="fa fa-bars"></i>
                    </span>
                </div>
                <ul className={`${styles.navList} ${navActive?styles.navActive:styles.navNotActive}`}>
                    <NavItem active={navActive} changeActive={mobileRedirect} />
                </ul>

            </header>
        </div>
    )
}
