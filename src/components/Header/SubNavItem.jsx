import React, { useState } from 'react'
import styles from './Header.module.css'


export default function SubNavItem(props) {
    const { category } = props
    const [content] = useState([['About Us', 'Gallery', 'Contact Us'], ['Athens News', 'Bulldog News', 'Community'], ['YummySpicy', 'What ever', 'Wings101']])
    const subList = content.find((_, index) =>
        index === category
    ).map(element => {
        return <li>{element}</li>
    })
    return <ul className={styles.subList}>{subList}</ul>;
}
