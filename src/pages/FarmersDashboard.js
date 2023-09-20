import React from "react";
import Farmer from "../components/Farmers/Farmer";

import woolImage from "../assets/wool.jpg";
import woolThreads from "../assets/wool-threads.jpg";
import sheep from "../assets/sheep-in-farm.jpg";

const DUMMY_WOOL_ITEMS = [
	{
		uniqueCode: "code1",
		quantity: 2,
		quality: "good",
		location: "Jabalpur",
		producedTime: "some time",
		color: "orange",
		images: [woolImage, woolThreads, sheep],
	},
	{
		uniqueCode: "code2",
		quantity: 5,
		quality: "good",
		location: "Bhopal",
		producedTime: "some time",
		color: "white",
		images: [woolImage, woolThreads, sheep],
	},
	{
		uniqueCode: "code3",
		quantity: 8,
		quality: "average",
		location: "Indore",
		producedTime: "some time",
		color: "white",
		images: [woolImage, woolThreads, sheep],
	},
];

const FarmersDashboard = () => {
	return (
		<Farmer
			username="Kushagra Mishra"
			totalWool={20}
			soldWool={8}
			farmer_uid={"JKL2675WE9"}
			uniqueCode={"232kldd3"}
			woolItems={DUMMY_WOOL_ITEMS}
		/>
	);
};

export default FarmersDashboard;
