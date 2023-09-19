import React from 'react'
import signupImg from "../assets/signup.jpg"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join our woolly community of dedicated farmers and enthusiasts."
      desc1="Sign up today to embark on a journey where the softest fibers meet sustainable practices."
      desc2="Together, we're weaving a future that's as warm and inviting as the wool from our farms."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup