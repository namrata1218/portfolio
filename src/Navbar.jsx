import React, {  useState} from 'react'

const Navbar = () => {
  const[show, setShow]=useState(false);
  
  return (<>
    <div className="container nav_bar"
    data-aos="fade-down"
    data-aos-duration="1000">
        <div className='left '>
           <h3 > Portfolio</h3>
            </div>
        <div className=  {show ? "  mobile-nav_items":"nav_items right nav-right"} >
            <a className='nav_items' href="#home">Home</a>
            <a className='nav_items' href="#experience">Experience</a>
              <a className='nav_items' href="#skills">Skills</a>
            <a className='nav_items' href="#project">Project</a>
            <a className='nav_items' href="#contact">Contact</a>
            <button onClick={()=>setShow(!show)} className='nav-btn'>
            <i  className="ri-bar-chart-horizontal-line"></i>
            </button>
            </div>
     
    </div>
    </>)
  }

export default Navbar;
