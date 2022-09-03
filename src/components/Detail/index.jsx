import React from 'react'
import ExpandNav from './ExpandNav'
import DetailDisplay from './DetailDisplay'
import styles from './Detail.module.css'



export default function index() {

  return (
    <div>
      <div className={styles.detailMain}>
        <DetailDisplay/>
        <ExpandNav />
      </div>
    </div>
  )
}
