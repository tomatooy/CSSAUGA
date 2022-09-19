import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'


export default function SubNavItem(props) {
    const { category } = props
    const content = [
        [
            ['About Us', '/detail?department=Greeter'],
            ['Gallery','/detail?page=gallery'], 
            ['Contact Us','']
        ],
        [
            ['Athens News',''], 
            ['Bulldog News',''], 
            ['Community','']
        ],
        []
    ]
    const subList = content.find((_, index) =>
        index === category
    ).map(element => {
        return (
            <li>
                <Link className={styles.headerLink} to={element[1]} >
                    {element[0]}
                </Link>
            </li>)
    })
    return <ul className={styles.subList}>{subList}</ul>;
}
