import React from 'react';
import BackdropCSS from './Backdrop.module.css'

const Backdrop = (props) => (
    props.show ? <div className={BackdropCSS.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop