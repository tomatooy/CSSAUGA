import React from 'react'
import Content from "./Text"
import RecommdList from './RecommdList'
import styles from './Post.module.css'
export default function index() {
  
  return (
    <div className={styles.detailMain} >
        <Content className={styles.display} />
        <RecommdList/>
    </div>
  )
}
