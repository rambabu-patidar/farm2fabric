import React from 'react'
import './Home.css'
import heroimg from "../assets/logo-igmg.jpg"
import pic2 from "../assets/pic2.jpg"


const Home = () => {
  return (
    <div className='home'>
      {/* page-1(hero section) */}
      <div className='page-1'>
        <div className="heading">
          <h1 className='hero-title'>From Nature, For Nature</h1>
          <p>From Farm to Fiber: Uniting Wool Producers and Enthusiasts.
          Spinning Stories, Weaving Dreams: Your Source for Quality Wool.</p>
          <button className='btn'>Learn More</button>
        </div>
        
        <img className="hero-img" src={heroimg} alt="hero img" width={200} height={400} />
      </div>

      {/* page-2 */}
      <div className="page2">
        <div className="page2-img">
          <img src={pic2} alt="pic2" height={10} />
        </div>
        <div className="page2-content">
          <h1>About Us</h1>
          <p>WoolFarm Connect is a dedicated online platform designed to cater to the needs 
            of both wool farmers and buyers within the wool industry. Our comprehensive services 
            bring together the world of wool, making it easier for wool producers and purchasers 
            to connect, trade, and access valuable resources.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
