import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

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
import Prices from "./pages/Prices";
import ServiceProviderDashboard from "./pages/ServiceProviderDashboard";
import Tracking from "./components/Buyers/ProductTracking/Tracking";
import WoolTracking from "./components/Farmers/WoolTracking";
import { WoolServices } from "./components/ServiceProviders/WoolServices";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div>
			<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} id="nav" />
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
				<Route path="/prices" element={<Prices />} />

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
				<Route path="/buyers-dashboard/tracking" element={<Tracking />} />
				<Route
					path="/farmers-dashboard/wool-track"
					element={<WoolTracking />}
				/>
				<Route
					path="/service-provider-dashboard"
					element={<ServiceProviderDashboard />}
				/>
				<Route
					path="/service-provider-dashboard/wool/:id"
					element={<WoolServices />}
				/>
			</Routes>
			<Footer id="footer" />
			<div className="fixed bottom-10 right-10">
				<a href="#nav">
					<FaArrowUp className="w-6 h-6" />
				</a>
			</div>
		</div>
	);
}

export default App;
