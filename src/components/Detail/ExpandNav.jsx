import React, { useState, useEffect } from 'react'
import styles from './Detail.module.css'
import { Link, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ExpandNav({ to }) {

    const [display1, changeDisplay1] = useState('inline');
    const [displaySelected, changeSelected] = useState('none');


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
    console.log(search)

    return (
        <div className={styles.menu}>
            <ul className={styles.subMenu} id={styles.subMenu} >
                <li className={styles.link}>
                    <Link to={pathname + search} className={styles.link} onClick={() => listClick1()}>Deparments</Link>
                    <ul className={styles.menu} id={styles.subMenu} style={{ display: display1 }}>
                        <li>
                            <Link to='/detail?department=Greeter' className={`${styles.sublink} ${displaySelected === 'Greeter' ? styles.sublinkSelected : ''}`}>Greeter From President</Link>

                        </li>
                        <li>
                            <Link to='/detail?department=PRES' className={`${styles.sublink} ${displaySelected === 'PRES' ? styles.sublinkSelected : ''}`}>President/Vice-President</Link>
                        </li>
                        <li >
                            <Link to='/detail?department=PA' className={`${styles.sublink} ${displaySelected === 'PA' ? styles.sublinkSelected : ''}`}>PA</Link>
                        </li>
                        <li>
                            <Link to='/detail?department=IT' className={`${styles.sublink} ${displaySelected === 'IT' ? styles.sublinkSelected : ''}`}>IT</Link>
                        </li>
                        <li>
                            <Link to='/detail?department=PR' className={`${styles.sublink} ${displaySelected === 'PR' ? styles.sublinkSelected : ''}`}>PR</Link>
                        </li>
                        <li>
                            <Link to='/detail?department=TR' className={`${styles.sublink} ${displaySelected === 'TR' ? styles.sublinkSelected : ''}`}>TR</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to='contact' className={styles.link}>Contact Us</Link>
                </li>
                <li>
                    <Link to={pathname + search} className={styles.link}>Join Us</Link>
                </li>
                <li>
                    <Link to={pathname + search} className={styles.link}>Gallery</Link>
                </li>
            </ul>
        </div>
    )
}
