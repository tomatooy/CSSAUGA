import React from 'react'
import styles from './Header.module.css'
import SubNavItem from './SubNavItem'


const elements = ['UGACSSA', 'UGACommunity', 'Sponsors']

export default function NavItem() {

    const list = elements.map((element, index) => {
        return (
            <li className={styles.navItem}>
               {element}
                <SubNavItem category={index} />
            </li>)
    })
    return list
}
