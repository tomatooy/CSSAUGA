import React from 'react'
import styles from './Detail.module.css'
import { useLocation } from 'react-router-dom';
import { Departments } from './DetailData'
import ResponsiveNav from './Offcanvas';


export default function DetailDisplay() {
    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }


    const departmentID = useQuery().get('department');
    const query = Departments.find(element => element.ID === departmentID)
    const result = query ? (
        (<div className={styles.detailMain}>
            <div className={styles.display}>
                <div className={styles.headLine}>
                    <h2>{query.name}</h2>
                    <br/>
                </div>
                {
                    query.description.map((paragraph)=>{
                        return (<><p>{paragraph}</p><br/></>)
                    })
                }
                <img src={query.img} alt="ima" />
            </div>
            <ResponsiveNav/>
        </div>
        )
    ) :
        (<div className={styles.detailMain}>
            <div className={styles.display}>
                <div className={styles.headLine}>
                    <h2>Default</h2>
                </div>
                <p>
                    default
                </p>
            </div>
            <ResponsiveNav/>
        </div>
        );

    return (
        result
    )
}
