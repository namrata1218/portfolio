import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Namrata from "./Namrata"
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Aos from "aos";
import "aos/dist/aos.css"
import SpinnerLoader from "./components/SpinnerLoader";



const App=()=>{
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        Aos.init();
        const timer=setTimeout(()=>{
            setLoading(false);
        },2000);
        return ()=>clearTimeout(timer)
    },[]);


    
   
    return (<>
    {loading? ( <SpinnerLoader/>):(
 <><Navbar/>
 < div className="container">
 
     <Home/>
     
     <Skills/>
    <Namrata/>
     <Project></Project>
     <Contact/>
     </div>
 </>
    )}
        
        
        </>
    )
}
export default App;