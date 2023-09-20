import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WhyWool from "./pages/WhyWool";
import FarmersDashboard from "./pages/FarmersDashboard";
import BuyersDashboard from "./pages/BuyersDashboard";
import Shop from "./components/Buyers/Shop";
import BuyerLogin from "./components/Buyers/BuyerLogin";
import WoolDetails from "./components/Buyers/WoolDetails/WoolDetails";
import ItemDetailPage from "./components/Farmers/DetailPage/ItemDetailPage";
import NewsPage from "./pages/News";
import WhyWoolPage from "./pages/WhyWool";
import Footer from "./components/Footer";
function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div>
			<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
			<Routes>
				<Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
				<Route
					path="/login"
					element={<Login setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route
					path="/signup"
					element={<Signup setIsLoggedIn={setIsLoggedIn} />}
				/>

				<Route path="/news" element={<NewsPage />} />
				<Route path="/why-wool" element={<WhyWoolPage />} />

				<Route path="/farmers-dashboard" element={<FarmersDashboard />} />
				<Route
					path="/farmers-dashboard/wool-details/:uniqueCode"
					element={<ItemDetailPage />}
				/>

				<Route path="/buyers-dashboard" element={<BuyersDashboard />} />
				<Route
					path="/buyers-dashboard/basic-details"
					element={<BuyerLogin />}
				/>
				<Route path="/buyers-dashboard/shop" element={<Shop />} />
				<Route
					path="/buyers-dashboard/wool-details/:id"
					element={<WoolDetails />}
				/>
				<Route path="/why-wool" element={<WhyWool />} />
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
