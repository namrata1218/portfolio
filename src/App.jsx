import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Namrata from "./Namrata"
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Aos from "aos";
import "aos/dist/aos.css"


const App=()=>{
    useEffect(()=>{
        Aos.init();
    },[]);
   
    return (<>

        <Navbar/>
        < div className="container">
            <Home/>
            
            <Skills/>
           <Namrata/>
            <Project></Project>
            <Contact/>
            </div>
        
        </>
    )
}
export default App;