import React from 'react';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {IoMdMail} from 'react-icons/io';
import {AiFillFacebook} from 'react-icons/ai';

const Footer = () =>{
    return(
        <footer>
            <div className="footer_wrapper side_offset">
                <div className="footer_contacts">
                    <p><FaPhoneSquareAlt size="30px"/> 066-754-863-7</p>
                    <p><IoMdMail size="30px"/> email.email@gmail.com</p>
                </div>
                <div className="footer_links">
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=R0d6dZWp8GQ" className="footer_link_wrapper">
                        <AiFillFacebook/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=R0d6dZWp8GQ" className="footer_link_wrapper">
                        <AiFillFacebook/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=R0d6dZWp8GQ" className="footer_link_wrapper">
                        <AiFillFacebook/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=R0d6dZWp8GQ" className="footer_link_wrapper">
                        <AiFillFacebook/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;