import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import logo from '../assets/f2f.png'
import "./Navbar.css"

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <header className='flex gap-x-9 p-4 justify-evenly text-black bg-green-400 w-full'>
        {/* Logo */}
        <Link to="/">
            <img src={logo} alt="logo" width={250} height={32} loading="lazy" className='' />
        </Link>

        {/* nav-links */}
        <nav className='flex text-teal-900 font-semibold text-lg gap-x-7 justify-center items-center pl-5'>
            <Link className='hover:scale-110 transition-all' to="/">Home</Link>
            <Link className='hover:scale-110 transition-all' to="/why-wool">Why Wool?</Link>
            <Link className='hover:scale-110 transition-all' to="/news">News</Link>
            <Link className='hover:scale-110 transition-all' to="/prices">Prices & Trends</Link>
            <a className='hover:scale-110 transition-all' href="#footer">Contact</a>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='text-teal-900 bg-custom-color hover:scale-110 transition-all py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='text-teal-900 bg-custom-color hover:scale-110 transition-all py-[8px] 
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
                    className='text-teal-900 bg-custom-color hover:scale-110 transition-all py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='text-teal-900 bg-custom-color hover:scale-110 transition-all py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
            <div id="google_translate_element"></div>
        </div>
      

    </header>
  )
}

export default Navbar