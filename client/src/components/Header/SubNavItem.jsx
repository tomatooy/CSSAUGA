import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


export default function SubNavItem(props) {
    const{t} = useTranslation()
    const { category } = props
    const content = [
        [
            ['about_us', '/detail?department=Greeter'],
            ['gallery', '/gallery'],
            ['contact_us', '/detail/contact']
        ],
        [
            ['UGANews', 'https://news.uga.edu/'],
            ['UGAReddit', 'https://www.reddit.com/r/UGA/'],
            ["MyUGAPortal","https://my.uga.edu/htmlportal/"]
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
                        {t(element[0])}
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
                        {t(element[0])}
                    </Link>
                </li>
            )
        })
    }
    return <ul className={styles.subList}>{subList}</ul>;
}
