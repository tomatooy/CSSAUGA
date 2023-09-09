import React from 'react'
import styles from './Detail.module.css'
import { useLocation } from 'react-router-dom';
import { Departments } from './DetailData'
import ResponsiveNav from './Offcanvas';
import { useTranslation } from 'react-i18next';


export default function DetailDisplay() {
    const {t} = useTranslation()
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
                        return (<><p>{t(paragraph)}</p><br/></>)
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
