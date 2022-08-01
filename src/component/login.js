import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './navbar'

const Login = () => {
  const navigate = useNavigate();
  const login =()=>{
    localStorage.setItem('Login',true)
    navigate('/')

}
useEffect(()=>{
  let Login = localStorage.getItem('Login')
  if(Login){
    navigate('/')
  }
},[])
  return (
    <>
    <Nav/>

    This is Login Page
    <div className="p-5 border border-blue-500 w-[20%] mx-auto mt-5">
        <input type="text" placeholder='username' className='text-blue p-2 bg-slate-400 m-2 border-blue-400' /><br />
       
        <input type="text" placeholder='Email ' className='text-blue p-2 bg-slate-400 m-2 border-blue-400' /><br />
        <button className=' bg-slate-400 p-1 rounded-md text-center ' onClick={login}>Login</button>
    </div>
    </>

  )
}

export default Login