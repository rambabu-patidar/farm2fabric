import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
<<<<<<< HEAD
import WhyWool from "./pages/WhyWool"
import FarmersDashboard from "./pages/FarmersDashboard"
import BuyersDashboard from "./pages/BuyersDashboard"
import Prices from "./pages/Prices";
=======
import WhyWool from "./pages/WhyWool";
import FarmersDashboard from "./pages/FarmersDashboard";
import BuyersDashboard from "./pages/BuyersDashboard";
>>>>>>> 84ff55e77dc773a0023e4e8dd2d692939f5d0b02

import { useState } from "react";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div>
			<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
			<Routes>
<<<<<<< HEAD
				<Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
				<Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
				<Route path="/signup" element = {<Signup  setIsLoggedIn={setIsLoggedIn} />} />
				<Route path="/farmersdashboard" element={<FarmersDashboard/>}/>
				<Route path="/buyersdashboard" element={<BuyersDashboard/>}/>
				<Route path="/why-wool" element={<WhyWool/>}/>
				<Route path="/prices" element={<Prices/>}/>
=======
				<Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
				<Route
					path="/login"
					element={<Login setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route
					path="/signup"
					element={<Signup setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route path="/farmersdashboard" element={<FarmersDashboard />} />
				<Route path="/buyersdashboard" element={<BuyersDashboard />} />
				<Route path="/why-wool" element={<WhyWool />} />
>>>>>>> 84ff55e77dc773a0023e4e8dd2d692939f5d0b02
			</Routes>
		</div>
	);
}

export default App;
