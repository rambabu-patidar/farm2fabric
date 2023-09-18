import React from 'react'

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

            <button className='text-black bg-green-200 py-[8px] 
            px-[12px] rounded-[8px] border'>
                Log in
            </button>

            <button  className='bg-green-200 text-black py-[8px] 
            px-[12px] rounded-[8px] border'>
                Sign up
            </button>
            
        </div>

    </header>
  )
}

export default Navbar