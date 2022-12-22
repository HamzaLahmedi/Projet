import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
import { userLogin } from '../redux/actions/authActions';
function Login() {

  const [data,setData]=useState({email:"",password:""});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  //handle change
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  // user login
const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(userLogin(data,navigate))
}


  return (
<>
    <div>
     
  <div id="login-form-wrap">
  <Link to='/login'>Login</Link>
  
  <form id="login-form" >
    <p>
    <input type="text" id="username" name="email" placeholder="Email Address" required  onChange={handleChange}/><i className="validation"><span></span><span></span></i>
    </p>
    <p>
    <input type="password" id="email" name="password" placeholder="password" required  onChange={handleChange}/><i className="validation"><span></span><span></span></i>
    </p>
    <Button onClick={handleSubmit} >LOGIN</Button>
  </form>
  <div id="create-account-wrap">
    <p>Not a member? <Link to='/register'> Create Account </Link></p>
  </div>
</div>

    </div>
</>
  )
}

export default Login;
