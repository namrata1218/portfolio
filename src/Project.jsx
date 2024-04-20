import React from "react";
import project from "./images/data/projects.json";
import image3 from './images/dice-eyes-luck-game-705171.webp'
const Project =()=>{
    return(
        <>
        <div className="container project my-3" id="project">
            <h1>PROJECTS</h1>
            <div className="row d-flex justify-content-center align-items-center">
                {
                    project.map((data)=>(
                        <>
                        <div key={data.id} className="my-3 col-sm-6 col-md-4 col-lg-3 mx-3">
                        <div className="card bg-dark text-light" style={{width: '18rem',
                                  border:'2px solid #F8C90D',
                                  boxShadow:'5px 5px 10px 5px rgba(244, 230, 34, 0.5)'}}
                                  data-aos="flip-right"
                data-aos-duration="1000">
                        <div className="img p-3 d-flex justify-content-center align-items-center" >
                            <img src={image3} alt="..." 
                            style={{
                                width:'250px',
                                height:'200px',
                                border:'2px solid #F8C90D',
                                borderRadius:'10px'}}
                  n      />
                        </div>
  
  <div className="card-body text-center">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
    <a href={data.source} className="btn btn-warning">Code</a>
  </div>
</div>  </div></>
                    ))
                }
                </div></div></>
    )

}
export default Project;