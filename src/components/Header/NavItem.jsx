import React from 'react'
import styles from './Header.module.css'
import SubNavItem from './SubNavItem'
import { Link } from 'react-router-dom'

const elements = ['UGACSSA', 'UGACommunity', 'Resource']

export default function NavItem() {

    const list = elements.map((element, index) => {
        if (index === 2) {
            return (
                <Link to='resource' className={styles.link}>
                    <li className={styles.navItem} id={index}>
                        {element}
                        <SubNavItem category={index} />
                    </li>
                </Link>
                    )
        }
                    return (
                    <li className={styles.navItem} id={index}>
                        {element}
                        <SubNavItem category={index} />
                    </li>)
    })
    return list
}
