import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ExpandNav from './ExpandNav'
import styles from './Detail.module.css'
import { BsChevronDoubleLeft } from "react-icons/bs";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={styles.expandButton} onClick={handleShow}><BsChevronDoubleLeft /></button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CSSAUGA</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ExpandNav/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function OffcanvasButton() {
    return (
        <>
            <OffCanvasExample placement='end' name='end' />
        </>
      );
}


