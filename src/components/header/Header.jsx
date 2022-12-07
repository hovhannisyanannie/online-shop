import React from 'react'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import "./header.css"


const Header = () => {
    const [click, setClick] = useState(false);
    const [header, setHeader]=useState(false)
    const handleClick = () => setClick(!click);

    const state = useSelector((state) => state.CartReducer);

    const handleChange=()=>{
      if(window.scrollY>=80){
        setHeader(true)
      }else{
        setHeader(false)
      }
    }
    
    useEffect(() => {
      handleChange()
      window.addEventListener("scroll", handleChange)
    })


  return (
    <header className={header?"header scroll":"header"}>
          <div className="inner">
              <div className="box">
                    <Link to="/" >LORA ONLINE SHOP</Link>                  
              </div>
              <div className="box">
                <div className="nav">
                    <ul className={click ? "nav-menu active" : "nav-menu"}  onClick={handleClick}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" >Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-links" >Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-links" >Register</Link>
                        </li>
                    </ul>
                </div>
              </div>
              <div className="box">
                    <div className="buttons">
                        <Link to="/cart"><i className="fa-solid fa-bag-shopping"></i> <span> ({state.length})</span></Link> 
                    </div>
              </div>
              <div className="nav-icon " onClick={handleClick}>
              {click ? (<i className="fa-solid fa-circle-xmark" ></i>):
              (<i className="fa-solid fa-bars-staggered"></i>)}
            </div>
          </div>
    </header>
  )
}

export default Header
