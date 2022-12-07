import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";


const Register = () => {
    const[email, setEmail]=useState("");
    const[name, setName]=useState("");
    const[surname, setSurname]=useState("");
    const[address, setAddress]=useState(""); 
    const[password, setPassword]=useState(""); 
    

  const formSubmithandler=(e)=>{
    e.preventDefault();

    if(email.trim()==="") return toast.error("Please enter your email");
    if(name.trim()==="") return toast.error("Please enter your First Name");
    if(surname.trim()==="") return toast.error("Please enter your Last Name");
    if(address.trim()==="") return toast.error("Please enter your address");
    if(password.trim()==="") return toast.error("Please enter your password");
  }

  return (
    <div className="form-container">
      <ToastContainer />
          <div className="inner">
          <h1 className='title'>Create new account</h1>
          <form onSubmit={formSubmithandler}>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder='Email' 
            />
            <input 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder='First Name' 
            />
            <input 
            value={surname}
            onChange={(e)=>setSurname(e.target.value)}
            type="text"
            placeholder='Last Name' 
            />
            <input 
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            type="text"
            placeholder='Address' 
            />
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
             type="password" 
             placeholder='Password' />
            <button className='btn'>Register</button>
          </form>
          <div className="footer">
            <span> Already have an account?</span>
            <Link to="/login" className='forms-link'>
            <span>Login</span>
            </Link>
          </div>
          </div>
    </div>
  )
}

export default Register