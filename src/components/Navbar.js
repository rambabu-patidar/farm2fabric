import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    // let isLoggedIn = props.isLoggedIn;
    // let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <header className='flex gap-x-6 p-6 justify-between text-black bg-green-400'>
        {/* Logo */}
        <img src="" alt="logo" width={160} height={32} loading="lazy" className='mr-5' />

        {/* nav-links */}
        <nav className='text-richblack-100 flex gap-x-7 align-middle'>
            <a href="/#">Home</a>
            <a href="/#">Why Wool?</a>
            <a href="/#">News</a>
            <a href="/#">About</a>
            <a href="/#">Prices</a>
            <a href="/#">Contact</a>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>

            <Link to='/login'>
                <button className='text-black bg-green-200 py-[8px] 
                px-[12px] rounded-[8px] border'>
                    Log in
                </button>
            </Link>
            
            <Link to='/signup'>
                <button  className='bg-green-200 text-black py-[8px] 
                px-[12px] rounded-[8px] border'>
                    Sign up
                </button>
            </Link>
            
            
        </div>

    </header>
  )
}

export default Navbar