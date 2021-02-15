import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
       <div className='login'>
          <Link className='form-logo-link' to='/'>
             <img src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png' className='login-logo' />
          </Link>
           <div className='container-login'>
               <h1>Sign in</h1>
               <form className='login-form'>
                   <span>E-mail</span>
                   <input type='email' />
                   <span>Password</span>
                   <input type='password' />
                   <button>Sign In</button>
               </form>
               <p>By signing in you agree to Amazons conditions of use and sale. please see our Privacy Notice,our Cookies Notice and our Inrest-Based Ads Notice</p>
               <button className='c-f-but'>Create your Amazon Account</button> 
           </div>
       </div>
    )
}

export default Login;