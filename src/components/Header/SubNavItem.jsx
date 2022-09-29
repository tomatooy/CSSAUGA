import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'


export default function SubNavItem(props) {
    console.log(props.changeActive)
    const { category } = props
    const content = [
        [
            ['About Us', '/detail?department=Greeter'],
            ['Gallery', '/gallery'],
            ['Contact Us', '/detail/contact']
        ],
        [
            ['UGA News', 'https://news.uga.edu/'],
            ['UGA Reddit', 'https://www.reddit.com/r/UGA/'],
        ],
        []
    ]
    let subList

    if (category === 1) {

        subList = content.find((_, index) =>
            index === 1
        ).map(element => {
            return (
                <li>
                    <a className={styles.headerLink} href={element[1]} onClick={props.changeActive}>
                        {element[0]}
                    </a>
                </li>
            )
        })

    }
    else {

        subList = content.find((_, index) =>
            index === category
        ).map(element => {
            return (
                <li>
                    <Link className={styles.headerLink} to={element[1]} onClick={props.changeActive}>
                        {element[0]}
                    </Link>
                </li>
            )
        })
    }
    return <ul className={styles.subList}>{subList}</ul>;
}
