import React from 'react'
import styles from './Header.module.css'
import SubNavItem from './SubNavItem'
import { Link } from 'react-router-dom'

const elements = ['UGACSSA', 'UGACommunity', 'Resource']

export default function NavItem(props) {

    const list = elements.map((element, index) => {
        if (index === 2) {
            return (
                <Link to='resource' className={styles.headerLink} onClick={props.changeActive}>
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
                <SubNavItem category={index} changeActive={props.changeActive} />
            </li>)
    })
    return list
}
