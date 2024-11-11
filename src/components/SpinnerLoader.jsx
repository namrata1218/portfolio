import React, { useEffect, useState } from 'react'
import "./Spinner.css";

const SpinnerLoader = () => {
const [text, setText]=useState('');
const [showImg, setShowImg]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setShowImg(false)
            setText(false)
        },3000)
    },[])
  return (
    <>
    <div className='spinner'>{
        showImg ?(
            <div className='spinner-container'>
            <img src="./images/Spinner@1x-1.0s-200px-200px.svg" alt="" />
            
            </div>
            
          ):(
            <h3>{text}</h3>
          )}
      
      </div>
      </>
    
  )
}

export default SpinnerLoader
