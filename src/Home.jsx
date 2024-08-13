import React, { useEffect, useRef } from 'react'
import Image from "../src/images/images.jpeg"
import pdf from "../src/pdf/Namrata_webdevelopment_resume.pdf";
import Typed from 'typed.js';

const Home = () => {
  <div id="app">
  <div id="hero">
    
  </div>
</div>
  const typedRef=useRef(null);

  useEffect(()=>{
    const options ={
      strings:["Welcome to my profile.","My name is Namrata Shakya.","I'm MERN stack developer."],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed =new Typed(typedRef.current,options)
    return ()=>{
      typed.destroy()
    }
  },[]);
  
  return (<>

    <div className='container home' id='home'>
     <div className="left" data-aos="fade-up-right"
    data-aos-duration="1000">
      <h1 ref={typedRef}> 
      </h1>
<a
 href={pdf} 
 download="AKTU Admit Card.pdf" 
 className='btn btn-outline-warning my-3'>
  Download Resume
 </a>
 </div>
 <div className="right">
     <div className='img' data-aos="fade-up-left"
    data-aos-duration="1000">
      <img src={Image} alt="me" />
      </div>
    
    </div>
   
    </div>
    </>
  )
}

export default Home;
