import React, { useState } from 'react'

const Navbar = () => {

  const [show, setShow]=useState(false);

  const handleNavbar=()=>{
    console.log(show);
    setShow(!show);

  };
  return (<>
    <div className="container nav_bar"
    data-aos="fade-down"
    data-aos-duration="1000">
        <div className='left nav-items'>
           <h3> Portfolio</h3>
            </div>
        <div className="right nav-right">
            <a className='nav_items' href="#home">Home</a>
            <a className='nav_items' href="#experience">Experience</a>
            <a className='nav_items' href="#skills">Skills</a>
            <a className='nav_items' href="#project">Project</a>
            <a className='nav_items' href="#contact">Contact</a>
            <i onClick={handleNavbar} className="ri-bar-chart-horizontal-line"></i>

            </div>
     
    </div>
    </>)
  }

export default Navbar;
