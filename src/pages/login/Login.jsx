import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const[email, setEmail]=useState("");
  const[password, setPassword]=useState(""); 

  const formSubmithandler=(e)=>{
    e.preventDefault();

    if(email.trim()==="") return toast.error("Please enter your email");
    if(password.trim()==="") return toast.error("Please enter your password");
  }


  return (
    <div className="form-container">
      <ToastContainer />
          <div className="inner">
          <h1 className='title'>Log into your account</h1>
          <form onSubmit={formSubmithandler}>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder='Email' 
            />
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
             type= "password"
             placeholder='Password' />
            <button className='btn'>Login</button>
          </form>
          <div className="footer">
            <span>Don't have an account yet?</span> 
            <Link to="/register" className='forms-link'>
            <span>Register</span>
            </Link>
          </div>
          </div>
    </div>
  )
}

export default Login