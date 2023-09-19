import React from 'react'
import loginImg from "../assets/login.jpg"
import Template from "../components/Template"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Welcome to a community bound by the warmth of wool"
      desc2="Where every login is a step closer to the heart of our woolen wonders"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}
export default Login;
