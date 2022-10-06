import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ExpandNav from './ExpandNav'
import styles from './Detail.module.css'
import { BsChevronDoubleLeft } from "react-icons/bs";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeNav = () =>{
    handleClose();
  }
  return (
    <>
      <button className={styles.expandButton} onClick={handleShow}><BsChevronDoubleLeft /></button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CSSAUGA</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ExpandNav closeNav={closeNav}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function ResponsiveNav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600)


    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    window.addEventListener('resize', handleResize);


  return (
    <>
      {isMobile?<OffCanvasExample placement='end' name='end'/>:<ExpandNav/>}
    </>
  )
}


