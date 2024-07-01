import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
const Contact=()=>{
    return(
        <>
        <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duratio="1000">
            <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/namrata-shakya-479313226/" className="items"><PiLinkedinLogoBold className="icons"/></a>
            <a  target="_blank" rel="noopener noreferrer" href="https://github.com/namrata1218" className="items"><FaGithub className="icons"/></a>
            <a  target="_blank" rel="noopener noreferrer"  href="mailto:shakyanamrata18@gmail.com" className="items"><MdMailOutline className="icons"/></a>
            <a  target="_blank" rel="noopener noreferrer" href="https://wa.me/9369203390" className="items"><FaWhatsapp className="icons"/></a>
        </div>
        </div>
        </>
    )
}
export default Contact;