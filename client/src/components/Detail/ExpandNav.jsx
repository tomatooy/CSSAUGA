import React, { useState, useEffect } from 'react'
import styles from './Detail.module.css'
import { Link, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ExpandNav(props) {

    const [display1, changeDisplay1] = useState('inline');
    const [displaySelected, changeSelected] = useState('none');
    const {closeNav} = props;

    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const departmentID = useQuery().get('department');

    const listClick1 = () => {
        if (display1 === 'inline') {
            changeDisplay1('none')
        }
        else {
            changeDisplay1('inline')
        }
    }

    useEffect(() => changeSelected(departmentID), [departmentID])
    const { search, pathname } = useLocation();

    return (
        <div className={styles.menu} id={styles.main} >
            <ul className={styles.subMenu} id={styles.subMenu} >
                <li className={styles.link}>
                    <Link to={pathname + search} className={styles.link} onClick={() => listClick1()}>Introduction</Link>
                    <ul className={styles.menu} id={styles.subMenu} style={{ display: display1 }}>
                        <li>
                            <Link to='/detail?department=Greeter' className={`${styles.sublink} ${displaySelected === 'Greeter' ? styles.sublinkSelected : ''}` } onClick={closeNav}>What is CSSA?</Link>

                        </li>
                        <li >
                            <Link to='/detail?department=PA' className={`${styles.sublink} ${displaySelected === 'PA' ? styles.sublinkSelected : ''}`} onClick={closeNav}>PA</Link>
                        </li>
                        <li>
                            <Link to='/detail?department=IT' className={`${styles.sublink} ${displaySelected === 'IT' ? styles.sublinkSelected : ''}`} onClick={closeNav}>IT</Link>
                        </li>
                        <li>
                            <Link to='/detail?department=PR' className={`${styles.sublink} ${displaySelected === 'PR' ? styles.sublinkSelected : ''}`} onClick={closeNav}>PR</Link>
                        </li>
                        <li>
                            <Link to='/detail?department=TR' className={`${styles.sublink} ${displaySelected === 'TR' ? styles.sublinkSelected : ''}`} onClick={closeNav}>TR</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to='/detail/contact' className={`${styles.link} ${pathname ==='/detail/contact' ? styles.sublinkSelected : ''}`}>Contact Us</Link>
                </li>
                <li>
                    <Link to={pathname + search} className={styles.link}>Join Us</Link>
                </li>
                <li>
                    <Link to="/gallery" className={styles.link}>Gallery</Link>
                </li>
            </ul>
        </div>
    )
}
