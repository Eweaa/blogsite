import React from 'react';
import FooterCSS from './Footer.module.css';

const Footer = () => (
    <footer className={FooterCSS.Footer}>
        <div style={{'display':'flex'}}>
            <div style={{'display':'flex','flexDirection':'column','width':'50%'}}>
                <div className='p-4'>
                    <h1>The Blog</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptatum necessitatibus, repellat quas illum nihil debitis blanditiis incidunt praesentium qui!</p>
                </div>
                <div className={[FooterCSS.Links1,'p-4'].join(' ')}>
                    <div>
                        <h3>Company</h3>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                    <div>
                        <h3>Social</h3>
                        <a href="#">Twitter</a>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
                </div>
            <div className={[FooterCSS.email,'p-4'].join(' ')}>
                <h2>Report An issue</h2>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div className={[FooterCSS.Links2,'p-2'].join(' ')}>
        <p>	&copy; all copyrights reserved Helmy & Eweaa</p>
        <ul>
            <li className='mx-2'><a href="#">Support</a></li><span>|</span>
            <li className='mx-2'><a href="#">Privacy Policy</a></li><span>|</span>
            <li className='mx-2'><a href="#">Terms Of Use</a></li><span>|</span>
            <li className='mx-2'><a href="#">Cookie Policy</a></li>
        </ul>
        </div>
    </footer>
);

export default Footer