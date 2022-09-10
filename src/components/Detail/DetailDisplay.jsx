import React,{useState, useEffect} from 'react'
import styles from './Detail.module.css'
import { useLocation } from 'react-router-dom';
import { Departments } from './DetailData'
import OffcanvasButton from './Offcanvas';
import ExpandNav from './ExpandNav'

export default function DetailDisplay() {
    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    const [isMobile, setIsMobile] = useState(window.innerWidth<400)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const expandMenu = isMobile ? <OffcanvasButton/>:<ExpandNav/>


    const departmentID = useQuery().get('department');
    const query = Departments.find(element => element.ID === departmentID)
    const result = query ? (
        (<div className={styles.detailMain}>
            <div className={styles.display}>
                <div className={styles.headLine}>
                    <h2>{query.name}</h2>
                </div>
                <p>
                    {query.description}
                </p>
            </div>
            {expandMenu}
        </div>
        )
    ) :
        (<div className={styles.display}>
            <div className={styles.headLine}>
                <h2>Default</h2>
            </div>
            <p>
                Default
            </p>
            {expandMenu}
        </div>
        );

    return (
        result
    )
}
