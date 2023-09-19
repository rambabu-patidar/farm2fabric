import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo2.png'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <header className='flex gap-x-8 p-4 justify-evenly text-black bg-green-400 w-full'>
        {/* Logo */}
        <Link to="/">
            <img src={logoImg} alt="logo" width={60} height={32} loading="lazy" className='' />
        </Link>

        {/* nav-links */}
        <nav className='text-richblack-100 flex gap-x-7 justify-center items-center'>
            <a href="/">Home</a>
            <Link to="/why-wool">Why Wool?</Link>
            <Link to="/news">News</Link>
            <Link to="/about">About</Link>
            <Link to="/prices">Prices</Link>
            <Link to="/contact">Contact</Link>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      

    </header>
  )
}

export default Navbar