import React from 'react'
import './back.css';
import image from './../images/background.jpg'
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';



export default function Back() {
  const navigator = useNavigate();
  return (
    
     
    <div className='back'>
        <h1 className='heading'>Enjoy the world
          and lifestyle.
        </h1>
      <a ><button onClick={()=>navigator("/front")} className='but'> <BsFillArrowRightCircleFill/></button></a>
        
       

    </div>
  )
}
