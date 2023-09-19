import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-12/12 px-[200px] py-12 mx-auto gap-y-0 bg-custom-color'>
            <div className='w-11/12 max-w-[500px]' >
                <h1
                className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' 
                >
                    {title}
                </h1>

                <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                    <span className='text-richblack-100'>{desc1}</span>
                    <br/>
                    <span className='text-blue-900 italic'>{desc2}</span>
                </p>

                {formtype === "signup" ? 
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <p className='text-richblack-700 font-medium leading[1.375rem]'>
                        OR
                    </p>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
                border border-green-500 px-[12px] py-[8px] gap-x-2 mt-4 '>
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </button>

            </div>


        <img src={image}
            alt="Students"
            width={450}
            height={45}
            className='mr-5 max-h-[550px]'
        />    
    </div>
  )
}

export default Template