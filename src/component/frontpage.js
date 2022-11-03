import React from 'react'
import './frontpage.css';
import {MdSettingsVoice} from "react-icons/md";
import image from './../images/1.jpg';
import { useNavigate } from "react-router-dom";

export default function Frontpage() {
  const navigate =useNavigate();
  return (
    <div className='front'>
  <input type="search" placeholder="Search " aria-label="Search"  />
  <button className='non'>< MdSettingsVoice /></button>
  <img className='khan' src={image}alt='' />
   <p>Welcome to my world End ?</p>
  
         <button className="button" onClick={() => navigate("/")} >Go Back</button>
  
  
    </div>
  )
}
