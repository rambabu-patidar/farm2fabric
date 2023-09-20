import React from "react";
import "./Home.css";
import heroimg from "../assets/logo-igmg.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import Map from "../components/Home/Map";

const Home = () => {
	return (
		<div className="home">
			{/* page-1(hero section) */}
			<div className="page-1">
				<div className="heading">
					<h1 className="hero-title">From Nature, For Nature</h1>
					<p>
						From Farm to Fiber: Uniting Wool Producers and Enthusiasts. Spinning
						Stories, Weaving Dreams: Your Source for Quality Wool.
					</p>
					<button className="btn">Learn More</button>
				</div>

				<img
					className="hero-img"
					src={heroimg}
					alt="hero img"
					width={200}
					height={400}
				/>
			</div>

			{/* page-2 */}
			<div className="page2">
				<div className="page2-img">
					<img src={pic2} alt="pic2" height={10} />
				</div>
				<div className="page2-content">
					<h1>About Us</h1>
					<p>
						Farm2Fabric is a dedicated online platform designed to cater to the
						needs of both wool farmers and buyers within the wool industry. Our
						comprehensive services bring together the world of wool, making it
						easier for wool producers and purchasers to connect, trade, and
						access valuable resources.
					</p>
				</div>
			</div>
			{/* page 3 */}
			<div className="page3">
				<div className="page3-content">
					<h1>Wear Wool, Not Fossil Fuel</h1>
					<p>
						Every 25 minutes, an Olympic-sized pool of oil is used to make
						synthetic clothing. Textiles - such as polyester, nylon and acrylic
						- are a highly reliant product group made from fossil fuel. 100%
						natural, renewable and biodegradable, Merino wool can help you to
						buy less and buy better. Wool is a renewable and biodegradable natural
						fiber, aligning with sustainability goals and eco-friendly textile 
						practices. Wool plays a crucial role in Indian culture and traditions. 
						It is used to create traditional textiles, shawls, carpets, and other 
						handicrafts, preserving cultural heritage.
					</p>
				</div>
				<div className="page3-img">
					<img src={pic3} alt="pic3" height={10} />
				</div>
			</div>

			<Map />
		</div>
	);
};

export default Home;
